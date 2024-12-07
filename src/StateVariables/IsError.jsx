const IsError = ({ isError }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center text-red-500">
        <i className="bi bi-exclamation-triangle-fill text-4xl"></i>
        <div className="ml-2 text-lg">Error: {isError}</div>
      </div>
    </div>
  );
};

export default IsError;
