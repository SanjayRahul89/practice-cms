import fetchUrl from "./Hooks/fetchUrl";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";

const App = () => {
  const { data, isLoading, isError } = fetchUrl(
    "http://localhost:5773/api/homepages/?populate[blocks][populate]=*"
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full"></div>
        <div className="text-lg ml-4">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex items-center text-red-500">
          <i className="bi bi-exclamation-triangle-fill text-4xl"></i>
          <div className="ml-2 text-lg">Error: {isError}</div>
        </div>
      </div>
    );
  }

  const renderSection2 = (
    <div className="flex flex-wrap justify-center">
      {data.data[0].blocks[1].cards.map((item) => (
        <div
          className={`flex flex-col items-center bg-white rounded-lg shadow-lg p-10 m-4 w-full max-w-72 `}
          key={item.id}
        >
          <div
            className={`w-24 h-24 flex justify-center items-center border-2 border-${item.borderColor}-200 rounded-full`}
          >
            <i className={`${item.icon} text-4xl`} />
          </div>
          <div className="text-lg font-semibold mb-2">{item.title}</div>
          <div className="text-sm text-gray-600">{item.content}</div>
        </div>
      ))}
    </div>
  );

  const sec3 = data.data[0].blocks[2];

  const renderSection3 = (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="w-1/2 p-4">
        <img
          src={`http://localhost:5773${sec3.image.formats.large.url}`}
          alt="Image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 p-4">
        <div className="text-lg font-semibold mb-2">{sec3.content1}</div>
        <div className="text-md text-gray-700 mb-2">{sec3.content2}</div>
        <div className="text-md text-gray-700 mb-2">{sec3.content3}</div>
        <div className="text-md text-gray-700 mb-2">{sec3.content4}</div>
        <div className="text-md text-gray-700 mb-2">{sec3.content5}</div>
      </div>
    </div>
  );

  const renderSection4 = data.data[0].blocks[3].features.map((item, index) => {
    if (index % 2 === 1) {
      return (
        <div
          className="flex flex-row w-full justify-between items-center"
          key={item.id}
        >
          <div className="w-1/2 p-4">
            <img
              src={`http://localhost:5773/uploads/features_1_21424086f8.jpeg`}
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
            <div className="text-md text-gray-700 mb-2">{item.content1}</div>
            <div className="text-md text-gray-700 mb-2">{item.content2}</div>
            <div className="text-md text-gray-700 mb-2">{item.subcontent1}</div>
            <div className="text-md text-gray-700 mb-2">{item.subcontent2}</div>
            <div className="text-md text-gray-700 mb-2">{item.subcontent3}</div>
            <div className="text-md text-gray-700 mb-2">{item.subcontent4}</div>
          </div>
        </div>
      );
    }
    if (index % 2 === 0) {
      return (
        <div
          className="flex flex-row w-full justify-between items-center"
          key={item.id}
        >
          <div className="w-1/2 p-4">
            <div className="flex flex-col items-center justify-center mb-6">
              <h1 className="text-2xl font-bold text-center mb-2">
                {item.title}
              </h1>
            </div>
            <div className="text-md text-gray-700 mb-2">{item.content1}</div>
            <div className="text-md text-gray-700 mb-2">{item.content2}</div>
            <div className="text-md text-gray-700 mb-2">{item.subcontent1}</div>
            <div className="text-md text-gray-700 mb-2">{item.subcontent2}</div>
            <div className="text-md text-gray-700 mb-2">{item.subcontent3}</div>
            <div className="text-md text-gray-700 mb-2">{item.subcontent4}</div>
          </div>
          <div className="w-1/2 p-4">
            <img
              src={`http://localhost:5773/uploads/features_1_21424086f8.jpeg`}
              alt="Image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      );
    }
  });

  const sec5 = data.data[0].blocks[4];

  const renderSection5 = (
    <div className="w-screen bg-gray-700 text-white py-10">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">{sec5.title}</h2>
        <p className="text-lg mb-6 text-center">{sec5.content}</p>
        <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="userInput"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {sec5.input.label}
            </label>
            <input
              id="userInput"
              type={sec5.input.inputType}
              placeholder={sec5.input.placeHolder}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            {sec5.button.text}
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <div className="sticky top-0  bg-gray-600 shadow-lg h-15">
        <nav className="max-w-7xl mx-auto p-4">
          <ul className="flex justify-around space-x-8 text-white text-lg">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Support</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-wrap justify-center m-10">
        <div className="flex flex-wrap justify-center gap-4">
          {renderSection2}
        </div>
        <div className="flex flex-wrap justify-center bg-gray-200 p-10">
          {renderSection3}
        </div>
        <div className="flex flex-col items-center justify-center mb-6 m-10">
          <h1 className="text-4xl font-bold text-center mb-2">
            {data.data[0].blocks[3].titleSection}
          </h1>
          <div className="w-16 h-1 bg-gray-400 rounded"></div>
        </div>
        <div className="flex flex-wrap justify-center m-10">
          {renderSection4}
        </div>
        <div className="flex flex-wrap justify-center m-10">
          {renderSection5}
        </div>
      </div>
    </div>
  );
};

export default App;
