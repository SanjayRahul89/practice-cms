import { FaCheckCircle } from "react-icons/fa";

const Features = ({ data }) => {
  const renderFeatures = (
    <div className="flex flex-wrap justify-center">
      {data.features.map((item, index) => {
        const isEvenIndex = index % 2 === 0;
        const imageUrl = `http://localhost:5773/${data.image[index].formats.large.url}`;
        return (
          <div
            className="flex flex-row w-full justify-between items-center"
            key={item.id}
          >
            {isEvenIndex ? (
              <>
                <div className="w-1/2 p-4">
                  <div className="flex flex-col items-center justify-center mb-6">
                    <h1 className="text-2xl font-bold text-center mb-2">
                      {item.title}
                    </h1>
                  </div>
                  <div className="text-md text-gray-700 mb-2">
                    {item.content1}
                  </div>
                  <div className="text-md text-gray-700 mb-2">
                    {item.content2}
                  </div>
                  <div className="text-md text-gray-700 mb-2">
                    <b>{item.subContentHeading1}</b>: {item.subcontent1}
                  </div>
                  <div className="text-md text-gray-700 mb-2">
                    <b>{item.subContentHeading2}</b>: {item.subcontent2}
                  </div>
                  <div className="text-md text-gray-700 mb-2">
                    <b>{item.subContentHeading3}</b>: {item.subcontent3}
                  </div>
                </div>
                <div className="w-1/2 p-4">
                  <img
                    src={imageUrl}
                    alt="Image"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-1/2 p-4">
                  <img
                    src={imageUrl}
                    alt="Image"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="w-1/2 p-4">
                  <div className="flex flex-col items-center justify-center mb-6">
                    <h1 className="text-2xl font-bold text-center mb-2">
                      {item.title}
                    </h1>
                  </div>
                  <div className="text-md text-gray-700 mb-2">
                    {item.content1}
                  </div>
                  <div className="text-md text-gray-700 mb-2">
                    {item.content2}
                  </div>
                  <div className="text-md text-gray-700 mb-2">
                    <b>{item.subContentHeading1}</b>: {item.subcontent1}
                  </div>
                  <div className="text-md text-gray-700 mb-2">
                    <b>{item.subContentHeading2}</b>: {item.subcontent2}
                  </div>
                  <div className="text-md text-gray-700 mb-2">
                    <b>{item.subContentHeading3}</b>: {item.subcontent3}
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center mb-6 m-10">
      <div className="flex flex-col items-center justify-center mb-6 m-10">
        <h1 className="text-4xl font-bold text-center mb-2">
          {data.titleSection}
        </h1>
        <div className="w-16 h-1 bg-gray-400 rounded"></div>
      </div>
      <div className="flex flex-wrap justify-center m-10">{renderFeatures}</div>
    </div>
  );
};

export default Features;
