import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../stylesheet/areas.scss';

const SubList = (args) => {
  const div = [];
  const { list } = args;
  Object.keys(list).forEach((e, i) => {
    div.push(
      <li key={`areas-li-${i.toString()}`}>{list[e]}</li>,
    );
  });

  return (
    div
  );
};

const Areas = (args) => {
  const div = [];
  const { content } = args;

  const { list1, list2 } = content;
  const lists = [list1, list2];
  Object.keys(lists).forEach((list, i) => {
    const subList = lists[list];
    div.push(
      <ul key={`areas-ul-${i.toString()}`}>
        <SubList list={subList} />
      </ul>,
    );
  });

  return (
    <div className="practice-areas">
      <div className="wrapper">
        <div>
          <h2>{content.title}</h2>
          <p>{content.brief}</p>
        </div>
        {div}
      </div>
    </div>
  );
};

const Brief = (args) => {
  const div = [];
  const { content } = args;
  div.push(
    <div className="brief-section wrapper" key="brief-section">
      <div>
        <div>
          <h2>{content.title}</h2>
        </div>
        <div>
          <h3>{content.firstContent.firstLetter}</h3>
          <p>{content.firstContent.content}</p>
        </div>
        <div>
          <p>{content.secondContent}</p>
        </div>
      </div>
    </div>,
  );

  return (
    div
  );
};

export default class PracticeAreas extends Component {
  constructor(props) {
    super(props);
    this.brief = props.brief;
    this.areas = props.areas;
  }

  render() {
    return (
      <section className="practice-areas-section">
        <Brief content={this.brief.content} />
        <Areas content={this.areas.content} />
      </section>
    );
  }
}

PracticeAreas.propTypes = {
  brief: PropTypes.objectOf(PropTypes.object).isRequired,
  areas: PropTypes.objectOf(PropTypes.object).isRequired,
};
