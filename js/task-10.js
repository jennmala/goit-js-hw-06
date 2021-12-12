const refs = {
  amount: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  if (refs.amount.value < Number(refs.amount.min) || refs.amount.value > Number(refs.amount.max)) {
    alert("Enter a number between 1 and 100!");
    return;
  }
  const boxesNew = [];  
  for (let index = 0; index < refs.amount.value; index += 1) {
    const box = document.createElement('div');
    const boxSize = 30 + index * 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesNew.push(box);
  } 
  refs.boxes.append(...boxesNew);
}

function onDestroyBtnClick() {
  refs.boxes.innerHTML = '';
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
