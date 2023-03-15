let switcher = document.querySelector('.circle');

switcher.addEventListener('click', toggleSwitcher);

function toggleSwitcher() {
  const switcher = document.querySelector('.circle');
  const body = document.querySelector('body');
  const title = document.querySelector('h1')

  title.classList.toggle('h1-dark-mode');

  if (title.innerText === 'Tenha um ótimo dia!') {
    title.innerText = 'Tenha uma ótima noite!'
  } else {
    title.innerText = 'Tenha um ótimo dia!'
  }

  body.classList.toggle('body-dark-mode');
  switcher.classList.toggle('turn-on');
}