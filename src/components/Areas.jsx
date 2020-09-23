import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

import SubList from './SubList';


const Areas = ({ content }) => {
  const div = [];

  const { list1, list2 } = content;
  const lists = [list1, list2];
  Object.keys(lists).forEach((list, i) => {
    const subList = lists[list];
    div.push(
      <ul key={`areas-ul-${i.toString()}`}>
        <SubList list={subList} />
      </ul>,
    );
  });

  return (
    <div className="practice-areas">
      <div className="wrapper">
        <div>
          <h2>{content.title}</h2>
          <p>{content.brief}</p>
        </div>
        {div}
      </div>
    </div>
  );
};

Areas.propTypes = {
  content: PropTypes.objectOf(oneOfType([PropTypes.object, PropTypes.string])).isRequired,
};

export default Areas;
