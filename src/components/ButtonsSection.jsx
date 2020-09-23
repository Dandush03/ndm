import React from 'react';
import PropTypes from 'prop-types';

import icon1 from '../media/slider/check.png';
import icon2 from '../media/slider/info.png';
import icon3 from '../media/slider/user.png';

const ButtonsSection = ({ content }) => {
  const btnGroup = [icon1, icon2, icon3];
  const contents = [];

  Object.keys(content).forEach((btn, index) => {
    contents.push(
      <div key={`btnIcon${index.toString()}`} name={`form-${index}`}>
        <img src={btnGroup[index]} alt="Icon" className="icon" />
        <div className="content">
          <span>{content[btn].span}</span>
          <h2>{content[btn].text}</h2>
        </div>
      </div>,
    );
  });
  return (
    <div className="btns-section">
      {contents}
    </div>
  );
};

ButtonsSection.propTypes = {
  content: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ButtonsSection;
