/* eslint-disable no-restricted-syntax */
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'javascript';
user.premium = 'false';

const keys = Object.keys(user);

let value = '';
for (const key of keys) {
  value += `${key}: ${user[key]} \n`;
}
console.log(value);
