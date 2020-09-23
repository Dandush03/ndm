import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheet/bottom.scss';

import quote from '../media/bottom/quote.jpg';
import subHero from '../media/bottom/sub-hero.jpg';

export default function Bottom({ data: { quote: { title, author, content } } }) {
  return (
    <section className="quote-container">
      <div>
        <img src={quote} alt="bg-img" className="bg-image" />
        <div className="quote-content">
          <h2>{title}</h2>
          <p>{content}</p>
          <div>
            <img src={subHero} alt="sub Hero" />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Bottom.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
