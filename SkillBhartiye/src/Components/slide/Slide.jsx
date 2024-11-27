import React from "react";
import { Slider } from "infinite-react-carousel";
import "./Slide.scss";

const Slide = () => {
  // Placeholder data; replace with backend data later
  const categories = [
    { id: 1, image: "./images/1.jpg", text: "WEBSITE & SOFTWARE" },
    { id: 2, image: "./images/2.jpg", text: "DESIGN & MEDIA" },
    { id: 3, image: "./images/3.jpg", text: "VIDEO & ANIMATION" },
    { id: 4, image: "./images/4.jpg", text: "WRITING & CONTENT" },
    { id: 5, image: "./images/5.jpg", text: "SALES & MARKETING" },
    { id: 6, image: "./images/6.jpg", text: "DATA ENTRY" },
    { id: 7, image: "./images/7.jpg", text: "WEBSITE & SOFTWARE" },
    { id: 8, image: "./images/8.jpg", text: "DESIGN & MEDIA" },
    { id: 9, image: "./images/9.jpg", text: "VIDEO & ANIMATION" },
    { id: 10, image: "./images/10.jpg", text: "WRITING & CONTENT" },
    { id: 11, image: "./images/11.jpg", text: "SALES & MARKETING" },
    { id: 12, image: "./images/12.jpg", text: "DATA ENTRY" },
    { id: 13, image: "./images/13.jpg", text: "WEBSITE & SOFTWARE" },
    { id: 14, image: "./images/14.jpg", text: "DESIGN & MEDIA" },
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