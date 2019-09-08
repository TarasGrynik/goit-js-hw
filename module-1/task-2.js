const total = 100;
const ordered = 50;

const NOT_ENOUGH_GOODS = 'На складі недостатньо товарів!';
const ORDER_ACCEPTED = 'Заказ оформлен, с вами свяжется менеджер.';
let message;

if (ordered > total) {
  message = NOT_ENOUGH_GOODS;
} else {
  message = ORDER_ACCEPTED;
}

console.log(message);
