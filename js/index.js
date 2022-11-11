//0) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти,
//чи працездатного людина віку (від 16 до 65).
// Функція приймає в якості параметра вік людини і повертає значення  булевського типу.
//Очікуваний результат:
//isWorkingAgePerson(20); // true
//isWorkingAgePerson(4); // false
//isWorkingAgePerson(88); // false

const userAge = Number(prompt('Enter Your age'));

function isWorkingAgePerson(age) {
	return age >= 16;  //return age >= 16: >= 65; -неработает что сделала не так

}

if (isWorkingAgePerson(userAge)) {
	alert('працездатнa людина');
} else {
	alert('непрацездатнa людина');
}
//2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє,
// чи ділиться перше на друге націло (без залишку):
//checkMultiplicity(25, 5) // true
//checkMultiplicity(15, 3) // true
//checkMultiplicity(15, 5) // true
//checkMultiplicity(15, 4) // false

//3) Перевірка можливості існування трикутника.
// Реалізувати функцію, яка приймає довжини трикутника; функція повертає true,
//  якщо треугольник можливий, і false, якщо ні (див. умови існування трикутника).
//const a = 7
//const b = 6
//const c = 10
//const sumAB = a + b;
//const sumBC = b + c;
//const sumAC = a + c;

//if (a > sumBC) {
//	console.log("трикутник не існує");
//} else if (b > sumAC) {
//	console.log("трикутник не існує");

//} else if (c > sumAB) {
//	console.log("трикутник не існує");
//} else {
//	console.log("трикутник існує");
//}
//4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла):
//трикутника, прямокутника (або конуса, паралелепіпеда) в залежності від переданих
// розмірів фігури. Функція повинна повернути обчислене значення.
//  Мінімум для однієї фігури на вибір.

function areaOfRectangle(a, b) {
	return a * b;
}
const numbers = areaOfRectangle(2, 3);
console.log(numbers);


//паралелепіпеда  - тут запуталась 
function parallelepiped(a, b, c) {
	const numbers = 2 * (sumAB + sumAC + sumBC)
	return numbers;
}
const numbers = parallelepiped(a, b.c);
console.log(numbers);


const sumAB = 8 + 6;
const sumAC = 8 + 10;
const sumBC = 6 + 10;






//2 функції на вибір реалізувати у форматі функціонального виразу (function expression).
//1. Запитати у користувача номер дня тижня та вивести відповідну
// повну рядкову назву(наприклад, якщо користувач вводить 7 – виводиться
//	повідомлення "неділя").Передбачити обробку помилкового введення номера дня
//тижня(default ).

const weekNumber = Number(prompt('Уведіть номер тиждня'));

switch (weekNumber) {
	case 1:
		alert('Понедельник.');
		break;
	case 2:
		alert('Вторник.');
		break;
	case 3:
		alert('Среда.');
		break;
	case 4:
		alert('Четверг.');
		break;
	case 5:
		alert('Пятница.');
		break;
	case 6:
		alert('Суббота.');
		break;
	case 7:
		alert('Воскресенье.');
		break;

	default:
		alert('Некоректний тиждень.');
		break;
}






//2. У змінній day лежить якесь число з інтервалу від 1 до 31.
// Визначте, до якої декади місяця потрапляє це число (до першої, другої чи третьої).
const dayNumber = Number(prompt('Уведіть число от 1 до 31 '));
const min = 10;
if (min >= 0 && min <= 10) {
	alert('В першу декаду.');
}
else if (min >= 11 && min <= 20) {
	alert('У другу декаду.');
}
else if (min >= 21 && min <= 31) {
	alert('В третю декаду.');
}
//незнаю почему все выводится в первую декаду






// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//	1. Створити Об'єкт customer, що містить такі властивості:
//ім'я, 
//прізвище,
//	електронна адреса,
//	password,
//	номер телефона,
//	адреса(є рядком або * об'єктом з властивостями місто, вулиця, дім, квартира) ; 
//методи:
//		виведення адреси,
//		зміна номера телефону(метод повинен приймати як параметр рядок з новим номером телефону).
//Додати об'єкту властивість isMale (для позначення статі, true - male, false - female).
//Видалити у об'єкта властивість адреса.

//Зробити копії об'єкту customer двома різними способами.

const customer = {
	firstName: 'Ivo',
	lastName: 'Ivanov',
	email: 'Iva@gmail.com',
	password: 'qwerty',
	phone: "1-234-567-90",
	address: {
		city: "Kiev",
		street: "lugovaia",
		suite: "Apt. 55",
	},
};

console.log('customer :>> ', customer);
customer.isMale = 'male';
customer.phone = 0987654321;
delete customer.address;

const customer1 = Object.assign({}, customer);
console.log('customer1 :>> ', customer1);
console.log('customer===customer1 :>> ', customer === customer1);

const customer2 = { ...customer };
console.log('customer2 :>> ', customer2);
console.log('customer===customer2 :>> ', customer === customer2);


//2. Перебрати і вивести властивості об'єкту cat
const cat{
	name: 'Murka',
	color: 'black',
	isMale: false,
	isFurnitureDemage: true,
}
for (const key in cat) {
	console.log('key :>> ', cat[key]);
}
for (const key in cat) {
	console.log(`cat.${key} = ${cat[key]}`);
}




//циклом for..in.

//3. Створити функцію - конструктор для створення об'єктів книг з властивостями:
//автор,
//	назва,
//	рік видання,
//		видавництво(рядок або * об'єкт з властивостями місто, назва),
//ціна.
//   передбачити методи:
//			для обчислення віку книги(у роках),
//			для зміни ціни книги.
function Book(author, bookName, yearOfPublication, publishingHouse, price) {

	this.author = author;
	this.bookName = bookName;
	this.yearOfPublication = yearOfPublication;
	this.publishingHouse = publishingHouse;
	this.price = price;


	this.getFullName = function () {
		return `${this.author} ${this.bookName}`;
	};

}



const book = new Book({
	author: 'Т.Г.Шевченко',
	bookName: ' «Кобза́р»',
	yearOfPcublication: '1840 року',
	publishingHouse: ' харківське видавництво «Рух» ',
	price: 400,
	changeValue(valbook, value) {
		this[valbook] = value;
	},


})
console.log('book', book)
book.changeValue('price', 200);
console.log('book :>> ', book);


const book1 = new Book({
	author: ' Джоан Роулинг',
	bookName: 'Гарри Поттер и узник Азкабана ',
	yearOfPcublication: '2019 року',
	publishingHouse: ' Азбука-Аттикус, Махаон ',
	price: 200,
})
console.log('book1', book1)
//для обчислення віку книги(у роках),-не могу понять - как сделать