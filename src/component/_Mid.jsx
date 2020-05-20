import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../stylesheet/mid.scss';

import logo from '../media/header/logo.png';

import img1 from '../media/bottom/gallery_01.jpg';
import img2 from '../media/bottom/gallery_02.jpg';
import img3 from '../media/bottom/gallery_03.jpg';
import img4 from '../media/bottom/gallery_04.jpg';


import smallLogo from '../media/header/logo-small.png';

const imgGroup = [img1, img2, img3, img4];

const ImgSection = (args) => {
  const { images } = args;
  const imagesContainer = [];
  Object.keys(imgGroup).forEach((img, index) => {
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
          <img src={smallLogo} alt="small-logo" />
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
