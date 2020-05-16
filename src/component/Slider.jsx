import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../stylesheet/slider.scss';

import { ShowSlides, TimingSlides, CurrentSlide } from '../javascript/slide-show';

import img1 from '../media/slider/slide1.jpg';
import img2 from '../media/slider/slide2.jpg';
import img3 from '../media/slider/slide3.jpg';

import icon1 from '../media/slider/check.png';
import icon2 from '../media/slider/user.png';

const imgGroup = [img1, img2, img3];
const btnGroup = [icon1, icon2, 0];

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
      <div key={`btnIcon${index.toString()}`}>
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
  }

  render() {
    return (
      <section>
        <div className="slider">
          <ImageElement topSection={this.topContent} />
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
        <BottomSection content={this.btns} />
      </section>
    );
  }
}

TopSlider.propTypes = {
  content: PropTypes.objectOf(PropTypes.object).isRequired,
  btns: PropTypes.objectOf(PropTypes.object).isRequired,
};
