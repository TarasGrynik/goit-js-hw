const inputValue = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function handlerChangeFontSize(e) {
  text.style.fontSize = `${e.currentTarget.value}px`;
}

inputValue.addEventListener('input', handlerChangeFontSize);
