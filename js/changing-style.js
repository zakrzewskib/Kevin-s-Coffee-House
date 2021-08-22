/* Bartosz Zakrzewski August 2021 */

function addListeners() {
  const buttonEls = document.querySelectorAll('.change-style');

  buttonEls[0].addEventListener('click', () => {
    backToBlackAndWhite(black, white, grey);
  });

  buttonEls[1].addEventListener('click', () => {
    backToBlackAndWhite(black, white, grey);
    changeTo(brown);
  });

  buttonEls[2].addEventListener('click', () => {
    backToBlackAndWhite(black, white, grey);
    changeTo(turquoise);
  });

  buttonEls[3].addEventListener('click', () => {
    backToBlackAndWhite(black, white, grey);
    changeTo(turquoise);
    addShades(blueShade1, blueShade2, blueShade3);
  });

  buttonEls[4].addEventListener('click', () => {
    backToBlackAndWhite(black, white, grey);
    changeTo(turquoise);
    addShades(blueShade1, blueShade2, blueShade3);
    addComplimentaryColor(orange);
  });
}

const black = '#000';
const white = '#fff';
const grey = '#888';

const brown = '#9f6243';
const turquoise = '#01627f';

const blueShade1 = '#003c57';
const blueShade2 = '#5ba1c1';
const blueShade3 = '#8fcbe6';

const orange = '#df6e05';

function changeTo(color) {
  headingEl.style.color = color;

  logoEl.style.color = color;

  aboutBoxEl.style.borderColor = color;

  ctaEl.style.backgroundColor = color;

  openingHoursEl.style.backgroundColor = color;
  getInTouchEl.style.color = color;

  submitBtnEl.style.backgroundColor = color;

  footerEl.style.backgroundColor = color;
}

function addShades(color, color2, color3) {
  footerDescEl.style.backgroundColor = color;

  contactLabelsEl.forEach((contactLabel) => {
    contactLabel.style.color = color;
  });

  contactEmailEl.style.color = color2;

  ctaButtonEl.style.backgroundColor = color2;

  headersAboutEl.forEach((headerAbout) => {
    headerAbout.style.color = color2;
  });

  openingHoursEl.style.backgroundColor = color;

  comeForVisitHeadingEl.style.color = color3;

  daysEl.forEach((day) => {
    day.style.color = color3;
  });

  ctaEl.style.backgroundColor = color;

  headerCtaEl.style.color = color3;

  footerDescEl.style.color = color3;

  footerIconsEl.forEach((footerIcon) => {
    footerIcon.style.color = color3;
  });
}

function addComplimentaryColor(color) {
  headersAboutEl.forEach((headerAbout) => {
    headerAbout.style.color = color;
  });

  ctaButtonEl.style.backgroundColor = color;
  getInTouchEl.style.color = color;
  submitBtnEl.style.backgroundColor = color;
}

function backToBlackAndWhite(black, white, grey) {
  headingEl.style.color = black;
  logoEl.style.color = black;
  aboutBoxEl.style.borderColor = black;
  ctaEl.style.backgroundColor = black;
  openingHoursEl.style.backgroundColor = black;
  submitBtnEl.style.backgroundColor = black;
  footerEl.style.backgroundColor = black;
  footerDescEl.style.backgroundColor = black;
  footerDescEl.style.color = white;

  contactLabelsEl.forEach((contactLabel) => {
    contactLabel.style.color = black;
  });

  contactEmailEl.style.color = black;
  ctaButtonEl.style.backgroundColor = grey;

  headersAboutEl.forEach((headerAbout) => {
    headerAbout.style.color = black;
  });

  comeForVisitHeadingEl.style.color = white;
  getInTouchEl.style.color = black;

  daysEl.forEach((dayEl) => {
    dayEl.style.color = white;
  });

  headerCtaEl.style.color = white;

  footerIconsEl.forEach((footerIcon) => {
    footerIcon.style.color = white;
  });
}

addListeners();

const headingEl = document.querySelector('.heading-primary');
const logoEl = document.querySelector('.logo');
const aboutBoxEl = document.querySelector('.about-text-box');
const ctaEl = document.querySelector('.cta');
const openingHoursEl = document.querySelector('.opening-hours');
const submitBtnEl = document.querySelector('.btn-submit');
const footerEl = document.querySelector('.footer');
const footerDescEl = document.querySelector('.footer-description');
const contactLabelsEl = document.querySelectorAll('.contact-label');
const contactEmailEl = document.querySelector('.contact-link--email');
const ctaButtonEl = document.querySelector('.cta-btn');
const headersAboutEl = document.querySelectorAll('.header-about');
const comeForVisitHeadingEl = document.querySelector('.come-for-a-visit-heading');
const getInTouchEl = document.querySelector('.get-in-touch-heading');
const daysEl = document.querySelectorAll('.day');
const headerCtaEl = document.querySelector('.header-cta');
const footerIconsEl = document.querySelectorAll('.footer-icon');
