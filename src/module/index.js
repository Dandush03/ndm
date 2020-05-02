import '../stylesheet/main.scss';

const bgImg = () => {
  const div = document.createElement('div');
  div.className = 'main';
  const logo = document.createElement('img');
  logo.src = '../src/media/logo.jpg';
  const construction = document.createElement('img');
  construction.src = '../src/media/construction.jpg';
  div.appendChild(logo);
  div.appendChild(construction);

  const divMedia = document.createElement('div');
  divMedia.className = 'media';
  const fb = document.createElement('a');
  fb.innerHTML = '<i class="fab fa-facebook"></i>';
  fb.href = 'https://www.facebook.com/ndmlawfirm/';
  const ig = document.createElement('a');
  ig.innerHTML = '<i class="fab fa-instagram"></i>';
  ig.href = 'https://www.instagram.com/ndmlawfirm/';

  divMedia.appendChild(fb);
  divMedia.appendChild(ig);

  const heroImg = document.createElement('img');
  heroImg.className = 'hero-img';
  heroImg.src = '../src/media/DanielLogo.png';

  document.body.appendChild(heroImg);
  document.body.appendChild(div);
  document.body.appendChild(divMedia);
};

window.onload = () => {
  bgImg();
};