// Задание 1
//   const name = '"Генератор защитного поля"';
//   let price = 1000;
//   const message = `Выбран ${name}, цена за штуку ${price} кредитов`;
//   console.log(message);
//   price = 2000;
//   const messageNew = `Выбран ${name}, цена за штуку ${price} кредитов`;
//   console.log(messageNew);

// Задание 1 (другой вариант)
// const name = '"Генератор защитного поля"';
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// Задание 2
//   const total = 100;
//   const ordered = 50;

//   if (ordered > total) {
//     console.log('На складе недостаточно товаров!');
//   } else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
//   }

//   // Задание 3
//   const input = prompt('Введите пароль администратора', '');
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (input === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//   } else if (input === null) {
//     message = 'Отменено пользователем!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }
//   alert(message);

// Задание 4
// let credits = 23580;
// const pricePerDroid = 3000;
// const totalValueDroid = prompt(
//   'Какое количество дроидов Вы хотите купить?',
//   '',
// );
// let totalPrice;
// let message;

// if (totalValueDroid === null) {
//   message = 'Отменено пользователем';
// } else if (isNaN(totalValueDroid)) {
//   message = 'Вводи только числа!';
// } else {
//   totalPrice = totalValueDroid * pricePerDroid;
// }
// if (!message) {
//   if (credits - totalPrice < 0) {
//     console.log('Недостаточно средств на счету!');
//   } else {
//     credits = credits - totalPrice;
//     console.log(
//       `Вы купили ${totalValueDroid} дроида(ов), на счету осталось ${credits} кредит(а)(ов)`,
//     );
//   }
// } else {
//   console.log(message);
// }

// Залание 5
// const deliveryCountry = prompt('В какую страну тебе сделать доставку?');
// const inUpperCase = deliveryCountry.toUpperCase();
// let cost;
// switch (inUpperCase) {
//   case 'КИТАЙ':
//     cost = 100;
//     break;
//   case 'ЧИЛИ':
//     cost = 250;
//     break;
//   case 'АВСТРАЛИЯ':
//     cost = 170;
//     break;
//   case 'ИНДИЯ':
//     cost = 80;
//     break;
//   case 'ЯМАЙКА':
//     cost = 120;
//     break;
//   default:
//     cost = ':(';
//     alert('В вашей стране доставка не доступна');
// }
// console.log(`Доставка в ${inUpperCase} будет стоить ${cost} кредитов`);

// Задание 6
// let total = 0;
// let input = 0;
// do {
//   input = +prompt('Введи число');
//   total += input;
// } while (input);
// alert('Общая сумма чисел равна ' + total + '');

// Задание 6 (с проверкой isNaN)
// let total = 0;
// let input = 0;
// while (input !== null) {
//   input = prompt('Введите число: ' + total);
//   !isNaN(input) ? (total = total + +input) : alert('Введено не число!');
// }
// alert(total);
