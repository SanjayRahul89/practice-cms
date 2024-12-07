import { useState, useEffect } from "react";
import axios from "axios";

type FetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  isError: string | null;
};

const useFetchUrl = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(null);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err: any) {
        setIsError("please check your url and try again!!!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetchUrl;
