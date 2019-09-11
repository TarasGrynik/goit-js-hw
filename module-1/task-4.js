const credits = 23580;
const pricePerDroid = 3000;

const CANCELED_BY_USER = 'Отменено пользователем!';
const NOT_ENOUGH_MONEY = 'Недостаточно средств на счету!';

let totalPrice;

const userAmountDroids = prompt('Яку кількість дроїдів вам необхідно?');

if (userAmountDroids === null) {
  console.log(CANCELED_BY_USER);
} else {
  totalPrice = userAmountDroids * pricePerDroid;

  if (totalPrice > credits) {
    console.log(NOT_ENOUGH_MONEY);
  } else {
    console.log(`Вы купили ${userAmountDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
  }
}
