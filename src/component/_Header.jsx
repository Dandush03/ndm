import '../stylesheet/header.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import toggleFunction from '../javascript/header';

import BrandLogo from '../media/header/logo';

import Media from './_Media';

const languagesChanger = (id) => {
  localStorage.setItem('lang', id);
  window.location.reload(false);
};

const MenuElement = (arg) => {
  const { menu: { home, /* about , */ contact } } = arg;

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
      {/* <li className="page-menu-items">
        <button type="button" onClick={() => arg.handler('About')}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eject" role="img"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M448 384v64c0 17.673-14.327 32-32 32H32c-17.673
             0-32-14.327-32-32v
            -64c0-17.673 14.327-32 32-32h384c17.673 0
            32 14.327 32 32zM48.053 320h351.886c41.651 0 63.581-49.674 35.383-80.435L259.383
            47.558c-19.014-20.743-51.751-20.744-70.767 0L12.67 239.565C-15.475 270.268 6.324
            320 48.053 320z" />
          </svg>
          <p>{about}</p>
        </button>
      </li> */}
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
      <BrandLogo />
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
      <button type="button" onClick={() => languagesChanger('sp')}>Español</button>
    </li>
    <li className="menu-items">
      <button type="button" onClick={() => languagesChanger('en')}>English</button>
    </li>
    <li className="menu-items">
      <button type="button" onClick={() => languagesChanger('hb')}>עברית</button>
    </li>
    <li className="menu-items">
      <button type="button" onClick={() => languagesChanger('tr')}>Türkçe</button>
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
    window.addEventListener('scroll', () => {
      const menu = document.getElementById('menu');
      const { scrollY } = window;
      if (scrollY > 50) {
        menu.classList.add('scrolling-menu');
      } else {
        menu.classList.remove('scrolling-menu');
      }
    });
  }

  render() {
    return (
      <header>
        <div className="top">
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
            <BrandLogo />
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
