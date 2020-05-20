import '../stylesheet/app.scss';

import React, { Component } from 'react';

import languagesPack from '../languages/home.json';

import Header from './Header';
import Slider from './Slider';
import PracticeAreas from './Areas';
import Mid from './Mid';
import Bottom from './Bottom';
import Footer from './Footer';


export default class Home extends Component {
  componentDidMount() {
    const btn = document.getElementsByClassName('page-menu-items');

    Object.keys(btn).forEach((element) => {
      btn[element].classList.remove('active');
    });

    btn[0].classList.add('active');
    btn[3].classList.add('active');
  }

  render() {
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
        <Footer />
      </div>
    );
  }
}
