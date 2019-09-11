let total = 0;
let input;
do {
  input = prompt('Введіть число...');
  total += Number(input);
}
while (input !== null);

alert(`Загальна сума чисел рівна ${total}`);
