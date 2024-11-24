import React, { useState } from "react";
import "./Carousel.scss";

const Carousel = ({
  children,
  slidesToShow,
  slidesToScroll,
  autoPlay = false,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Wrap the children into an array
  const childrenArray = React.Children.toArray(children);
  const totalSlides = childrenArray.length;

  // Calculate the width of each slide
  const slideWidth = 100 / slidesToShow;

  // Handle Next Slide
  const handleNext = () => {
    const newIndex = (currentIndex + slidesToScroll) % totalSlides;
    setCurrentIndex(newIndex);
  };

  // Handle Previous Slide
  const handlePrev = () => {
    const newIndex =
      (currentIndex - slidesToScroll + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
  };

  // Autoplay functionality
  React.useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(() => {
        handleNext();
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="carousel">
      <button className="carousel-prev" onClick={handlePrev}>
        Prev
      </button>
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(currentIndex / totalSlides) * 100}%)`,
            width: `${(totalSlides / slidesToShow) * 100}%`,
          }}
        >
          {childrenArray.map((child, index) => (
            <div
              className="carousel-slide"
              key={index}
              style={{
                flex: `0 0 ${slideWidth}%`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
