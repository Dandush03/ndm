import '../../stylesheet/home.scss';
import React, { Component } from 'react';

import { TimingSlides, ShowSlides } from '../slide-show';
import Content from '../api';


const HeaderSection = (data) => {
  const content = [];
  if (data.text !== null && data.text !== undefined) {
    content.push(
      <div>
        <div>
          <div className="brand-info">
            <p>Paitilla</p>
            <p>info@ndm.com.pa</p>
          </div>
          <div className="media-icons">
            <icons />
            <icons />
            <icons />
          </div>
        </div>
        <div className="menu">
          <div className="brand-logo">
            <img src="./media/logo.png" alt="Company Logo" className="brand-logo" />
          </div>
          <div>
            <ul>
              <li><button type="button">{data.text.home}</button></li>
              <li><button type="button">{data.text.about}</button></li>
              <li><button type="button">{data.text.work}</button></li>
              <li><button type="button">{data.text.contact}</button></li>
            </ul>
            <p>800.800.8000</p>
          </div>
        </div>
      </div>,
    );
  }
  return (
    content
  );
};

const TopSection = (data) => {
  const content = [];
  if (data.text !== null && data.text !== undefined) {
    content.push(
      <div className="content">
        <span className="span">{data.text.span}</span>
        <h2>{data.text.title}</h2>
        <button type="button">{data.text.btn}</button>
      </div>,
    );
  }
  return (
    content
  );
};

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
    <div className="next-btns">
      <button type="button" className="prev">&#10094;</button>
      <button type="button" className="next">&#10095;</button>
    </div>
    <div className="dots-container">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
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

const IntroSection = (data) => {
  const content = [];
  if (data.content !== null && data.content !== undefined) {
    content.push(
      <div className="content">
        <div>
          <h2>{data.content.title}</h2>
        </div>
        <div>
          <div className="mid">
            <h4>{data.content.firstLetter}</h4>
            <p>{data.content.firstContent}</p>
          </div>
        </div>
        <div>
          <p>{data.content.secondContent}</p>
        </div>
      </div>,
    );
  }
  return (
    content
  );
};

export default class Home extends Component {
  componentDidMount() {
    const loadContent = Content('en', 'home');
    loadContent((response) => {
      const tempData = JSON.parse(response);
      if (tempData) {
        this.setState(this.data = tempData);
      }
    });
    ShowSlides();
    TimingSlides();
  }

  render() {
    const { data } = this;
    let btns;
    let topSection;
    let introSection;
    let menu;
    if (data !== undefined) {
      btns = data.btns;
      topSection = data.topSection;
      introSection = data.introSection;
      menu = data.menu;
    }
    return (
      <div className="main-container">
        <img src="https://res.cloudinary.com/dl-cultures/image/upload/v1588615344/logo/HeroLogo.svg" alt="Hero Logo" className="hero-logo" />
        <header>
          <HeaderSection text={menu} />
        </header>
        <main>
          <section className="top-section">
            <SlideSection />
            <TopSection text={topSection} />
            <BtnsSection btns={btns} />
          </section>
          <section className="intro-section">
            <IntroSection content={introSection} />
          </section>
        </main>
        <footer />
      </div>
    );
  }
}
