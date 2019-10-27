const listElem = document.querySelector('#categories');
const listItems = document.querySelectorAll('li.item');

function showListLength(list) {
  const listElemLength = list.children.length;
  return `В списке ${listElemLength} категории.`;
}
console.log(showListLength(listElem));

const listItemArray = Array.prototype.slice.call(listItems);
function showTitleText(list) {
  list.map(elem => {
    return console.log(`
      Категория: ${elem.firstElementChild.textContent} 
      Количество елементов: ${elem.lastElementChild.children.length} 
    `);
  });
}

showTitleText(listItemArray);
