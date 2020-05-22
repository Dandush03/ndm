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
    if (type === 'form-0') {
      url = 'https://formspree.io/xnqbewlq';
      subject = 'Apointment';
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
            <input type="text" name="subject" required value={subject} />
          </label>
          <h2>Contact Form</h2>
          <p>We have world-class, flexible support via live chat, email, and phone. We guarantee that you’ll be able to have any issue resolved within 24 hours. You can contact our support immediately here. Just leave us your information and we'll get right back to you</p>
          <label htmlFor="name">
            Full Name
            <input type="text" name="name" required />
          </label>
          <label htmlFor="phone">
            Phone
            <input type="text" name="phone" required />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="email" required />
          </label>
          <label htmlFor="comment">
            Reason
            <textarea type="textarea" name="comment" cols="50" required />
          </label>
          <div>
            {status === 'SUCCESS' ? <p>Thanks!</p> : <button type="submit">submit</button>}
            {status === 'ERROR' && <p>Ooops! There was an error.</p>}
            {status === 'SUCCESS' ? <button type="button" onClick={this.cancelBtn.bind(this)}>close</button> : <button type="button" onClick={this.cancelBtn.bind(this)}>Cancel</button>}
          </div>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  type: PropTypes.string.isRequired,
};
