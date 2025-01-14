document.querySelector('.header__menu-gamename').addEventListener('click', (event) => {
  event.stopPropagation();
  const gameList = document.querySelector('.header__gamelist');
  const isActive = gameList.classList.toggle('active');
  document.body.style.overflow = isActive ? 'hidden' : '';
});

document.addEventListener('click', (event) => {
  const gameList = document.querySelector('.header__gamelist');
  if (!gameList.contains(event.target) && !event.target.closest('.header__menu-gamename')) {
    gameList.classList.remove('active');
    document.body.style.overflow = '';
  }
});
