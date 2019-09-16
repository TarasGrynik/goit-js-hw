/* eslint-disable no-restricted-syntax */
let input;
const numbers = [];
let total = 0;

/* resolve task via loop */

do {
  input = prompt('Enter your number...');
  numbers.push(Number(input));
} while (input !== null);

for (const number of numbers) {
  total += number;
}

console.log(`Загальна сума чисел рівна ${total}`);

/* resolve task via function */

function countSum() {
  for (const number of numbers) {
    total += number;
  }

  return total;
}

function getNumbers() {
  input = prompt('Enter your number...');
  numbers.push(Number(input));

  if (input !== null) {
    getNumbers();
  }
}

getNumbers();
countSum();

console.log(`Загальна сума чисел рівна ${total}`);
