import '../stylesheet/home.scss';

import lg from './global';

const wrapper = page('div');
wrapper.className = 'wrapper';

let content;

const btnsSection = () => {
  const main = page('div');
  main.className = 'main-div';

  const contentDiv = page('div');
  contentDiv.className = 'content-div';

  const btnsDiv = page('div');
  btnsDiv.className = 'btn-div';

  const { btns } = content.home;

  Object.keys(btns).forEach(e => {
    const div = page('div');
    div.className = 'option';

    const imgDiv = page('div');
    imgDiv.innerHTML = '';

    const subDiv = page('div');
    const txt = page('p');
    txt.innerText = btns[e].span;
    const h = page('h2');
    h.innerText = btns[e].text;

    subDiv.appendChild(txt);
    subDiv.appendChild(h);

    div.appendChild(imgDiv);
    div.appendChild(subDiv);

    btnsDiv.appendChild(div);
  });

  main.appendChild(contentDiv);
  main.appendChild(btnsDiv);
  wrapper.appendChild(main);
};

const lowerSection = () => {
  const main = page('div');
  main.className = 'main-text-holder';

  const { lowerSection } = content.home;

  const leftDiv = page('div');
  leftDiv.className = 'text-holder';
  const leftTxt = page('h2');
  leftTxt.innerText = lowerSection.title;
  leftDiv.appendChild(leftTxt);

  const midDiv = page('div');
  midDiv.className = 'text-holder';
  const midFirstLetter = page('span');
  midFirstLetter.innerText = lowerSection.firstLetter;
  const midText = page('p');
  midText.innerText = lowerSection.firstContent;
  midDiv.appendChild(midFirstLetter);
  midDiv.appendChild(midText);

  const rightDiv = page('div');
  rightDiv.className = 'text-holder';
  const rightTxt = page('p');
  rightTxt.innerText = lowerSection.secondContent;
  rightDiv.appendChild(rightTxt);

  main.appendChild(leftDiv);
  main.appendChild(midDiv);
  main.appendChild(rightDiv);

  wrapper.appendChild(main);
};

export default function home() {
  const load = lg('en');
  load((response) => {
    content = JSON.parse(response);
    btnsSection();
    lowerSection();
  });
  return wrapper;
}