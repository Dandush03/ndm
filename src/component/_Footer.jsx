import '../stylesheet/footer.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BrandLogo from '../media/header/logo';

import Media from './_Media';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.content = props.content;
  }

  render() {
    const { content: { termCodition, policy, reserved } } = this;
    return (
      <footer>
        <div className="brand wrapper">
          <BrandLogo />
          <Media />
        </div>
        <div className="reserverd">
          <div className="wrapper">
            <span>{termCodition}</span>
            <span>{policy}</span>
            <span>{reserved}</span>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  content: PropTypes.objectOf(PropTypes.string).isRequired,
};
