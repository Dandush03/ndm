import React from 'react';
import PropTypes from 'prop-types';

const AreasBrief = ({ content }) => {
  const div = [];
  div.push(
    <div className="brief-section wrapper" key="brief-section">
      <div>
        <div>
          <h2>{content.title}</h2>
        </div>
        <div>
          <h3>{content.firstContent.firstLetter}</h3>
          <p>{content.firstContent.content}</p>
        </div>
        <div>
          <p>{content.secondContent}</p>
        </div>
      </div>
    </div>,
  );

  return (
    div
  );
};

AreasBrief.propTypes = {
  content: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AreasBrief;
