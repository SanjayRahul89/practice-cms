const Subscribe = ({ data }) => {
  const renderSubscribe = (
    <div className="bg-gray-500 text-white py-12 w-full">
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-200">
          {data.title}
        </h2>
        <p className="text-lg mb-8 text-center text-gray-300">{data.content}</p>
        <form className="w-full max-w-md p-2 rounded-lg  flex flex-col items-center">
          <div className="flex w-full mb-6">
            <input
              id="userInput"
              type={data.input.inputType}
              placeholder={data.input.placeHolder}
              className="w-full sm:w-3/4 px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
            />
            <button
              type="submit"
              className="w-full sm:w-1/4 bg-blue-700 text-white px-6 py-3 ml-4 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 ease-in-out"
            >
              {data.button.text}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return <div className="flex flex-wrap justify-center">{renderSubscribe}</div>;
};

export default Subscribe;
