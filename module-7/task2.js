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
  parent.append(
    ...list.map(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      return listItem;
    }),
  );
}

getIngredients(ingredients, ingredientItem);
