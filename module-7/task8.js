const refs = {
  input: document.querySelector('input[type="number"]'),
  btnAdd: document.querySelector('[data-action="render"]'),
  btnRemove: document.querySelector('[data-action="destroy"]'),
  box: document.querySelector('#boxes'),
};


const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomByte = () => randomNumber(0, 255);
const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2);
const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`;

function createBoxes(amount) {
  const itemList = [];
  for (let i = 0; i < amount; i += 1) {
    const newElem = document.createElement('div');
    newElem.textContent = i;
    newElem.style.backgroundColor = randomCssRgba();
    itemList.push(newElem);
  }

  return itemList;
}

function getNumber() {
  const number = Number(refs.input.value);
  refs.box.append(...createBoxes(number));
}

function destroyBoxes() {
  refs.box.innerHTML = '';
  refs.input.value = '';
}

refs.btnAdd.addEventListener('click', getNumber);
refs.btnRemove.addEventListener('click', destroyBoxes);
