import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheet/mid.scss';

import BrandLogo from '../media/header/logo';
import ImgSection from './ImgSection';

export default function Mid({
  data: {
    content: {
      span1, span2, phone, h4, btn,
    },
  }, language,
}) {
  return (
    <section>
      <ImgSection lang={language} />
      <div className="contact-now wrapper">
        <BrandLogo />
        <p>{span1}</p>
        <h3 className="phone">{phone}</h3>
        <p>{span2}</p>
        <h4>{h4}</h4>
        <button type="button" name="getApointment">{btn}</button>
      </div>
    </section>
  );
}

Mid.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  language: PropTypes.string.isRequired,
};
