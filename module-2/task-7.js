const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }

  console.log('Помилка! Ваш логін повинен бути від 4 до 16 символів!');
  return false;
};

const isLoginUnique = function(allLogins, login) {
  const notUniqueLogin = allLogins.includes(login);
  if (notUniqueLogin) {
    console.log('Такий логін вже використовується!');
    return false;
  }

  return true;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    logins.push(login);
    console.log('Логін успішно добавлений!!!');
  }
};


// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
