document.querySelector('.header__menu-gamename').addEventListener('click', (event) => {
  event.stopPropagation(); // Запобігає закриттю меню при кліку по ньому
  const gameList = document.querySelector('.header__gamelist');
  gameList.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  const gameList = document.querySelector('.header__gamelist');
  if (!gameList.contains(event.target) && !event.target.closest('.header__menu-gamename')) {
    gameList.classList.remove('active');
  }
});

