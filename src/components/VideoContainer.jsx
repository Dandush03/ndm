import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import videoEn from '../media/mid/ndm-english.mp4';
import videoSp from '../media/mid/ndm-spanish.mp4';

const VideoContainer = ({ lang }) => {
  const [video, setVideo] = useState(videoSp);

  useEffect(() => {
    if (lang === 'sp') {
      setVideo(videoSp);
    } else {
      setVideo(videoEn);
    }
  }, [lang]);

  return (
    <div className="video-container">
      <video autoPlay loop muted key={video}>
        <track kind="captions" srcLang="en" label="English" />
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

VideoContainer.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default VideoContainer;
