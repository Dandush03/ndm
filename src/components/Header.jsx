import '../stylesheet/header.scss';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import toggleFunction from '../javascript/header';

import BrandLogo from '../media/header/logo';

import Media from './Media';
import MenuElement from './MenuElements';
import MenuDiv from './MenuDiv';
import Languages from './Languages';


export default function Header({
  menu, changeComponent, setLanguage,
}) {
  const menuParse = JSON.parse(menu);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const bar = document.getElementById('menu');
      const { scrollY } = window;
      if (scrollY > 50) {
        bar.classList.add('scrolling-menu');
      } else {
        bar.classList.remove('scrolling-menu');
      }
    });
  }, []);

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
          <Languages setLanguage={setLanguage} />
        </div>
        <MenuDiv menu={menuParse} handler={changeComponent} />
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
          <MenuElement menu={menuParse} handler={changeComponent} />
          <Languages setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  menu: PropTypes.string.isRequired,
  changeComponent: PropTypes.func.isRequired,
  setLanguage: PropTypes.func.isRequired,
};
