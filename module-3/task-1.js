/* eslint-disable no-restricted-syntax */

'use strick';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

/* add property via dot notation */
user.mood = 'happy';
user.hobby = 'javascript';
user.premium = 'false';

function showObjProp(obj) {
  const keys = Object.keys(obj);

  for (const key of keys) {
    console.log(`${key}: ${obj[key]}`);
  }
}

console.log(showObjProp(user));
