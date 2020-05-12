import React, { Component } from 'react';

import Content from '../api';

const BtnsSection = (data) => {
  const btn = [];
  if (data.btns !== null) {
    const { btns } = data;
    Object.keys(btns).forEach((e) => {
      btn.push(
        <div>
          <div>
            <svg />
          </div>
          <div>
            <p>{btns[e].text}</p>
            <p>{btns[e].span}</p>
          </div>
        </div>,
      );
    });
  }
  return (
    btn
  );
};

const TopSection = (props) => (
  <div>
    <svg />
    <div className="topContent">
      <p />
      <title />
      <p />
    </div>
  </div>
);


export default class Home extends Component {
  componentDidMount() {
    const loadContent = Content('en');
    loadContent((response) => {
      const tempData = JSON.parse(response);
      if (tempData) {
        this.setState(this.data = tempData);
      }
    });
  }

  render() {
    // const { data: { topSection, btns } } = this.props;
    const { data } = this;
    let btns;
    if (data !== undefined) {
      btns = data.btns;
    }
    return (
      <main>
        <header />
        <section>
          <div className="topSection">
            <div className="topSection">
              {/* <TopSection data={topSection} /> */}
              <BtnsSection btns={btns || null} />
            </div>
          </div>
          <div className="bottomSection" />
        </section>
        <footer />
      </main>
    );
  }
}
