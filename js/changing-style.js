function addListeners() {
  const buttonEl = document.querySelectorAll('.change-style');
  buttonEl[0].addEventListener('click', () => {
    changeTo(brown);
  });
}

const headingEl = document.querySelector('.heading-primary');
// const navEl = document.querySelector('.main-nav-list');
const logoEl = document.querySelector('.logo');
const aboutBoxEl = document.querySelector('.about-text-box');
const ctaEl = document.querySelector('.cta');
const openingHoursEl = document.querySelector('.opening-hours');
const submitBtnEl = document.querySelector('.btn-submit');
const footerEl = document.querySelector('.footer');

const brown = '#9f6243';

function changeTo(color) {
  headingEl.style.color = color;
  logoEl.style.color = color;

  aboutBoxEl.style.borderColor = color;

  ctaEl.style.backgroundColor = color;
  openingHoursEl.style.backgroundColor = color;
  submitBtnEl.style.backgroundColor = color;
  footerEl.style.backgroundColor = color;
}

addListeners();
