import '../../stylesheet/home.scss';
import React, { Component } from 'react';

import { TimingSlides, ShowSlides } from '../slide-show';
import Content from '../api';

// eslint-disable-next-line import/extensions
import Header from './Header.jsx';

const TopSection = (data) => {
  const content = [];
  if (data.text !== null && data.text !== undefined) {
    const { text } = data;
    Object.keys(text).forEach((obj) => {
      content.push(
        <div className="content">
          <span className="span">{text[obj].span}</span>
          <h2>{text[obj].title}</h2>
          <button type="button">{text[obj].btn}</button>
        </div>,
      );
    });
  }
  return (
    <div className="slideshow-container">
      <div className="my-slides fade">
        {content[0]}
        <img src="./media/slide1.jpg" alt="Slider" />
      </div>
      <div className="my-slides fade">
        {content[1]}
        <img src="./media/slide2.jpg" alt="Slider" />
      </div>
      <div className="my-slides fade">
        {content[2]}
        <img src="./media/slide3.jpg" alt="Slider" />
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
};

const BtnsSection = (data) => {
  const content = [];
  if (data.btns !== null && data.btns !== undefined) {
    const { btns } = data;
    Object.keys(btns).forEach((e) => {
      const url = `./media/${btns[e].icon}`;
      content.push(
        <div className="btns">
          <div className="icon">
            <img src={url} alt="" />
          </div>
          <div>
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

const HomeFooter = (data) => {
  const areasList1 = [];
  const areasList2 = [];
  let title;
  let brief;
  if (data.data !== null && data.data !== undefined) {
    title = data.data.title;
    brief = data.data.brief;
    const { list1 } = data.data;
    Object.keys(list1).forEach((item) => {
      areasList1.push(
        <li>{list1[item]}</li>,
      );
    });
    const { list2 } = data.data;
    Object.keys(list2).forEach((item) => {
      areasList2.push(
        <li>{list2[item]}</li>,
      );
    });
  }
  return (
    <footer>
      <div>
        <h2>{title}</h2>
        <p>{brief}</p>
      </div>
      <div>
        <ul>
          {areasList1}
        </ul>
        <ul>
          {areasList2}
        </ul>
      </div>
    </footer>
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
    let footer;
    if (data !== undefined) {
      btns = data.btns;
      topSection = data.topSection;
      introSection = data.introSection;
      menu = JSON.stringify(data.menu);
      footer = data.practiceAreas;
    }
    return (
      <div className="main-container">
        <img src="https://res.cloudinary.com/dl-cultures/image/upload/v1588615344/logo/HeroLogo.svg" alt="Hero Logo" className="hero-logo" />
        <Header text={menu} />
        <main>
          <section className="top-section">
            <TopSection text={topSection} />
            <BtnsSection btns={btns} />
          </section>
          <section className="intro-section">
            <IntroSection content={introSection} />
          </section>
        </main>
        <HomeFooter data={footer} />
      </div>
    );
  }
}
