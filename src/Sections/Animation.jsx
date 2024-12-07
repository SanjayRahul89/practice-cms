import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Animation = ({ data }) => {
  console.log(data);

  const backgroundImageUrl = `http://localhost:5773/${data.BackgroundImage.formats.large.url}`;

  const textTitle = [data.title1, data.title2, data.title3];
  const textContent = [data.content1, data.content2, data.content3];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationDirection("right");
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [textContent.length]);

  const handleButtonClick = (direction) => {
    setAnimationDirection(direction);

    setCurrentTextIndex((prevIndex) => {
      if (direction === "right") {
        return (prevIndex + 1) % textContent.length;
      } else {
        return (prevIndex - 1 + textContent.length) % textContent.length;
      }
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
          textAlign: "center",
          animation: `${animationDirection}-slide 0.5s ease-in-out`,
          padding: "20px",
          maxWidth: "70%",
          margin: "20px 0",
        }}
        key={currentTextIndex}
      >
        <h1 style={{ margin: "0 0 10px 0", fontSize: "2.5rem" }}>
          {textTitle[currentTextIndex]}
        </h1>
        <p style={{ fontSize: "1.5rem", margin: 0 }}>
          {textContent[currentTextIndex]}
        </p>
      </div>

      <button
        onClick={() => handleButtonClick("left")}
        style={{
          position: "absolute",
          left: "5%",
          color: "white",
          border: "none",
          padding: "5px",
          cursor: "pointer",
          fontSize: "4rem",
          borderRadius: "10%",
          transform: "translateY(-50%)",
          top: "50%",
        }}
      >
        <BsChevronCompactLeft />
      </button>
      <button
        onClick={() => handleButtonClick("right")}
        style={{
          position: "absolute",
          right: "5%",
          color: "white",
          border: "none",
          padding: "5px",
          cursor: "pointer",
          fontSize: "4rem",
          borderRadius: "10%",
          transform: "translateY(-50%)",
          top: "50%",
        }}
      >
        <BsChevronCompactRight />
      </button>

      <style>
        {`
          @keyframes right-slide {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes left-slide {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Animation;
