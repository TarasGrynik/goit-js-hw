const CANCELED_BY_USER = 'Отменено пользователем!';
const WELCOME = 'Добро пожаловать!';
const ACCESS_DANIED = 'Доступ запрещен, неверный пароль!';

const ADMIN_PASSWORD = 'jquery';
let message;

const userPassword = prompt('Введіть ваш пароль...');

if (userPassword === ADMIN_PASSWORD) {
  message = WELCOME;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else {
  message = ACCESS_DANIED;
}

alert(message);