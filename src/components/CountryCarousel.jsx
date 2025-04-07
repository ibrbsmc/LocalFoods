import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/CountryCarousel.css';

function CountryCarousel({ landscapes }) {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Carousel fade interval={4000} controls indicators>
          {landscapes.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image}
                className="country-carousel"
                alt={`Landscape ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CountryCarousel;
