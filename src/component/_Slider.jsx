import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../stylesheet/slider.scss';

import { ShowSlides, TimingSlides, CurrentSlide } from '../javascript/slide-show';
import Swipe from '../javascript/swiped-event';

import img1 from '../media/slider/panama1.png';
import img2 from '../media/slider/panama2.jpg';
import img3 from '../media/slider/panama3.jpg';
import img4 from '../media/slider/panama4.jpg';

import icon1 from '../media/slider/check.png';
import icon2 from '../media/slider/info.png';
import icon3 from '../media/slider/user.png';

const imgGroup = [img1, img2, img3, img4];
const btnGroup = [icon1, icon2, icon3];

const ImageElement = (arg) => {
  const content = [];
  const { topSection } = arg;
  Object.keys(topSection).forEach((e, i) => {
    let className;
    if (i === 0) {
      className = 'active';
    }
    content.push(
      <div className={`slide-img ${className}`} key={`menuLi${i.toString()}`}>
        <img src={imgGroup[i]} alt="Slide Img 3" />
        <div className="slide-img-content">
          <p>{topSection[e].span}</p>
          <h2>{topSection[e].span}</h2>
          <div className="btn-container">
            <button type="button">{topSection[e].btn}</button>
          </div>
        </div>
      </div>,
    );
  });
  return (
    <ul>
      { content }
    </ul>
  );
};

const BottomSection = (arg) => {
  const content = [];
  const btns = arg.content;

  Object.keys(btns).forEach((btn, index) => {
    content.push(
      <div key={`btnIcon${index.toString()}`} name={`form-${index}`}>
        <img src={btnGroup[index]} alt="Icon" className="icon" />
        <div className="content">
          <span>{btns[btn].span}</span>
          <h2>{btns[btn].text}</h2>
        </div>
      </div>,
    );
  });
  return (
    <div className="btns-section">
      {content}
    </div>
  );
};

export default class TopSlider extends Component {
  constructor(props) {
    super(props);
    this.topContent = props.content;
    this.btns = props.btns;
  }

  componentDidMount() {
    TimingSlides();
    CurrentSlide(0);

    const e = document.getElementsByClassName('slider')[0];
    const swipe = new Swipe(e);
    swipe.onLeft(() => ShowSlides(0));
    swipe.onRight(() => ShowSlides(-2));
    swipe.run();
  }

  render() {
    return (
      <section>
        <div className="slider">
          <ImageElement topSection={this.topContent} />
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
        <BottomSection content={this.btns} />
      </section>
    );
  }
}

TopSlider.propTypes = {
  content: PropTypes.objectOf(PropTypes.object).isRequired,
  btns: PropTypes.objectOf(PropTypes.object).isRequired,
};
