import '../stylesheet/contact.scss';


import React, { Component } from 'react';
import PropTypes from 'prop-types';

import languagesPack from '../languages/home.json';

import Header from './_Header';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.handler = props.componentHandler;
  }

  componentDidMount() {
    const btn = document.getElementsByClassName('page-menu-items');
    Object.keys(btn).forEach((element) => {
      btn[element].classList.remove('active');
    });
    btn[2].classList.add('active');
    btn[5].classList.add('active');

    const header = document.getElementsByTagName('header')[0];
    header.classList.add('contact');

    document.title = 'NDM Law Firm | Contact';
  }

  render() {
    const language = localStorage.getItem('lang');

    const content = languagesPack[language];
    const {
      header: { menu }, contact,
    } = content;
    console.log(contact);

    return (
      <div>
        <Header menu={JSON.stringify(menu)} changeComponent={this.handler} />
        <div className="contact-main">
          <div className="contact-main-info">
            <h2>{contact.title}</h2>
            <p>{contact.brief}</p>
            <h3>{contact.lblAddress}</h3>
            <p>{contact.address}</p>
            <h3>{contact.lblPhone}</h3>
            <p>{contact.phone}</p>
            <p>{contact.fax}</p>
            <h3>{contact.lblEmail}</h3>
            <p>{contact.email}</p>
          </div>
          <div>
            <div className="cover" />
            <embed title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9080756680587!2d-79.511864484673!3d8.980606093554474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca91c7834c9bb%3A0xc95b7089e324a79a!2sOceania%20Business%20Plaza!5e0!3m2!1sen!2sve!4v1590002407279!5m2!1sen!2sve" aria-hidden="false" tabIndex="0" />
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  componentHandler: PropTypes.func.isRequired,
};
