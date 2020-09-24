import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import * as serviceWorker from './serviceWorker';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const language = localStorage.getItem('lang');

if (!language) {
  localStorage.setItem('lang', 'sp');
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/contact" exact component={Contact} />
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
