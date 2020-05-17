import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../stylesheet/bottom.scss';

import img1 from '../media/bottom/gallery_01.jpg';
import img2 from '../media/bottom/gallery_02.jpg';
import img3 from '../media/bottom/gallery_03.jpg';
import img4 from '../media/bottom/gallery_04.jpg';

const imgGroup = [img1, img2, img3, img4];


export default class Bottom extends Component {
  constructor(props) {
    super(props);
    this.brief = props.brief;
    this.areas = props.areas;
  }

  render() {
    return (
      <section className="practice-areas-section">
        {}
      </section>
    );
  }
}

Bottom.propTypes = {
  brief: PropTypes.objectOf(PropTypes.object).isRequired,
  areas: PropTypes.objectOf(PropTypes.object).isRequired,
};
