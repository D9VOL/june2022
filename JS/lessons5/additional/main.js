// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let findMin = (a,b,c) => {
//     let min = a;
//     if (b < min){
//         min = b
//     } else if (c<min){
//         min = c
//     }
//     return min
// }
// console.log(findMin(2, 3, -1));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let findMax = (a,b,c) => {
//     let min = a;
//     if (b > min){
//         min = b
//     } else if (c>min){
//         min = c
//     }
//     return min
// }
// console.log(findMax(5, 6, -1));

//
// - Дано натуральное число n. Выведите все числа от 1 до n.

// function foo(n) {
//       arr = [];
//         for (let i = 0; i < n; i++) {
//         arr[i] = i+1
//         }
//     console.log(arr);
//    }
// foo(10)


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
