const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientItem = document.querySelector('#ingredients');

function getIngredients(list, parent) {
  parent.appendChild(
    list.map(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      return ingredientItem.appendChild(listItem);
    }),
  );
}

getIngredients(ingredients, ingredientItem);
