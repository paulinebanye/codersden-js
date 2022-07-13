// Exercise 1
// 1 - Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/* Enter your age: 30
 You are old enough to drive.
 Enter your age:15
 You are left with 3 years to drive.
*/

// prompt for input
let userAge = prompt("Enter your age");

// use ternary operators to compare age
userAge >= 18
? console.log(`You are old enough to drive`)
: console.log(`You are left with ${18 - userAge} years to drive.`);


/* 2 -  Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
Enter your age: 30
You are 5 years older than me.
*/

// prompt for input
let myAge = prompt("Enter my age");
let yourAge = prompt("Enter your age");

// compare the inputs and return the response based on the output
myAge > yourAge
? console.log(`I am ${myAge - yourAge} older than you`)
: console.log(`You are ${yourAge - myAge} older than me`);


// 3 - If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
/* 
- using if else
- ternary operator.
let a = 4
let b = 3
4 is greater than 3
*/
let a = 4;
let b = 3;

// usimg if-else
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

// using ternary operator
a > b
? console.log(`${a} is greater than ${b}`)
: console.log(`${a} is less than ${b}`);


// 4 - Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

/* Enter a number: 2
2 is an even number
Enter a number: 9
9 is is an odd number.
*/
let enterNum = prompt("Enter a number");

enterNum % 2 == 0
? console.log(`${enterNum} is an even number`)
: console.log(`${enterNum} is an odd number`);