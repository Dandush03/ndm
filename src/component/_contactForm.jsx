import '../stylesheet/contactForm.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const cancelBtn = () => {
  const { body } = document;
  body.classList.remove('disable-scroll');
};

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.type = props.type;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this);
    return false;
  }

  render() {
    return (
      <div className="form-container active">
        <form onSubmit={this.handleSubmit.bind(this)}>
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
            <button type="button" onClick={cancelBtn}>Cancel</button>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  type: PropTypes.string.isRequired,
};
