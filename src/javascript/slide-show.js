
let newI;
let timer;

const Program = (n) => {
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
  clearTimeout(timer);
  newI = current - 1;
  Program(1);
  TimingSlides();
};

export { TimingSlides, ShowSlides, CurrentSlide };
