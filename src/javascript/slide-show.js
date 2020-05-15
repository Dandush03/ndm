
let slideIndex = 0;

const ShowSlides = () => {
  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('my-slides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i += 1) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  const prev = document.getElementsByClassName('prev');
  const next = document.getElementsByClassName('next');
  const dots = document.getElementsByClassName('dot');

  Object.keys(dots).forEach((dot, index) => {
    dots[dot].onclick = () => currentSlide(index + 1);
  });

  prev[0].onclick = () => plusSlides(-1);
  next[0].onclick = () => plusSlides(1);
};

const TimingSlides = () => {
  let i;
  const slides = document.getElementsByClassName('my-slides');
  const dots = document.getElementsByClassName('dot');

  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slideIndex += 1;
  if (slideIndex > slides.length) { slideIndex = 1; }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(TimingSlides, 14000);
};

export { TimingSlides, ShowSlides };
