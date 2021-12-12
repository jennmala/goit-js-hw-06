const changeColorBtn = document.querySelector('.change-color');
const colorValueEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColorBtnClick)

function onChangeColorBtnClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorValueEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
