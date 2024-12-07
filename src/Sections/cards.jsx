const Cards = ({ data }) => {
  const handleCardClick = (item) => {
    console.log(item.view.document.URL);
  };

  const renderCards = (
    <div className="flex flex-wrap justify-center">
      {data.cards.map((item) => (
        <div
          className={`flex flex-col items-center bg-white shadow-lg shadow-${item.borderColor}-500 rounded-lg p-10 m-4 w-full max-w-72 `}
          key={item.id}
          onClick={handleCardClick}
        >
          <div
            className={`w-24 h-24 flex justify-center items-center border-2 rounded-full`}
          >
            <i
              className={`${item.icon} text-4xl`}
              style={{ color: item.borderColor }}
            />
          </div>
          <div className="text-lg font-semibold mb-2">{item.title}</div>
          <div className="text-sm text-gray-600">{item.content}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4">{renderCards}</div>
  );
};

export default Cards;
