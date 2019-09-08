let total = 0;
let input;

while (true) {
  input = prompt('Введіть число...');
  if (input === null) break;
  total += Number(input);
}

alert(`Загальна сума чисел рівна ${total}`);