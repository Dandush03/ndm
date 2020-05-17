import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../stylesheet/bottom.scss';

import quote from '../media/bottom/quote.jpg';
import subHero from '../media/bottom/sub-hero.jpg';

export default class Bottom extends Component {
  constructor(props) {
    super(props);
    const { data: { quote: { title, author, content } } } = props;
    this.title = title;
    this.author = author;
    this.quote = content;
  }

  render() {
    return (
      <section className="quote-container">
        <div>
          <img src={quote} alt="bg-img" className="bg-image" />
          <div className="quote-content">
            <h2>{this.title}</h2>
            <p>{this.quote}</p>
            <div>
              <img src={subHero} alt="sub Hero" />
              <span>{this.author}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Bottom.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
