import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../stylesheet/mid.scss';

import logo from '../media/header/logo.svg';

import img1 from '../media/bottom/gallery_01.jpg';
import img2 from '../media/bottom/gallery_04.jpg';

import videoEn from '../media/mid/ndm-english.mp4';
import videoSp from '../media/bottom/gallery_04.jpg';

const lang = localStorage.getItem('lang');
let video;

if (lang === 'sp') {
  video = videoSp;
} else {
  video = videoEn;
}

const imgGroup = [img1, video, img2];

const ImgSection = (args) => {
  const { images } = args;
  const imagesContainer = [];
  Object.keys(imgGroup).forEach((img, index) => {
    if (imgGroup[img] !== video) {
      imagesContainer.push(
        <div className="images-container" key={`image-container-${index.toString()}`}>
          <img src={imgGroup[img]} alt="images" className="bg-image" />
          <div>
            <img src={logo} alt="brand-logo" className="logo" />
            <div className="images-text">
              <p>{images[`image${index + 1}`]}</p>
            </div>
          </div>
        </div>,
      );
    } else {
      imagesContainer.push(
        <div className="video-container">
          <video autoPlay loop muted>
            <track kind="captions" srcLang="en" label="English" />
            <source src={video} type="video/mp4" />
          </video>
        </div>,
      );
    }
  });

  return (
    <div className="row-images">
      {imagesContainer}
    </div>
  );
};


export default class Mid extends Component {
  constructor(props) {
    super(props);
    const { data } = props;

    this.images = data.images;
    this.span1 = data.content.span1;
    this.phone = data.content.phone;
    this.span2 = data.content.span2;
    this.h4 = data.content.h4;
    this.btn = data.content.btn;
  }

  render() {
    return (
      <section>
        <ImgSection images={this.images} />
        <div className="contact-now wrapper">
          <img src={logo} alt="small-logo" />
          <p>{this.span1}</p>
          <h3>{this.phone}</h3>
          <p>{this.span2}</p>
          <h4>{this.h4}</h4>
          <button type="button">{this.btn}</button>
        </div>
      </section>
    );
  }
}

Mid.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
