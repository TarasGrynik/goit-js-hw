const refs = {
  input: document.querySelector('#name-input'),
  greet: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', handlerListener);

function handlerListener(e) {
  if (e.currentTarget.value === '') {
    refs.greet.textContent = 'незнакомец';
  } else {
    refs.greet.textContent = e.currentTarget.value;
  }
}
