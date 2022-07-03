// Exercise 2
/* 1 - Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100
*/

// prompt for the values
triBase = prompt("Enter base of the triangle: ");
triHeight = prompt("Enter height of triangle: ");


// calculate the area and return the answer
triArea = 0.5 * triBase * triHeight;
console.log(`the area of the triangle is ${triArea}`);


/* 2 - Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/

// prompt for the values
sideA = prompt("Enter side a of the triangle: ");
sideB = prompt("Enter side b of the triangle: ");
sideC = prompt("Enter side c of the triangle: ");

/*
convert the sides to integers
calculate the perimeter and return the answer
*/ 
triPerimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log(`the perimeter of the triangle is ${triPerimeter}`);


// 3 - Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// prompt for the values
rectLength = prompt("Enter length of the rectangle: ");
rectWidth = prompt("Enter height of rectangle: ");

/*
convert the length and width to integers
calculate the perimeter
*/
rectPerimeter = 2 * (Number(rectLength) + Number(rectWidth));

// calculate the area and return the answer
rectArea = rectLength * rectWidth + rectPerimeter;
console.log(`the area of the triangle is ${rectArea}`);


// 4 - Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14;

// prompt for values
circleRadius = prompt("Enter the radius of the circle: ");

// calculate the area and circumference
circleArea = PI * circleRadius * circleRadius;
circleCircumference = 2 * PI * circleRadius;

console.log(circleArea);
console.log(circleCircumference);


// 5 - Calculate the slope, x-intercept and y-intercept of y = 2x -2
/* formula is y = mx + b where m is the slope and b is the y-intercept.
substitute for slope and y-intercept from the values provided
*/
let slope = 2;
let yIntercept = -2;

// calculation to find x-intercept
let xIntercept = -yIntercept / slope;
console.log(xIntercept);


// 6 - Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
/* 
provided the points of intersection
point1 = (x1: 2, y1: 2) 
point2 = (x2: 6, y2 : 10)
declare variables and assign the points for x1, x2, y1 and y2
*/
let x1 = 2;
let y1 = 2;
let x2 = 10;
let y2 = 6;

// input the provided calculation for slope
m = (y2-y1)/(x2-x1);
console.log(m);


// 7 - Compare the slope of above two questions.



// 8 - Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value when y is 0. 
let x = -3;

// assign formula to figure out what the x value is when y is 0
let y = (x ** 2) + (6 * x) + 9;

console.log(y);


/* 9 - Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
hours_worked = prompt("Enter the total hours you worked this week");
hourly_rate = prompt("Enter how much your earn per hour");

earning = hours_worked * hourly_rate;
console.log(`your weekly earning is ${earning}`);


// 10 - If the length of your name is greater than 7 say, your name is long else say your name is short.
yourName = prompt("Enter your name");

yourName.length > 7
? console.log("your name is long!")
: console.log("your name is short!");


/* 11 - Compare your first name length and your family name length and you should get this output.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
*/
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");

firstName.length > lastName.length
? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
: console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`);


/* 12 - Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
I am 225 years older than you.
*/
let myAge = prompt("Enter my age");
let yourAge = prompt("Enter your age");

parseInt(myAge) > parseInt(yourAge)
? console.log(`I am ${myAge - yourAge} years older than you`)
: console.log(`You are ${yourAge - myAge} years older than me`);


/* 13 - Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
Enter birth year: 1995
You are 25. You are old enough to drive
Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/

// declare variable for birthyear
let birthYear = prompt("Enter the year you were born");
const thisYear = new Date();

currentYear = thisYear.getFullYear();
age = currentYear - parseInt(birthYear);

age >= 18
? console.log(
    `You are ${age}. You are old enough to drive`
    )
: console.log(
    `You are ${age}. You will be allowed to drive after ${18 - age} years`
    );


/* 14 - Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
Enter number of years you live: 100
You lived 3153600000 seconds.
*/
// years lived
let currentAge = prompt("enter your age");
let maxAge = 100;

// convert age to seconds and calculate time lived
timeLived = ((1000 * 60 * 60 * 24 * 365) * (currentAge));
console.log(
  `You've lived for ${timeLived} seconds`
  );

//  convert max age to seconds and calculate the amount of seconds a person can live for
possibleLifetime = ((1000 * 60 * 60 * 24 * 365) * (maxAge));
console.log(
    `You can live for ${possibleLifetime} seconds`
    );

// deduct current age from max age of 100 and convert to seconds to calculate time left
timeLeft = ((1000 * 60 * 60 * 24 * 365) * (maxAge - (currentAge)));
console.log(
  `You can live for ${timeLeft} seconds more`
  );


/* 15 - Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/

// declare the minutes, hours, date and month
let minsNow = thisYear.getMinutes();
let hourNow = thisYear.getHours();
let dayNow = thisYear.getDate();
let monthNow = thisYear.getMonth() + 1;

/*
return date and time in the formats specified
add "00" and slice by -2 to adjust the formatting for the date/time i.e 07 instead of 7
*/
let yearToday = (
    `${currentYear}-${("00" + monthNow).slice(-2)}-${("00" + dayNow).slice(-2)} ${("00" + hourNow).slice(-2)}:${("00" + minsNow).slice(-2)}`
    );
let dateToday1 = (
    `${("00" + dayNow).slice(-2)}-${("00" + monthNow).slice(-2)}-${currentYear} ${("00" + hourNow).slice(-2)}:${("00" + minsNow).slice(-2)}`
);
let dateToday2 = (
    `${("00" + dayNow).slice(-2)}/${("00" + monthNow).slice(-2)}/${currentYear} ${("00" + hourNow).slice(-2)}:${("00" + minsNow).slice(-2)}`
);

console.log(yearToday);
console.log(dateToday1);
console.log(dateToday2);
