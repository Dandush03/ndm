import '../stylesheet/footer.scss';

import React from 'react';
import PropTypes from 'prop-types';

import BrandLogo from '../media/header/logo';

import Media from './Media';

export default function Footer({ content: { termCodition, policy, reserved } }) {
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

Footer.propTypes = {
  content: PropTypes.objectOf(PropTypes.string).isRequired,
};
