function addListeners() {
  const buttonEls = document.querySelectorAll('.change-style');

  buttonEls[0].addEventListener('click', () => {
    changeTo(black);
  });

  buttonEls[1].addEventListener('click', () => {
    changeTo(brown);
  });

  buttonEls[2].addEventListener('click', () => {
    changeTo(turquoise);
  });

  buttonEls[3].addEventListener('click', () => {
    changeTo(turquoise);
    addShades(blueShade1, blueShade2);
  });
}

const black = '#000';
const brown = '#9f6243';
const turquoise = '#01627f';

const blueShade1 = '#003c57';
const blueShade2 = '#5ba1c1';

function changeTo(color) {
  headingEl.style.color = color;
  logoEl.style.color = color;

  aboutBoxEl.style.borderColor = color;

  ctaEl.style.backgroundColor = color;
  openingHoursEl.style.backgroundColor = color;
  submitBtnEl.style.backgroundColor = color;
  footerEl.style.backgroundColor = color;
}

function addShades(color, color2) {
  footerDescEl.style.backgroundColor = color;

  contactLabelsEl.forEach((contactLabel) => {
    contactLabel.style.color = color;
  });

  contactEmailEl.style.color = color2;

  ctaButtonEl.style.backgroundColor = color2;
}

addListeners();

const headingEl = document.querySelector('.heading-primary');
// const navEl = document.querySelector('.main-nav-list');
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
