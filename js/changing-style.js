function addListeners() {
  const buttonEl = document.querySelectorAll('.change-style');
  buttonEl[0].addEventListener('click', () => {
    const headingEl = document.querySelector('.heading-primary');
    headingEl.style.color = 'blue';
  });
}

addListeners();
