/* eslint-disable no-restricted-syntax */
class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i] === item) {
        this.items.splice(i, 1);
      }
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();

console.log(items);

storage.addItem('Дроид');

console.log(storage.items);

storage.removeItem('Нанитоиды');

console.log(storage.items);
