import '../stylesheet/header.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import toggleFunction from '../javascript/header';

import BrandLogo from '../media/header/logo.png';

const Media = () => (
  <div className="media-icons">
    <a href="https://www.facebook.com/ndmlawfirm/" className="facebook-brand">
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
      </svg>
    </a>
    <a href="https://www.instagram.com/ndmlawfirm/" className="instagram-brand">
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    </a>
  </div>
);

const languagesChanger = (id) => {
  localStorage.setItem('lang', id);
  window.location.reload(false);
};

const MenuElement = (arg) => {
  const { menu: { home, about, contact } } = arg;

  return (
    <ul>
      <li className="page-menu-items">
        <button type="button" onClick={() => arg.handler('Home')}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
          </svg>
          <p>{home}</p>
        </button>
      </li>
      <li className="page-menu-items">
        <button type="button" onClick={() => arg.handler('About')}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eject" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M448 384v64c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32zM48.053 320h351.886c41.651 0 63.581-49.674 35.383-80.435L259.383 47.558c-19.014-20.743-51.751-20.744-70.767 0L12.67 239.565C-15.475 270.268 6.324 320 48.053 320z" />
          </svg>
          <p>{about}</p>
        </button>
      </li>
      <li className="page-menu-items">
        <button type="button" onClick={() => arg.handler('Contact')}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-signature" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor" d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288 346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z" />
          </svg>
          <p>{contact}</p>
        </button>
      </li>
    </ul>
  );
};

const MenuDiv = (arg) => (
  <menu id="menu">
    <div className="brand-logo">
      <img src={BrandLogo} alt="Company Logo" className="brand-img" />
    </div>
    <div className="items">
      <MenuElement menu={arg.menu} handler={arg.handler} />
      <p>+(507) 830 2656</p>
    </div>
  </menu>
);

const Languages = () => (
  <ul className="languages">
    <li className="menu-items">
      <button type="button" onClick={() => languagesChanger('sp')}>spanish</button>
    </li>
    <li className="menu-items">
      <button type="button" onClick={() => languagesChanger('en')}>english</button>
    </li>
  </ul>
);


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.menu = JSON.parse(props.menu);
    this.changeComponent = props.changeComponent;
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      const menu = document.getElementById('menu');
      const { pageY } = event;
      if (pageY > 50) {
        menu.classList.add('scrolling-menu');
      } else {
        menu.classList.remove('scrolling-menu');
      }
    });
  }

  render() {
    return (
      <header>
        <div>
          <div>
            <div className="brand-info">
              <p>Oceania Business Plaza, Panama</p>
              <hr />
              <p>info@ndm.com.pa</p>
            </div>
            <Media />
            <Languages />
          </div>
          <MenuDiv menu={this.menu} handler={this.changeComponent} />
        </div>
        <div className="phone-menu">
          <div>
            <button type="button" className="hamburger" onClick={toggleFunction}>
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </button>
            <Media />
          </div>
          <div className="phone-link">
            <MenuElement menu={this.menu} handler={this.changeComponent} />
            <Languages />
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  menu: PropTypes.string.isRequired,
  changeComponent: PropTypes.func.isRequired,
};
