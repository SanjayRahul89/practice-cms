import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchUrl = <T>(url: string): { data: T | null; isLoading: boolean; isError: string | null } => {
    const [data, setData] = useState<null|T>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<null|string>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(url);
            setData(response.data);
          } catch (err) {
            setIsError(err);
          } finally {
            setIsLoading(false);
          }
        };
      
        if (url) {
            fetchData();
        }
      
    }, [url]);

    return { data, isLoading, isError };
};

export default fetchUrl;
