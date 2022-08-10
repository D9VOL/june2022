// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world'
// console.log(str1.length);

// let str2 = 'lorem ipsum'
// console.log(str2.length);

// let str3 = 'javascript is cool'
// console.log(str3.length);

// ------------------------------------------------------------------------------------

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world'
// console.log(str1.toUpperCase('hello world'));
//
// let str2 = 'lorem ipsum'
// console.log(str2.toUpperCase('lorem ipsum'));
//
// let str3 = 'javascript is cool'
// console.log(str3.toUpperCase('javascript is cool'));

// ------------------------------------------------------------------------------------

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD'
// console.log(str1.toLowerCase('HELLO WORLD'));
//
// let str2 = 'lorem ipsum'
// console.log(str2.toLowerCase('LOREM IPSUM'));
//
// let str3 = 'javascript is cool'
// console.log(str3.toLowerCase('JAVASCRIPT IS COOL'));

// ------------------------------------------------------------------------------------

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// // console.log(str.substring(1, 13));

// ------------------------------------------------------------------------------------

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні'
// let arr = str.split(' ');
// console.log(arr);

// ------------------------------------------------------------------------------------

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let number = [10,8,-7,55,987,-1011,0,1050,0];
// let map = number.map(value => value + '');
// console.log(map);

// ------------------------------------------------------------------------------------

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// function sortNums(nums,direction) {
//     if (direction === 'ascending')
//     {
//         nums.sort((n1,n2) => n1 - n2);
//     } else (direction === 'descending')
//     {
//         nums.sort((n1,n2) => n2 - n1);
//     }
// }
// sortNums(nums,'ascending');
// console.log(nums);
// sortNums(nums,'descending');
// console.log(nums);

// ------------------------------------------------------------------------------------

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // let sort = coursesAndDurationArray.sort((n1,n2) => n2.monthDuration - n1.monthDuration);
// // console.log(sort);
//
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);

// ------------------------------------------------------------------------------------

// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color:'black'},
//     {cardSuit: 'clubs', value: 2, color:'black'},
//     {cardSuit: 'clubs', value: 3, color:'black'},
//     {cardSuit: 'clubs', value: 4, color:'black'},
//     {cardSuit: 'clubs', value: 5, color:'black'},
//     {cardSuit: 'clubs', value: 6, color:'black'},
//     {cardSuit: 'clubs', value: 7, color:'black'},
//     {cardSuit: 'clubs', value: 8, color:'black'},
//     {cardSuit: 'clubs', value: 9, color:'black'},
//     {cardSuit: 'clubs', value: 10, color:'black'},
//     {cardSuit: 'clubs', value: 'Jack', color:'black'},
//     {cardSuit: 'clubs', value: 'Queen', color:'black'},
//     {cardSuit: 'clubs', value: 'King', color:'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//     {cardSuit: 'diamonds', value: 2, color:'red'},
//     {cardSuit: 'diamonds', value: 3, color:'red'},
//     {cardSuit: 'diamonds', value: 4, color:'red'},
//     {cardSuit: 'diamonds', value: 5, color:'red'},
//     {cardSuit: 'diamonds', value: 6, color:'red'},
//     {cardSuit: 'diamonds', value: 7, color:'red'},
//     {cardSuit: 'diamonds', value: 8, color:'red'},
//     {cardSuit: 'diamonds', value: 9, color:'red'},
//     {cardSuit: 'diamonds', value: 10, color:'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color:'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//     {cardSuit: 'diamonds', value: 'King', color:'red'},
//
//     {cardSuit: 'hearts', value: 'Ace', color:'red'},
//     {cardSuit: 'hearts', value: 2, color:'red'},
//     {cardSuit: 'hearts', value: 3, color:'red'},
//     {cardSuit: 'hearts', value: 4, color:'red'},
//     {cardSuit: 'hearts', value: 5, color:'red'},
//     {cardSuit: 'hearts', value: 6, color:'red'},
//     {cardSuit: 'hearts', value: 7, color:'red'},
//     {cardSuit: 'hearts', value: 8, color:'red'},
//     {cardSuit: 'hearts', value: 9, color:'red'},
//     {cardSuit: 'hearts', value: 10, color:'red'},
//     {cardSuit: 'hearts', value: 'Jack', color:'red'},
//     {cardSuit: 'hearts', value: 'Queen', color:'red'},
//     {cardSuit: 'hearts', value: 'King', color:'red'},
//     {value: 'Joker', color:'red'},
//
//     {cardSuit: 'spades', value: 'Ace', color:'black'},
//     {cardSuit: 'spades', value: 2, color:'black'},
//     {cardSuit: 'spades', value: 3, color:'black'},
//     {cardSuit: 'spades', value: 4, color:'black'},
//     {cardSuit: 'spades', value: 5, color:'black'},
//     {cardSuit: 'spades', value: 6, color:'black'},
//     {cardSuit: 'spades', value: 7, color:'black'},
//     {cardSuit: 'spades', value: 8, color:'black'},
//     {cardSuit: 'spades', value: 9, color:'black'},
//     {cardSuit: 'spades', value: 10, color:'black'},
//     {cardSuit: 'spades', value: 'Jack', color:'black'},
//     {cardSuit: 'spades', value: 'Queen', color:'black'},
//     {cardSuit: 'spades', value: 'King', color:'black'},
//     {value: 'Joker', color:'black'},
];
// описати колоду карт
// - знайти піковий туз

// let clubsAce = cards.filter(card => card.cardSuit === 'clubs' && card.value === 'Ace');
//
// console.log(clubsAce);

// - всі шістки

// let six = cards.filter(card => card.value === 6);
// console.log(six);

// - всі червоні карти
//
// let red = cards.filter(card => card.color === 'red');
// console.log(red);

// - всі буби

//   let diamonds = cards.filter(card => card.cardSuit === 'diamonds');
// console.log(diamonds);

// - всі трефи від 9 та більше

// let spades = cards.filter(card => card.cardSuit === 'spades' && card.value >= 9 + '');
// console.log(spades);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let suitCard = cards.reduce(function (suit,card) {
//     if (card.cardSuit === 'spades' ){
//         suit.spades.push(card);
//     } else if (card.cardSuit === 'hearts' ){
//         suit.hearts.push(card);
//     } else if (card.cardSuit === 'diamonds' ){
//         suit.diamonds.push(card);
//     } else if (card.cardSuit === 'clubs' ){
//         suit.clubs.push(card);
//     } else if (card.value === 'Joker'){
//         suit.else.push(card)
//     }
//
//     return suit;
//
// }, {spades: [], hearts: [], diamonds: [],clubs: [], else: [] });
// console.log(suitCard);