/* eslint-disable no-restricted-syntax */
const refs = {
  count: 0,
  decrement: document.querySelector('button[data-action="decrement"]'),
  increase: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector('span#value'),
};

function increase() {
  refs.count += 1;
  refs.value.textContent = refs.count;
}

function decrement() {
  refs.count -= 1;
  refs.value.textContent = refs.count;
}

refs.increase.addEventListener('click', increase);
refs.decrement.addEventListener('click', decrement);
