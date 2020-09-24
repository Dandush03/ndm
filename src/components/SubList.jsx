import React from 'react';
import PropTypes from 'prop-types';

const SubList = ({ list }) => {
  const div = [];
  Object.keys(list).forEach((e, i) => {
    div.push(
      <li key={`areas-li-${i.toString()}`}>{list[e]}</li>,
    );
  });

  return (
    div
  );
};

SubList.propTypes = {
  list: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default SubList;
