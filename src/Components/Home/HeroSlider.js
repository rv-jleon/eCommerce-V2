import React, { useState } from "react";
import HeroImages from "./HeroImages";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./HeroSlider.css";

const HeroSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <h1 className="heroTitle">We Sell <br /> Tools!</h1>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {HeroImages.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && (<img src={slide.image} alt="test" className="image" />)}
            
          </div>  
        );
      })}
    </div>
  );
};

export default HeroSlider;