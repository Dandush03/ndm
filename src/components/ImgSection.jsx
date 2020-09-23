import React from 'react';
import PropTypes from 'prop-types';

import img1 from '../media/bottom/gallery_01.jpg';
import img2 from '../media/bottom/gallery_02.jpg';

import ImgContainer from './ImgContainer';
import VideoContainer from './VideoContainer';

const ImgSection = ({ lang }) => (
  <div className="row-images">
    <ImgContainer img={img1} />
    <VideoContainer lang={lang} />
    <ImgContainer img={img2} />
  </div>
);

ImgSection.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default ImgSection;
