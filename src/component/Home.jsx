import '../stylesheet/app.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import languagesPack from '../languages/home.json';

import ContactForm from './_contactForm';
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
    this.state = { createFrom: ' ' };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const btn = document.getElementsByClassName('page-menu-items');
    Object.keys(btn).forEach((element) => {
      btn[element].classList.remove('active');
    });
    btn[0].classList.add('active');
    btn[2].classList.add('active');

    const header = document.getElementsByTagName('header')[0];
    header.classList.remove('contact');

    document.title = 'NDM Law Firm | Home';

    const frmBtns = document.getElementsByClassName('btns-section')[0].childNodes;

    Object.keys(frmBtns).forEach((obj, index) => {
      if ((index + 1) % 3 !== 0) {
        frmBtns[obj].onclick = () => { this.formHandler(frmBtns[obj]); };
      }
    });

    const contact = document.getElementsByName('getApointment');
    Object.keys(contact).forEach((obj) => {
      contact[obj].onclick = () => { this.formHandler(contact[obj]); };
    });

    if (localStorage.getItem('lang') === 'hb') {
      const hebrew = document.body;
      console.log(hebrew);
      hebrew.classList.add('hebrew');
    }
  }

  formHandler(arg) {
    this.setState({ createFrom: arg.getAttribute('name') });
    document.body.classList.add('pop-form');
  }

  render() {
    const language = localStorage.getItem('lang');

    const content = languagesPack[language];
    const {
      header: { menu }, home: {
        topSection, btns, brief,
        practiceAreas, mid, bottom,
      }, forms, footer,
    } = content;

    const { state: { createFrom } } = this;

    return (
      <div className="top-section">
        <ContactForm type={createFrom} data={forms} />
        <Header menu={JSON.stringify(menu)} changeComponent={this.handler} />
        <Slider content={topSection} btns={btns} />
        <PracticeAreas brief={brief} areas={practiceAreas} />
        <Mid data={mid} />
        <Bottom data={bottom} />
        <Footer content={footer} />
      </div>
    );
  }
}

Home.propTypes = {
  componentHandler: PropTypes.func.isRequired,
};
