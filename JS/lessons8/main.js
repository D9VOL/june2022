// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     }
//
// let newUser = [];
//   let user1 = new User(1, 'Vasyl', 'Petrov', 'asd@gmail.com', '+380962126079');
//   let user2 = new User(10, 'Olha', 'Igrov', 'asdsdwwsd@gmail.com', '+3809666436079');
//   let user3 = new User(15, 'Ira', 'Hgsdr', 'asdbvrr556wsd@gmail.com', '+3806366436079');
//   let user4 = new User(8, 'Oleg', 'Hgdffvr', 'asdfffbbbbr556wsd@gmail.com', '+3809766436079');
//   let user5 = new User(24, 'Igor', 'Hgdb5', 'asdfffbbbbr556wsd@gmail.com', '+3809766436079');
//   let user6 = new User(50, 'Andriy', 'Hgdffvr', 'asdfffbbbbr556wsd@gmail.com', '+3809766436079');
//   let user7 = new User(41, 'Kolya', 'Qrfdf', 'asdff344d@gmail.com', '+3809766436079');
//   let user8 = new User(30, 'Ostap', 'Hgdffvr', 'asddffdr556wsd@gmail.com', '+3809768636079');
//   let user9 = new User(56, 'Yra', 'Dfgfg', 'asdfffbbbbr556wsd@gmail.com', '+3809766436079');
//   let user10 = new User(99, 'Bodja', 'ffffvr', 'asdfffbbbbr556wsd@gmail.com', '+38097664656079');
//
//   newUser.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
// console.log(newUser);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(newUser.filter(newUser => !(newUser.id % 2)));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(newUser.sort((n1, n2) => n1.id - n2.id));



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//
//     }
//
// }
//
// let newClient = [];
//   let client1 = new Client(1, 'Vasyl', 'Petrov', 'asd@gmail.com', '+380962126079',['cola','tea','cofe','cake','bread','IseCrem']);
//   let client2 = new Client(10, 'Olha', 'Igrov', 'asdsdwwsd@gmail.com', '+3809666436079',['cola','tea','cofe','sweet','cake','bread','IseCrem']);
//   let client3 = new Client(15, 'Ira', 'Hgsdr', 'asdbvrr556wsd@gmail.com', '+3806366436079',['cola','sweet','cake','bread','IseCrem']);
//   let client4 = new Client(8, 'Oleg', 'Hgdffvr', 'asdfffbbbbr556wsd@gmail.com', '+3809766436079',['cola','tea','cofe','sweet','cake','bread','IseCrem']);
//   let client5 = new Client(24, 'Igor', 'Hgdb5', 'asdfffbbbbr556wsd@gmail.com', '+3809766436079',['cola','bread','IseCrem']);
//   let client6 = new Client(50, 'Andriy', 'Hgdffvr', 'asdfffbbbbr556wsd@gmail.com', '+3809766436079',['cola','tea','cofe','sweet','cake','bread','IseCrem']);
//   let client7 = new Client(41, 'Kolya', 'Qrfdf', 'asdff344d@gmail.com', '+3809766436079',['cola','tea','cofe','sweet','IseCrem']);
//   let client8 = new Client(30, 'Ostap', 'Hgdffvr', 'asddffdr556wsd@gmail.com', '+3809768636079',['cola','tea','cofe','cake','bread','IseCrem']);
//   let client9 = new Client(56, 'Yra', 'Dfgfg', 'asdfffbbbbr556wsd@gmail.com', '+3809766436079',['cake','bread']);
//   let client10 = new Client(99, 'Bodja', 'ffffvr', 'asdfffbbbbr556wsd@gmail.com', '+38097664656079',['cola','cofe','cake','bread','IseCrem']);
//
//   newClient.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(newClient.sort((n1, n2) => n1.order.length - n2.order.length));



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car(model,producer,year,maxSpeed,engineCapasity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapasity = engineCapasity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//          }
//
//     this.info = function () {
//         console.log(`
//     model - ${this.model}
//     producer - ${this.producer}
//     year - ${this.year}
//     maxSpees - ${this.maxSpeed}
//     engineCapasity - ${this.engineCapasity}
//         `)
//     }
//     this.info = function () {
//         for (let item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} ---- ${this[item]}`);
//             }
//         }
//     }

//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//
//     }
//
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }

// let u = new Car('Cuberpank', 'Tesla', 2020, 290, 4.0);

// u.drive();
// u.info();
// u.increaseMaxSpeed(100);
// u.changeYear(2000);
// u.addDriver({name: 'Andriy', age: 30});
// console.log(u);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model,producer,year,maxSpeed,engineCapasity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapasity = engineCapasity;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info () {
//         console.log(`
//     model - ${this.model}
//     producer - ${this.producer}
//     year - ${this.year}
//     maxSpees - ${this.maxSpeed}
//     engineCapasity - ${this.engineCapasity}
//         `)
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear (newValue) {
//         this.year = newValue;
//
//     }
//
//     addDriver (driver){
//         this.driver = driver;
//     }
// }
//
// let u = new Car('Cuberpank', 'Tesla', 2020, 290, 4.0);
//
// u.drive();
// u.info();
// u.increaseMaxSpeed(100);
// u.changeYear(2000);
// u.addDriver({name: 'Andriy', age: 30});
// console.log(u)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Popeluwka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
 }

let popeluwka1 = new Popeluwka('Julia', 19, 35);
let popeluwka2 = new Popeluwka('Ira', 20, 34);
let popeluwka3 = new Popeluwka('Olga', 18, 36);
let popeluwka4 = new Popeluwka('Olena', 25, 37);
let popeluwka5 = new Popeluwka('Olesa', 21, 38);

let arr = [popeluwka1, popeluwka2, popeluwka3, popeluwka4, popeluwka5];
console.log(arr);

class Prunts extends Popeluwka{
    constructor(name, age, footFind) {
        super(name, age);
        this.footFind = footFind;
    }

}

let prunts = new Prunts('Andriy', 30, 35);
console.log(prunts);

let find1 = (array,prunts)=>{
    for (const item of arr) {
        if (prunts.footFind === item.footSize){
            return `My popeluwka ${item.name}`
        }

    }
}
console.log(find1(arr, prunts));

let find2 = arr.find(value => prunts.footFind === value.footSize);
console.log(find2);

