let slideIndex = 0;

export default function showSlides() {
  let i;
  const slides = document.getElementsByClassName('my-slides');
  const dots = document.getElementsByClassName('dot');
  console.log(slides);
  
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
  setTimeout(showSlides, 7000);
}
