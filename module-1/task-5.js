let country = prompt('Вкажіть вашу країну проживання...');
country = country.toLowerCase();

let deliveryPrice;

if (country === 'китай') {
  deliveryPrice = 100;
}

if (country === 'чили') {
  deliveryPrice = 250;
}

if (country === 'австралия') {
  deliveryPrice = 170;
}

if (country === 'индия') {
  deliveryPrice = 80;
}

if (country === 'ямайка') {
  deliveryPrice = 100;
}


switch (country) {
  case 'китай':
    console.log(`Доставка в ${country} буде коштувати ${deliveryPrice} кредитов`);
    break;
  case 'чили':
    console.log(`Доставка в ${country} буде коштувати ${deliveryPrice} кредитов`);
    break;
  case 'австралия':
    console.log(`Доставка в ${country} буде коштувати ${deliveryPrice} кредитов`);
    break;
  case 'индия':
    console.log(`Доставка в ${country} буде коштувати ${deliveryPrice} кредитов`);
    break;
  case 'Ямайка':
    console.log(`Доставка в ${country} буде коштувати ${deliveryPrice} кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна!');   
}