const input = document.querySelector('#validation-input');

function handleBlurInput(e) {
  const correctValue = Number(e.currentTarget.dataset.length);
  const inputValueLength = e.currentTarget.value.length;
  const getElemClass = e.currentTarget.classList;

  if (inputValueLength === correctValue) {
    getElemClass.remove('invalid');
    getElemClass.add('valid');
  } else {
    getElemClass.remove('valid');
    getElemClass.add('invalid');
  }
}

input.addEventListener('blur', handleBlurInput);
