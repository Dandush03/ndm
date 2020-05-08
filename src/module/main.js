const page = (element) => document.createElement(element);
let body;

const header = () => {
  const header = page('header');
  body.appendChild(header);
};

const main = () => {
  const main = page('main');
  body.appendChild(main);
};

const footer = () => {
  const footer = page('footer');
  body.appendChild(footer);
};

window.onload = () => {
  body = document.body;
  header();
  main();
  footer();
};