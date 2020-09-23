import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheet/areas.scss';
import Areas from './Areas';
import AreasBrief from './AreasBrief';

export default function PracticeAreas({ brief, areas }) {
  return (
    <section className="practice-areas-section">
      <AreasBrief content={brief.content} />
      <Areas content={areas.content} />
    </section>
  );
}

PracticeAreas.propTypes = {
  brief: PropTypes.objectOf(PropTypes.object).isRequired,
  areas: PropTypes.objectOf(PropTypes.object).isRequired,
};
