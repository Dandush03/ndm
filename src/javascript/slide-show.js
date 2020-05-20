
let newI;
let timer;

const Program = (n, current = null) => {
  const img = document.getElementsByClassName('slide-img');
  const dots = document.getElementsByClassName('dot');

  Object.keys(img).forEach((e, i) => {
    const classes = img[e].className.split(' ');
    classes.forEach((c) => {
      if (c === 'active') {
        if (current === null) {
          newI = i + n;
          if (newI > 3) {
            newI -= 4;
          }
          if (newI < 0) {
            newI += 4;
          }
        } else {
          newI = current;
        }
      }
      img[e].className = 'slide-img enactive';
      dots[i].className = 'dot';
    });
  });

  if (img[newI] !== undefined) {
    img[newI].className = 'slide-img active';
    dots[newI].className = 'dot active';
  } else {
    clearTimeout(timer);
  }
};

const TimingSlides = () => {
  Program(1);
  timer = setTimeout(TimingSlides, 10000);
};

const ShowSlides = (n) => {
  clearTimeout(timer);
  Program(n);
  TimingSlides();
};

const CurrentSlide = (current) => {
  newI = current;
  Program(0, current);
};

export { TimingSlides, ShowSlides, CurrentSlide };
