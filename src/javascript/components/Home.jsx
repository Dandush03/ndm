import React, { Component } from 'react';

import Content from '../api';

const BtnsSection = (data) => {
  const content = [];
  if (data.btns !== null && data.btns !== undefined) {
    const { btns } = data;
    Object.keys(btns).forEach((e) => {
      content.push(
        <div className="btns">
          <div className="icon">
            <svg />
          </div>
          <div className="content">
            <p>{btns[e].text}</p>
            <p>{btns[e].span}</p>
          </div>
        </div>,
      );
    });
  }
  return (
    <div>
      {content}
    </div>
  );
};

const TopSection = (data) => {
  const content = [];
  if (data.text !== null && data.text !== undefined) {
    console.log(data);
    console.log(data.text);
    content.push(
      <div className="content">
        <span>{data.text.span}</span>
        <h2>{data.text.title}</h2>
        <button type="button">{data.text.btn}</button>
      </div>,
    );
  }
  return (
    content
  );
};


export default class Home extends Component {
  componentDidMount() {
    const loadContent = Content('en', 'home');
    loadContent((response) => {
      const tempData = JSON.parse(response);
      if (tempData) {
        this.setState(this.data = tempData);
      }
    });
  }

  render() {
    const { data } = this;
    let btns;
    let topSection;
    if (data !== undefined) {
      btns = data.btns;
      topSection = data.topSection;
    }
    return (
      <main>
        <header />
        <section>
          <div className="topSection">
            <TopSection text={topSection} />
            <BtnsSection btns={btns || null} />
          </div>
          <div className="bottomSection" />
        </section>
        <footer />
      </main>
    );
  }
}
