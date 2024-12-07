const IsLoading = ({ isLoading }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full"></div>
      <div className="text-lg ml-4">{isLoading}</div>
    </div>
  );
};

export default IsLoading;
