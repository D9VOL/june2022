// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 1;
//     if (x!==0){
//         document.write('Вірно');
//     } else {
//         document.write('Невірно');
//     }
//
// let x = 0;
// if (x!==0){
//     document.write('Вірно');
// } else {
//     document.write('Невірно');
// };
//
// let x = -3;
//     if (x!==0){
//         document.write('Вірно');
//     } else {
//       document.write('Невірно');
//     }

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('write namber from 0 to 59');
//     if (time >= 0 && time<=15){
//         console.log('перша чверть');
//     } else if (time > 15 && time<= 30) {
//         console.log('друга чверть');
//     } else if (time > 30 && time<= 45) {
//         console.log('третя чверть');
//     } else if (time > 45 && time<= 59) {
//         console.log('четверта чверть');
//     } else if (time >= 60) {
//         console.log('write corect namber');
//     }

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('write day from 1 to 31');
//  if (day >= 1 && day <= 10){
//      console.log('перша декада');
//  } else if (day > 10 && day <= 20){
//      console.log('друга декада');
//  } else if (day > 20 && day <=31){
//      console.log('третя декада');
//  } else if (day > 31){
//      console.log('write corect namber');
//  }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на
// екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let week = []
//     week = [
//     {
//         day1: '10.00 зустріч 13.00 обід 18.00 додому'
//     },
//     {
//         day2: '11.00 зустріч 14.00 обід 19.00 додому'
//     },
//     {
//         day3: '9.00 зустріч 12.00 обід 20.00 додому'
//     },
//     {
//         day4: '8.00 зустріч 15.00 обід 17.00 додому'
//     },
//     {
//         day5: '10.00 зустріч 12.00 обід 19.00 додому'
//     },
//     {
//         day6: '7.00 зустріч 13.00 обід 20.00 додому'
//     },
//     {
//         day7: '10.00 зустріч 12.00 обід 19.00 додому'
//     },
//
//     ];
//
// let day = +prompt('write day from 1 to 7')
//     switch (day) {
//         case 1:
//             console.log(week[0]);
//              break;
//         case 2:
//             console.log(week[1]);
//             break;
//         case 3:
//             console.log(week[2]);
//             break;
//         case 4:
//             console.log(week[3]);
//             break;
//         case 5:
//             console.log(week[4]);
//             break;
//         case 6:
//             console.log(week[5]);
//             break;
//         case 7:
//             console.log(week[6]);
//             break;
//         default:
//             console.log('write corect namber');
//     }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let x = +prompt('write namber = X');
// let y = +prompt('write namber = Y');
//     if (x > y) {
//         console.log(x);
//     } else if (x < y) {
//         console.log(y);
//     } else if (x === y ) {
//         console.log('x = y');
//     }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = 1;
//     if  (!x){
//         x = 'default';
//     }
//     console.log(x);

let x = NaN || 'default';
console.log(x);





