import React from 'react';
import PropTypes from 'prop-types';


const Languages = ({ setLanguage }) => {
  const langHandler = (e) => {
    localStorage.setItem('lang', e);
    setLanguage(e);
  };
  return (
    <ul className="languages">
      <li className="menu-items">
        <button type="button" onClick={() => langHandler('sp')}>Español</button>
      </li>
      <li className="menu-items">
        <button type="button" onClick={() => langHandler('en')}>English</button>
      </li>
      <li className="menu-items">
        <button type="button" onClick={() => langHandler('hb')}>עברית</button>
      </li>
      <li className="menu-items">
        <button type="button" onClick={() => langHandler('tr')}>Türkçe</button>
      </li>
    </ul>
  );
};

Languages.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};

export default Languages;
