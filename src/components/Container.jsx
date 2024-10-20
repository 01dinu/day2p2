import React, { useState } from 'react';
// Import the CSS file

const images = [
  '/mc.jpg',
  '/fd.jpg',
];

function Container() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Left arrow */}
      <div className="left-arrow" onClick={handlePrevSlide}>
        &#10094;
      </div>

      {/* Text Content */}
      <div className="content">
        <h1 className="headline">GROCERIES DELIVERY</h1>
        <p className="description">
          We know how large objects will act,<br /> but things on a small scale just do not act that way.
        </p>
      
        <div className='btn-shp'>
          <button className="shop-now-btn">
              Start Now
          </button>
        </div>
      </div>

      {/* Right arrow */}
      <div className="right-arrow" onClick={handleNextSlide}>
        &#10095;
      </div>

      {/* Carousel Indicator */}
      <div className="carousel-indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator-box ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)} // Allow users to click to navigate
          />
        ))}
      </div>
    </div>
  );
};

export default Container;
