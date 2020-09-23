import React from 'react';
import PropTypes from 'prop-types';


import BrandLogo from '../media/header/logo';

const ImgContainer = ({ img }) => (
  <div className="images-container">
    <img src={img} alt="images" className="bg-image" />
    <div>
      <BrandLogo />
    </div>
  </div>
);

ImgContainer.propTypes = {
  img: PropTypes.string.isRequired,
};

export default ImgContainer;
