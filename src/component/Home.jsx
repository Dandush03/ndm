import '../stylesheet/app.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import languagesPack from '../languages/home.json';

import Header from './_Header';
import Slider from './_Slider';
import PracticeAreas from './_Areas';
import Mid from './_Mid';
import Bottom from './_Bottom';
import Footer from './_Footer';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handler = props.componentHandler;
  }


  componentDidMount() {
    const btn = document.getElementsByClassName('page-menu-items');
    Object.keys(btn).forEach((element) => {
      btn[element].classList.remove('active');
    });
    btn[0].classList.add('active');
    btn[3].classList.add('active');

    const header = document.getElementsByTagName('header')[0];
    header.classList.remove('contact');

    document.title = 'NDM Law Firm | Home';
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
        <Header menu={JSON.stringify(menu)} changeComponent={this.handler} />
        <Slider content={topSection} btns={btns} />
        <PracticeAreas brief={brief} areas={practiceAreas} />
        <Mid data={mid} />
        <Bottom data={bottom} />
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  componentHandler: PropTypes.func.isRequired,
};
