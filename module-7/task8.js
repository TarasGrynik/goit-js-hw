const refs = {
  input: document.querySelector('input[type="number"]'),
  btnAdd: document.querySelector('[data-action="render"]'),
  btnRemove: document.querySelector('[data-action="destroy"]'),
  box: document.querySelector('#boxes'),
};

const elemSize = {
  width: 30,
  height: 30,
  sizeStep: 10,
};


const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomByte = () => randomNumber(0, 255);
const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2);
const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`;

function createBoxes(amount) {
  const itemList = [];
  let additionalBlockWidth = 0;

  for (let i = 0; i < amount; i += 1) {
    const newElem = document.createElement('div');
    newElem.textContent = i;
    newElem.style.backgroundColor = randomCssRgba();
    newElem.style.width = `${elemSize.width + additionalBlockWidth}px`;
    newElem.style.height = `${elemSize.height + additionalBlockWidth}px`;
    additionalBlockWidth += elemSize.sizeStep;
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
