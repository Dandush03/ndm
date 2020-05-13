import '../../stylesheet/header.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.props.text = null;
  }

  render() {
    const { text } = this.props;
    this.data = JSON.parse(text);
    if (!this.data) {
      return null;
    }
    return (
      <header>
        <div>
          <div>
            <div className="brand-info">
              <p>Paitilla</p>
              <hr />
              <p>info@ndm.com.pa</p>
            </div>
            <div className="media-icons">
              <a href="https://www.facebook.com/ndmlawfirm/">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
              </a>
              <a href="https://www.instagram.com/ndmlawfirm/">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </a>
            </div>
            <div className="languages">
              <p>spanish</p>
              <p>english</p>
            </div>
          </div>
          <menu>
            <div className="brand-logo">
              <img src="./media/logo.png" alt="Company Logo" className="brand-img" />
            </div>
            <div className="items">
              <ul>
                <li className="active"><button type="button">{this.data.home}</button></li>
                <li><button type="button">{this.data.about}</button></li>
                <li><button type="button">{this.data.work}</button></li>
                <li><button type="button">{this.data.contact}</button></li>
              </ul>
              <p>800.800.8000</p>
            </div>
          </menu>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
