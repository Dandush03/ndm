import '../stylesheet/contactForm.scss';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export default function ContactForm({ data, type }) {
  const [status, setStatus] = useState('');
  const [dataType, setDataType] = useState(data.info);
  const [url, setUrl] = useState('https://formspree.io/mbjzdvlr');
  const [subject, setSubject] = useState('Free Evaluation');

  const cancelBtn = () => {
    document.body.classList.remove('pop-form');
    setStatus('');
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(formData);
  };

  useEffect(() => {
    if (type === 'form-0') {
      setDataType(data.contact);
      setUrl('https://formspree.io/xnqbewlq');
      setSubject('Apointment');
    } else {
      setDataType(data.info);
      setUrl('https://formspree.io/mbjzdvlr');
      setSubject('Free Evaluation');
    }
  }, [data.contact, data.info, type]);

  return (
    <div className="form-container active">
      <form
        action={url}
        onSubmit={submitForm}
        method="POST"
      >
        <label htmlFor="subject" style={{ display: 'none' }}>
          subject
          <input type="text" name="subject" required value={subject} readOnly />
        </label>
        <h2>{dataType.title}</h2>
        {/* eslint-disable-next-line */}
          <p>{dataType.brief}</p>
        <label htmlFor="name">
          {dataType.lblName}
          <input type="text" name="name" required />
        </label>
        <label htmlFor="phone">
          {dataType.lblPhone}
          <input type="text" name="phone" required />
        </label>
        <label htmlFor="email">
          {dataType.lblEmail}
          <input type="email" name="email" required />
        </label>
        <label htmlFor="comment">
          {dataType.lblContent}
          <textarea type="textarea" name="comment" cols="50" required />
        </label>
        <div>
          {status === 'SUCCESS' ? <p>{dataType.success}</p> : <button type="submit">{dataType.btnSubmit}</button>}
          {status === 'ERROR' && <p>{dataType.error}</p>}
          {status === 'SUCCESS' ? <button type="button" onClick={cancelBtn.bind(this)}>{dataType.btnClose}</button> : <button type="button" onClick={cancelBtn.bind(this)}>{dataType.btnCancel}</button>}
        </div>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
