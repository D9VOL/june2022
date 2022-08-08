// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangle(a,b) {
//     const square = a*b;
//     console.log(square);
// }
// rectangle(4,5)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle(radius) {
//     const square = 2 * Math.PI * radius;
//     console.log(Math.round(square*100)/100);
// }
// circle(10)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder(height,radius) {
//     const square = 2 * Math.PI * radius * height;
//     console.log(Math.round(square*100)/100);
// }
// cylinder(5,2)

// - створити функцію яка приймає масив та виводить кожен його елемент

// function outputArray(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
// let data = [1, true, 'Hello', 3, 5, 10, false];
// outputArray(data);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function writerParagraph(writeText) {
//     document.write(`<p>${writeText}</p>`);
//     }
//
//     writerParagraph('Привіт');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(text) {
//     document.write(`
//         <ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//         </ul>
// `)
//
// }
// list('Hello')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(text,number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//                document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('Hello',10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function outputArray(array) {
//         document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//                document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`)
//     }
//
// let data = [1, true, 'Hello', 3, 5, 10, false];
// outputArray(data);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

// function users(array) {
//     for (const element of array) {
//         document.write(`<div>${element.id} ${element.name} ${element.age}</div>`);
//             }
// }
//
// let user = [
//     {id: 01, name: 'Vasay', age: 32},
//     {id: 02, name: 'Alex', age: 18},
//     {id: 03, name: 'Oleg', age: 25},
//     {id: 04, name: 'Ivan', age: 12},
//     {id: 05, name: 'Taras', age: 10},
//    ]
// users (user)

// - створити функцію яка повертає найменьше число з масиву

// let number = [1,3,10,20,-1,-10,-25,5,8]
//
// function minValue(array) {
//     let min = array[0];
//     for (let item of array) {
//         if (item < min){
//             min = item;
//         }
//
//     }
//     return min;
// }
//
// console.log(minValue(number));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

// let number = [1,2,10];
//
// function sumArray(arrayNamber) {
//     let sum = 0;
//     for (let i = 0; i < arrayNamber.length; i++) {
//         sum += arrayNamber[i];
//     }
//     return sum;
// }
// console.log(sumArray(number));