import '../stylesheet/app.scss';

import React from 'react';

import content from '../languages/home.json';

import Slider from './Slider';
import Header from './Header';


function App() {
  let language = content.en;
  const { header } = language;
  return (
    <div className="top-section">
      <Header menu={header.menu}/>
      <Slider />
    </div>
  );
}

export default App;
