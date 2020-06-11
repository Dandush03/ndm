import '../stylesheet/contactForm.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
    this.data = props.data;
  }

  cancelBtn() {
    document.body.classList.remove('pop-form');
    this.setState({ status: '' });
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    const { state: { status }, props: { type } } = this;
    let url = 'https://formspree.io/mbjzdvlr';
    let subject = 'Free Evaluation';
    let data = this.data.info;
    if (type === 'form-0') {
      url = 'https://formspree.io/xnqbewlq';
      subject = 'Apointment';
      data = this.data.contact;
    }
    return (
      <div className="form-container active">
        <form
          action={url}
          onSubmit={this.submitForm}
          method="POST"
        >
          <label htmlFor="subject" style={{ display: 'none' }}>
            subject
            <input type="text" name="subject" required value={subject} readOnly />
          </label>
          <h2>{data.title}</h2>
          {/* eslint-disable-next-line */}
          <p>{data.brief}</p>
          <label htmlFor="name">
            {data.lblName}
            <input type="text" name="name" required />
          </label>
          <label htmlFor="phone">
            {data.lblPhone}
            <input type="text" name="phone" required />
          </label>
          <label htmlFor="email">
            {data.lblEmail}
            <input type="email" name="email" required />
          </label>
          <label htmlFor="comment">
            {data.lblContent}
            <textarea type="textarea" name="comment" cols="50" required />
          </label>
          <div>
            {status === 'SUCCESS' ? <p>{data.success}</p> : <button type="submit">{data.btnSubmit}</button>}
            {status === 'ERROR' && <p>{data.error}</p>}
            {status === 'SUCCESS' ? <button type="button" onClick={this.cancelBtn.bind(this)}>{data.btnClose}</button> : <button type="button" onClick={this.cancelBtn.bind(this)}>{data.btnCancel}</button>}
          </div>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
