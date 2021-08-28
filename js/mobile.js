const menuChangeStyleEl = document.querySelector('.change-style-btns-menu');
const changeStyleButtonsEl = document.querySelector('.change-style-btns');
menuChangeStyleEl.addEventListener('click', function () {
  changeStyleButtonsEl.classList.toggle('open');
});
