import React from "react";
import { Slider } from "infinite-react-carousel";
// import "./Slide.scss";

const Slide = () => {
  // Placeholder data; replace with backend data later
  const categories = [
    { id: 1, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "WEBSITE & SOFTWARE" },
    { id: 2, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "DESIGN & MEDIA" },
    { id: 3, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "VIDEO & ANIMATION" },
    { id: 4, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "WRITING & CONTENT" },
    { id: 5, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "SALES & MARKETING" },
    { id: 6, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "DATA ENTRY" },
    { id: 7, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "WEBSITE & SOFTWARE" },
    { id: 8, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "DESIGN & MEDIA" },
    { id: 9, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "VIDEO & ANIMATION" },
    { id: 10, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "WRITING & CONTENT" },
    { id: 11, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "SALES & MARKETING" },
    { id: 12, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "DATA ENTRY" },
    { id: 13, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "WEBSITE & SOFTWARE" },
    { id: 14, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "DESIGN & MEDIA" },
    { id: 15, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "VIDEO & ANIMATION" },
    { id: 16, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "WRITING & CONTENT" },
    { id: 17, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "SALES & MARKETING" },
    { id: 18, image: "https://www.bing.com/images/blob?bcid=r61w074nlcYHRiboVnV7PDbHZp7S.....zQ", text: "DATA ENTRY" },
  ];

  return (
    <div className="slide">
      <h1>BROWSE DIFFERENT CATEGORIES:</h1>
      <div className="container">
        <Slider slidesToShow={6} arrowsScroll={5}>
          {categories.map((category) => (
            <div className="slide-item" key={category.id}>
              <img src={category.image} alt={category.text} />
              <p>{category.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
