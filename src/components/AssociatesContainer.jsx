import React from 'react';
import PropTypes from 'prop-types';
import Associate from './Associate';

import '../stylesheet/associates.scss';


const AssociatesContainer = ({ content }) => {
  const associates = content.map((obj) => <Associate data={obj} key={obj.name} />);

  return (
    <section className="associates-area">
      {associates}
    </section>
  );
};


AssociatesContainer.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AssociatesContainer;
