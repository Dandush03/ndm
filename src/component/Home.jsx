import '../stylesheet/app.scss';

import React from 'react';

import languagesPack from '../languages/home.json';

import Slider from './Slider';
import Header from './Header';
import PracticeAreas from './Areas';
import Bottom from './Bottom';


function Home() {
  const language = localStorage.getItem('lang');

  const content = languagesPack[language];
  const {
    header: { menu }, home: {
      topSection, btns, brief, practiceAreas,
    },
  } = content;

  return (
    <div className="top-section">
      <Header menu={JSON.stringify(menu)} />
      <Slider content={topSection} btns={btns} />
      <PracticeAreas brief={brief} areas={practiceAreas} />
      <Bottom />
    </div>
  );
}

export default Home;
