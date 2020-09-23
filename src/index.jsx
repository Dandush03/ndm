import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './pages/Home';
import * as serviceWorker from './serviceWorker';
import Contact from './pages/Contact';

const language = localStorage.getItem('lang');

if (!language) {
  localStorage.setItem('lang', 'sp');
}

const HandlerComponent = (name) => {
  if (name === 'Contact') {
    ReactDOM.render(
      <React.StrictMode>
        <Contact componentHandler={HandlerComponent} />
      </React.StrictMode>,
      document.getElementById('root'),
    );
  } else if (name === 'Home') {
    ReactDOM.render(
      <React.StrictMode>
        <Home componentHandler={HandlerComponent} />
      </React.StrictMode>,
      document.getElementById('root'),
    );
  }
};

ReactDOM.render(
  <React.StrictMode>
    <Home componentHandler={HandlerComponent} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
