import React from 'react';
import PropTypes from 'prop-types';

const Associate = ({
  data: {
    name, lastname, title, experties, photo,
  },
}) => (
  <div className="associate">
    <div className="info">
      <h1>{`${name} ${lastname}`}</h1>
      <h3>{experties}</h3>
      <h4>{title}</h4>
    </div>
    <div className="image">
      <img src={require(`../media/associates/${photo}`)} alt={`${name} ${lastname} Selfie`} />
    </div>
  </div>
);

Associate.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Associate;
