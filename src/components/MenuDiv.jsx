import React from 'react';

import BrandLogo from '../media/header/logo';

import MenuElement from './MenuElements';


const MenuDiv = (arg) => (
  <menu id="menu">
    <div className="brand-logo">
      <BrandLogo />
    </div>
    <div className="items">
      <MenuElement menu={arg.menu} handler={arg.handler} />
      <p className="phone">+(507) 830 2656</p>
    </div>
  </menu>
);

export default MenuDiv;
