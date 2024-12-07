const Hero = ({ data }) => {
  const renderHero = (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="w-1/2 p-4">
        <img
          src={`http://localhost:5773${data.image.formats.large.url}`}
          alt="Image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 p-4">
        <div className="text-md text-gray-700 mb-2">{data.content1}</div>
        <div className="text-md text-gray-700 mb-2">{data.content2}</div>
        <div className="text-md text-gray-700 mb-2">{data.content3}</div>
        <div className="text-md text-gray-700 mb-2">{data.content4}</div>
        <div className="text-md text-gray-700 mb-2">{data.content5}</div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center bg-gray-200 p-10">
      {renderHero}
    </div>
  );
};

export default Hero;
