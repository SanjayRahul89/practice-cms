import useFetchUrl from "../Hooks/fetchUrl";
import "bootstrap-icons/font/bootstrap-icons.css";
import IsError from "../StateVariables/isError";
import IsLoading from "../StateVariables/isLoading";
import Animation from "../Sections/Animation";
import Cards from "../Sections/cards";
import Features from "../Sections/features";
import Hero from "../Sections/hero";
import Subscribe from "../Sections/subscribe";

const HomePage = () => {
  const { data, isLoading, isError } = useFetchUrl(
    "http://localhost:5773/api/homepages/?populate[blocks][populate]=*"
  );

  if (isLoading) {
    return <div>{<IsLoading isLoading={"Loading...!!!"} />}</div>;
  } else if (isError) {
    return <div>{<IsError isError={isError} />}</div>;
  } else {
    const blocks = data?.data[0].blocks;

    return (
      <div className="flex flex-wrap flex-col justify-center m-2">
        <Animation data={blocks[0]} />
        <Cards data={blocks[1]} />
        <Hero data={blocks[2]} />
        <Features data={blocks[3]} />
        <Subscribe data={blocks[4]} />
      </div>
    );
  }
};

export default HomePage;
