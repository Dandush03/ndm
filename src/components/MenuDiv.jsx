import React from 'react';
import PropTypes from 'prop-types';

import BrandLogo from '../media/header/logo';

import MenuElement from './MenuElements';


const MenuDiv = ({ menu }) => (
  <menu id="menu">
    <div className="brand-logo">
      <BrandLogo />
    </div>
    <div className="items">
      <MenuElement menu={menu} />
      <p className="phone">+(507) 830 2656</p>
    </div>
  </menu>
);


MenuDiv.propTypes = {
  menu: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MenuDiv;
