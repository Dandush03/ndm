import React, { Component } from 'react';

import '../stylesheet/slider.scss';

import { ShowSlides, TimingSlides, CurrentSlide } from '../javascript/slide-show';

import img1 from '../media/slider/slide1.jpg';
import img2 from '../media/slider/slide2.jpg';
import img3 from '../media/slider/slide3.jpg';

export default class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.text = 0;
  }

  componentDidMount() {
    TimingSlides();
  }

  render() {
    return (
      <div>
        <div className="slider">
          <img src={img1} alt="Slide Img 1" className="slide-img active" />
          <img src={img2} alt="Slide Img 2" className="slide-img inactive" />
          <img src={img3} alt="Slide Img 3" className="slide-img inactive" />
        </div>
        <div className="slider-changer">
          <button type="button" className="prev" onClick={() => ShowSlides(-1)}>&#10094;</button>
          <button type="button" className="next" onClick={() => ShowSlides(1)}>&#10095;</button>
        </div>
        <div className="dots-container">
          <button className="dot active" onClick={() => CurrentSlide(0)} type="button"> </button>
          <button className="dot" onClick={() => CurrentSlide(1)} type="button"> </button>
          <button className="dot" onClick={() => CurrentSlide(2)} type="button"> </button>
        </div>
      </div>
    );
  }
}
