/* eslint-disable no-restricted-syntax */
let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Enter your number...');
  numbers.push(Number(input));
} while (input !== null);

for (const number of numbers) {
  total += number;
}

console.log(`Загальна сума чисел рівна ${total}`);
