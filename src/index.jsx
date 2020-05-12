/* eslint-disable import/extensions */
import './stylesheet/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './javascript/components/Home.jsx';

window.onload = () => {
  const wrapper = document.body;
  ReactDOM.render(<Home />, wrapper);
};
