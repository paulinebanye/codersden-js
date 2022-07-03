// Exercises: Level 1
// 1 - Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "peter";
let lastName = "stone";
country = "canada";
let city = "alberta";
let age = 18;
let isMarried = true;
let year = 2022;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

// 2 - Check if type of '10' is equal to 10
console.log(typeof("10") == 10); // false

// 3 - Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10); // false

/*
 4 - Boolean value is either true or false.
4a - Write three JavaScript statement which provide truthy value.
4b - Write three JavaScript statement which provide falsy value.
*/

let isType = typeof('check') == typeof(null); //false
let myString = "perfect" === "picture"; // false
let num = -456 === 456; //false
let equalTo = 5 !=10; //true
let greaterThan = 6 > 5; //true
let friday = true; //true

console.log(isType);
console.log(myString);
console.log(num);
console.log(equalTo);
console.log(greaterThan);
console.log(friday);


// 5 - Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3; //true
4 >= 3; //true
4 < 3; //false
4 <= 3; //false
4 == 4; //true
4 === 4; //true
4 != 4; //false
4 !== 4; //false
4 != "4"; //true
4 == "4"; //false
4 === "4"; //false

// Find the length of python and jargon and make a falsy comparison statement.
// declare variables to hold the lengths
python = "python".length;
jargon = "jargon".length;

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log(python != jargon);


// 6 - Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12; //true
4 > 3 && 10 > 12; //false
4 > 3 || 10 < 12; //true
4 > 3 || 10 > 12; //true
!(4 > 3); //false
!(4 < 3); //true
!(false); //true
!(4 > 3 && 10 < 12); //false
!(4 > 3 && 10 > 12); //true
!(4 === "4"); //true
"There is no 'on' in both dragon and python"; //false

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
console.log(!"dragon".includes('on') && !"python".includes('on'));


/* 7 - Use the Date object to do the following activities
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

// first declare a date object
const today = new Date();

// use methods to return the specific data
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getTime());