import '../stylesheet/app.scss';

import React from 'react';

import languagesPack from '../languages/home.json';

import Slider from './Slider';
import Header from './Header';
import PracticeAreas from './Areas';
import Mid from './Mid';
import Bottom from './Bottom';

function Home() {
  const language = localStorage.getItem('lang');

  const content = languagesPack[language];
  const {
    header: { menu }, home: {
      topSection, btns, brief,
      practiceAreas, mid, bottom,
    },
  } = content;

  return (
    <div className="top-section">
      <Header menu={JSON.stringify(menu)} />
      <Slider content={topSection} btns={btns} />
      <PracticeAreas brief={brief} areas={practiceAreas} />
      <Mid data={mid} />
      <Bottom data={bottom} />
    </div>
  );
}

export default Home;
