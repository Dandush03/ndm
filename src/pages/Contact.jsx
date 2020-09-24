import '../stylesheet/contact.scss';

import React, { useEffect, useState } from 'react';

import languagesPack from '../languages/home.json';

import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Contact() {
  const [language, setLanguage] = useState(localStorage.getItem('lang'));
  const [content, setContent] = useState(languagesPack[language]);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    const btn = document.getElementsByClassName('page-menu-items');
    Object.keys(btn).forEach((element) => {
      btn[element].classList.remove('active');
    });
    btn[1].classList.add('active');
    btn[3].classList.add('active');

    const header = document.getElementsByTagName('header')[0];
    header.classList.add('contact');

    document.title = 'NDM Law Firm | Contact';
  });


  const {
    header: { menu }, contact, footer,
  } = content;

  return (
    <div>
      <Header
        menu={JSON.stringify(menu)}
        setLanguage={setLanguage}
        language={language}
      />
      <div className="contact-main-info">
        <h2>{contact.title}</h2>
        <p>{contact.brief}</p>
        <h3>{contact.lblPhone}</h3>
        <p className="phone">{contact.phone}</p>
        <p className="phone">{contact.fax}</p>
        <h3>{contact.lblEmail}</h3>
        <p>{contact.email}</p>
      </div>
      <div className="contact-main">
        <div className="contact-branch">
          <h2>{contact.brand1}</h2>
          <h3>{contact.lblAddress}</h3>
          <p>{contact.address1}</p>
          <div>
            <div className="media-contact-icons">
              <a href="https://www.facebook.com/ndmlawfirm/" className="facebook-brand">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ndmlawfirm/" className="instagram-brand">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="cover">
            <a href="https://www.google.com/maps/place/ParaPago+Panama+Oceania+Business+Plaza/@8.9805608,-79.5120315,17z/data=!3m1!4b1!4m5!3m4!1s0x8faca91c70f45f51:0x5772e541be51b7a3!8m2!3d8.9805555!4d-79.5098428" className="cover"> </a>
          </div>
          <embed title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9080756680587!2d-79.511864484673!3d8.980606093554474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca91c7834c9bb%3A0xc95b7089e324a79a!2sOceania%20Business%20Plaza!5e0!3m2!1sen!2sve!4v1590002407279!5m2!1sen!2sve" aria-hidden="false" tabIndex="0" />
        </div>
      </div>
      <div className="contact-main">
        <div className="contact-branch">
          <h2>{contact.brand2}</h2>
          <h3>{contact.lblAddress}</h3>
          <p>{contact.address2}</p>
          <div>
            <div className="media-contact-icons">
              <a href="https://www.facebook.com/ndmlawfirm/" className="facebook-brand">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ndmlawfirm/" className="instagram-brand">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="cover">
            <a href="https://www.google.com/maps/dir//Playa+Venao,+Panama/@7.432597,-80.1964515,17z/data=!4m17!1m7!3m6!1s0x8fb26405796ea2bb:0xb183cca7588de854!2sPlaya+Venao!3b1!8m2!3d7.4324072!4d-80.1955269!4m8!1m0!1m5!1m1!1s0x8fb26405796ea2bb:0xb183cca7588de854!2m2!1d-80.1955268!2d7.432407!3e4" className="cover"> </a>
          </div>
          <embed title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.290558340991!2d-80.19771768467344!3d7.433065313981651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjUnNTkuMCJOIDgwwrAxMSc0My45Ilc!5e0!3m2!1sen!2sve!4v1590192703840!5m2!1sen!2sve" aria-hidden="false" tabIndex="0" />
        </div>
      </div>
      <Footer content={footer} />
    </div>
  );
}
