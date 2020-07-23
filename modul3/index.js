//  */
//  */ Задание 1
//  */
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// console.log(user);

// user.hobby = 'skydiving';
// console.log(user);

// user.premium = false;
// console.log(user);

// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//   console.log(`${key} : ${user[key]}`);
// }

//  */
//  */ Задание 2
//  */
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число -
// количество свойств.

// const countProps = function (obj) {
//   let props = Object.values(obj);
//   let propsLength = props.length;
//   return propsLength;
// };

// // Вызовы функции для проверки работоспособности твоей реализации.

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

//  */
//  */ Задание 3
//  */
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и
// возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и
// кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   let profit = Object.values(employees);
//   let maxProfit = Math.max(...profit);
//   for (let name in employees) {
//     if (employees[name] === maxProfit) {
//       return name;
//     }
//   }
// };

// //  Вызовы функции для проверки работоспособности твоей реализации.
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

//  */
//  */ Задание 4
//  */
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   const summs = Object.values(employees);
//   let total = 0;
//   for (const sum of summs) {
//     total += sum;
//   }
//   return total;
// };

// // Вызовы функции для проверки работоспособности твоей реализации.

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

//  */
//  */ Задание 5
//  */
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и
// имя свойства. Возвращает массив значений определенного свойства prop из каждого объектав массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let property = [];
//   for (let item of arr) {
//     if (item[prop] !== undefined) {
//       property.push(item[prop]);
//     }
//   }
//   return property;
// };

// // Вызовы функции для проверки работоспособности твоей реализации.

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

//  */
//  */ Задание 6
//  */
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let total;

//   for (let item of allProdcuts) {
//     let value = Object.values(item);
//     if (value[0] === productName) {
//       return (total = value[1] * value[2]);
//     }
//   }
// };

// // Вызовы функции для проверки работоспособности твоей реализации.

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

//  */
//  */ Задание 7 НЕ СДЕЛАНО!
//  */

// /*
//  /* Типов транзацкий всего два.
//  /* Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  /* Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//   / * Метод создает и возвращает объект транзакции.
//    /* Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    /* Метод отвечающий за добавление суммы к балансу.
//    /* Принимает сумму танзакции.
//    /* Вызывает createTransaction для создания объекта транзакции
//    /* после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    /* Метод отвечающий за снятие суммы с баланса.
//    /* Принимает сумму танзакции.
//    /* Вызывает createTransaction для создания объекта транзакции
//    /* после чего добавляет его в историю транзакций.
//    /*
//    /* Если amount больше чем текущий баланс, выводи сообщение
//    /* о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    /* Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    /* Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    /* Метод возвращает количество средств
//    /* определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };
