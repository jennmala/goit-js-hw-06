const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeControlEl.addEventListener('input', onSizeControlChange);

function onSizeControlChange() {
    textEl.style.fontSize = `${sizeControlEl.value}px`;
}

