import React from 'react';
import PropTypes from 'prop-types';

import img1 from '../media/slider/panama1.png';
import img2 from '../media/slider/panama2.jpg';
import img3 from '../media/slider/panama3.jpg';
import img4 from '../media/slider/panama4.jpg';


const ImageElement = ({ topSection }) => {
  const imgGroup = [img1, img2, img3, img4];
  const content = [];
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
            <button type="button" name="getApointment">{topSection[e].btn}</button>
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

ImageElement.propTypes = {
  topSection: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ImageElement;
