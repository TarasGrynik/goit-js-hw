let country = prompt('Вкажіть вашу країну проживання...');
country = country.toLowerCase();


switch (country) {
  case 'китай':
    console.log(`Доставка в ${country} буде коштувати 100 кредитов`);
    break;
  case 'чили':
    console.log(`Доставка в ${country} буде коштувати 250 кредитов`);
    break;
  case 'австралия':
    console.log(`Доставка в ${country} буде коштувати 170 кредитов`);
    break;
  case 'индия':
    console.log(`Доставка в ${country} буде коштувати 80 кредитов`);
    break;
  case 'Ямайка':
    console.log(`Доставка в ${country} буде коштувати 100 кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна!');   
}
