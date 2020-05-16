import '../stylesheet/app.scss';

import React from 'react';

import content from '../languages/home.json';

import Slider from './Slider';
import Header from './Header';
import PracticeAreas from './Areas';


function Home() {
  const language = content.en;
  const {
    header: { menu }, home: {
      topSection, btns, brief, practiceAreas,
    },
  } = language;

  return (
    <div className="top-section">
      <Header menu={JSON.stringify(menu)} />
      <Slider content={topSection} btns={btns} />
      <PracticeAreas brief={brief} areas={practiceAreas} />
    </div>
  );
}

export default Home;
