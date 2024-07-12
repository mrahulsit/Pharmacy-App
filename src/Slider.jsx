import "./App.css"
import React, { useState } from 'react';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div className="CSSgal">
      <s id="s1"></s>
      <s id="s2"></s>
      <s id="s3"></s>
      <s id="s4"></s>

      <div className="slider" style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}>
        <div style={{ background: '#5b8' }}>
          <h2>PURE <b>CSS</b> SLIDESHOW</h2>
          <p>Responsive Slideshow Gallery created using CSS only<br />by Roko</p>
        </div>
        <div style={{ background: '#85b' }}>
          <h2>Slide 2</h2>
        </div>
        <div style={{ background: '#e95' }}>
          <h2>Slide 3</h2>
        </div>
        <div style={{ background: '#e59' }}>
          <h2>Slide 4</h2>
        </div>
      </div>

      <div className="prevNext">
        <div>
          <a href="#s4" onClick={() => handleSlideChange(4)}></a>
          <a href="#s2" onClick={() => handleSlideChange(2)}></a>
        </div>
        <div>
          <a href="#s1" onClick={() => handleSlideChange(1)}></a>
          <a href="#s3" onClick={() => handleSlideChange(3)}></a>
        </div>
        <div>
          <a href="#s2" onClick={() => handleSlideChange(2)}></a>
          <a href="#s4" onClick={() => handleSlideChange(4)}></a>
        </div>
        <div>
          <a href="#s3" onClick={() => handleSlideChange(3)}></a>
          <a href="#s1" onClick={() => handleSlideChange(1)}></a>
        </div>
      </div>

      <div className="bullets">
        <a href="#s1" onClick={() => handleSlideChange(1)}>1</a>
        <a href="#s2" onClick={() => handleSlideChange(2)}>2</a>
        <a href="#s3" onClick={() => handleSlideChange(3)}>3</a>
        <a href="#s4" onClick={() => handleSlideChange(4)}>4</a>
      </div>
    </div>
  );
};

export default Slider;
