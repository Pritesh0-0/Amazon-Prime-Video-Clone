import React, { useState } from 'react';
import {SliderData} from "./Sliderimages"
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "../style/Homepage2.css"
const ImageSlider = ({ slides }) => {
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
    <section className='slider'>
      <KeyboardArrowLeftIcon className='left-arrow' onClick={prevSlide} />
      <KeyboardArrowRightIcon className='right-arrow' onClick={nextSlide} />
      <div className='main_slider'>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
      </div>
    </section>
  );
};

export default ImageSlider;