document.querySelector('.header__menu-gamename').addEventListener('click', () => {
  const gameList = document.querySelector('.header__gamelist');
  gameList.classList.toggle('active');
});
