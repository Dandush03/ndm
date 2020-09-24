import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import '../stylesheet/slider.scss';

import { ShowSlides, TimingSlides, CurrentSlide } from '../javascript/slide-show';
import Swipe from '../javascript/swiped-event';

import ImageElement from './ImageElement';
import ButtonsSection from './ButtonsSection';


export default function TopSlider({ content, btns }) {
  useEffect(() => {
    TimingSlides();
    CurrentSlide(0);

    const e = document.getElementsByClassName('slider')[0];
    const swipe = new Swipe(e);
    swipe.onLeft(() => ShowSlides(0));
    swipe.onRight(() => ShowSlides(-2));
    swipe.run();
  }, []);

  return (
    <section>
      <div className="slider">
        <ImageElement topSection={content} />
        <div className="dots-container">
          <button className="dot active" onClick={() => CurrentSlide(0)} type="button"> </button>
          <button className="dot" onClick={() => CurrentSlide(1)} type="button"> </button>
          <button className="dot" onClick={() => CurrentSlide(2)} type="button"> </button>
          <button className="dot" onClick={() => CurrentSlide(3)} type="button"> </button>
        </div>
      </div>
      <div className="slider-changer">
        <button type="button" className="prev" onClick={() => ShowSlides(-2)}>&#10094;</button>
        <button type="button" className="next" onClick={() => ShowSlides(0)}>&#10095;</button>
      </div>
      <ButtonsSection content={btns} />
    </section>
  );
}

TopSlider.propTypes = {
  content: PropTypes.objectOf(PropTypes.object).isRequired,
  btns: PropTypes.objectOf(PropTypes.object).isRequired,
};
