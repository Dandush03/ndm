
let newI;

const ShowSlides = (n) => {
  const img = document.getElementsByClassName('slide-img');
  const dots = document.getElementsByClassName('dot');

  Object.keys(img).forEach((e, i) => {
    const classes = img[e].className.split(' ');
    classes.forEach((c) => {
      if (c === 'active') {
        newI = i + n;
        if (newI > 2) {
          newI -= 3;
        }
        if (newI < 0) {
          newI += 3;
        }
      }
      img[e].className = 'slide-img enactive';
      dots[i].className = 'dot';
    });
  });

  img[newI].className = 'slide-img active';
  dots[newI].className = 'dot active';
  // eslint-disable-next-line no-use-before-define
};

const CurrentSlide = (current) => {
  newI = current - 1;
  ShowSlides(1);
};

const TimingSlides = () => {
  ShowSlides(1);
  setTimeout(TimingSlides, 10000);
};

export { TimingSlides, ShowSlides, CurrentSlide };
