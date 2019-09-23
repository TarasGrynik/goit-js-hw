/* eslint-disable no-restricted-syntax */

'use strick';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  addValue(key, value) {
    this[key] = value;
  },
  changeValue(key, value) {
    this[key] = value;
  },
};

console.log(user.addValue('mood', 'happy'));
console.log(user.changeValue('hobby', 'javascript'));
console.log(user.changeValue('premium', false));

/* add property via dot notation */
// user.mood = 'happy';
// user.hobby = 'javascript';
// user.premium = 'false';

function showResult(obj) {
  const keys = Object.keys(obj);
  let value = '';

  for (const key of keys) {
    value += `${key}: ${obj[key]} \n`;
  }
  return value;
}

console.log(showResult(user));
