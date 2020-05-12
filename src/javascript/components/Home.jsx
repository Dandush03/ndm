import '../../stylesheet/home.scss';
import React, { Component } from 'react';

import showSlides from '../slide-show';
import Content from '../api';

const SlideSection = () => (
  <div className="slideshow-container">
    <div className="my-slides fade">
      <img src="" alt="Slider" />
    </div>
    <div className="my-slides fade">
      <img src="" alt="Slider" />
    </div>
    <div className="my-slides fade">
      <img src="" alt="Slider" />
    </div>
    <button type="button" className="next">&#10095;</button>
    <button type="button" className="prev">&#10094;</button>

    <div>
      <span className="dot" onClick="currentSlide(1)" />
      <span className="dot" onClick="currentSlide(2)" />
      <span className="dot" onClick="currentSlide(3)" />
    </div>
  </div>
);

const BtnsSection = (data) => {
  const content = [];
  if (data.btns !== null && data.btns !== undefined) {
    const { btns } = data;
    Object.keys(btns).forEach((e) => {
      content.push(
        <div className="btns">
          <div className="icon">
            <svg />
          </div>
          <div className="content">
            <p>{btns[e].text}</p>
            <p>{btns[e].span}</p>
          </div>
        </div>,
      );
    });
  }
  return (
    <div>
      {content}
    </div>
  );
};

const TopSection = (data) => {
  const content = [];
  if (data.text !== null && data.text !== undefined) {
    content.push(
      <div className="content">
        <span>{data.text.span}</span>
        <h2>{data.text.title}</h2>
        <button type="button">{data.text.btn}</button>
      </div>,
    );
  }
  return (
    content
  );
};


export default class Home extends Component {
  componentDidMount() {
    showSlides();
    const loadContent = Content('en', 'home');
    loadContent((response) => {
      const tempData = JSON.parse(response);
      if (tempData) {
        this.setState(this.data = tempData);
      }
    });
  }

  render() {
    const { data } = this;
    let btns;
    let topSection;
    if (data !== undefined) {
      btns = data.btns;
      topSection = data.topSection;
    }
    return (
      <div className="main-container">
        <img src="https://res.cloudinary.com/dl-cultures/image/upload/v1588615344/logo/HeroLogo.svg" alt="Hero Logo" className="hero-logo" />
        <header />
        <main>
          <div className="top-section">
            <img src="./media/logo.png" alt="Company Logo" className="brand-logo" />
            <SlideSection />
            <TopSection text={topSection} />
            <BtnsSection btns={btns || null} />
          </div>
          <div className="bottom-section" />
        </main>
        <footer />
      </div>
    );
  }
}
