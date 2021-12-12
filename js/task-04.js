const refs = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
}

let counterValue = 0;

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn);


function onDecrementBtn() {
    counterValue -= 1;
    refs.counterValue.textContent = counterValue;
}

function onIncrementBtn() {
    counterValue += 1;
    refs.counterValue.textContent = counterValue;
}