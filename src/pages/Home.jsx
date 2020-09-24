import '../stylesheet/app.scss';

import React, { useState, useEffect } from 'react';

import languagesPack from '../languages/home.json';

import ContactForm from '../components/contactForm';
import Header from '../components/Header';
import Slider from '../components/Slider';
import PracticeAreas from '../components/PracticeAreas';
import Mid from '../components/Mid';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';


export default function Home() {
  const [createFrom, setCreateFrom] = useState('');
  const [language, setLanguage] = useState(localStorage.getItem('lang'));
  const [content, setContent] = useState(languagesPack[language]);

  const formHandler = (arg) => {
    setCreateFrom(arg.getAttribute('name'));
    document.body.classList.add('pop-form');
  };

  useEffect(() => {
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
        frmBtns[obj].onclick = () => { formHandler(frmBtns[obj]); };
      }
    });

    const contact = document.getElementsByName('getApointment');
    Object.keys(contact).forEach((obj) => {
      contact[obj].onclick = () => { formHandler(contact[obj]); };
    });
  }, []);


  useEffect(() => {
    setLanguage(localStorage.getItem('lang'));
    const hebrew = document.body;
    if (language === 'hb') {
      hebrew.classList.add('hebrew');
    } else {
      hebrew.classList.remove('hebrew');
    }

    setContent(languagesPack[language]);
  }, [language]);

  const {
    header: { menu }, home: {
      topSection, btns, brief,
      practiceAreas, mid, bottom,
    }, forms, footer,
  } = content;

  return (
    <div className="top-section">
      <ContactForm type={createFrom} data={forms} />
      <Header
        menu={JSON.stringify(menu)}
        setLanguage={setLanguage}
        language={language}
      />
      <Slider content={topSection} btns={btns} />
      <PracticeAreas brief={brief} areas={practiceAreas} />
      <Mid data={mid} language={language} />
      <Bottom data={bottom} />
      <Footer content={footer} />
    </div>
  );
}
