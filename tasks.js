//* 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// const arr = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];
// const array = arr.concat(arr2);
// console.log(array);

//[...spred,...spred]

//* 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// const arr = ['a', 'b', 'c'];
// arr.push(1, 2, 3);
// console.log(arr);
//* 3) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// const arr = [1, 2, 3];
// console.log(arr.reverse());
//* 4) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 3));
//* 5)Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);
//* 1) Вибираємо випадкове число (від 0 до довжини масива);
// const arr = [1, 2, 3, 4, 5];
// let arrRandom = Math.floor(Math.random() * arr.length);
// console.log(arr[arrRandom]);

//* -) Записуємо в змінну строку з промта
//* -) Зробити строку масивом
//* -) Скопіювати масив в нову змінну
//* -) Реверсимо масив
//* -) З масивів робимо строки

// let input = prompt('Введи что-то:');
// console.log('Записуємо в змінну строку з промта', input);

// input = input.split('');
// console.log('Зробити строку масивом', input);
// let arr = input; //Скопіювати масив в нову змінну
// let newArr = [...input];

// arr = arr.reverse();
// newArr = newArr.reverse();

// console.log('Реверсимо масив', arr);

// arr = arr.join('');
// newArr = newArr.join('') + input.reverse().join('');
// console.log('З масивів робимо строку:', arr);
// console.log('З двох масивів робимо строки:', newArr);
