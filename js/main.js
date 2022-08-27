// Exercise 1
/* 1 - Iterate 0 to 10 using for loop, 
do the same using while 
and do while loop
*/

// for loop
/*initialise the loop
condition is for when 1 <= 10 during each iteration
increment count until it reaches 10
*/
for (let index = 0; index <= 10; index++) {
    console.log(index);
}

// while loop
/*initialise the loop
condition is for while 1 <= 10 during each iteration
increment count until it reaches 10
*/
let whileIndex = 0;

while (whileIndex <= 10) {
    whileIndex++;
    console.log(whileIndex);
}

// do while loop
/*initialise the loop
condition is for when 1 <= 10 during each iteration
increment count until it reaches 10
*/
let doIndex = 0;
do {
    console.log(doIndex);
    doIndex++;
} while (doIndex <= 10);


// 2 - Iterate 10 to 0 using for loop, do the same using while and do while loop
/*initialise the loop
condition is for i >= 10 during each iteration
decrease count until it reaches 0
*/
for(let i = 10; i >= 0; i--) {
    console.log(i);
}

// while loop
/*initialise the loop
condition is for while i >= 10 during each iteration
decrease count until it reaches 0
*/
let whileI = 10;
while (whileI >= 0) {
    console.log(whileI);
    whileI--;
}

// do while loop
/*initialise the loop
condition is for when i >= 10 during each iteration
decrease count until it reaches 0
*/
let doIndx = 10;
do {
    console.log(doIndx);
    doIndx--;
} while (doIndx >= 0);


// 3 - Iterate 0 to n using for loop
/*Assign a value to variable n.
initialise the loop
condition is for i <= 8 during each iteration
increase count until it reaches n
*/
let n = 8;
// for loop to loop from i to n
for (let index = 0; index <= n; index++) {
    console.log(index);
}


/* 4 - Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

/*Assign empty variable to hashTree
initialise the loop
condition is for i <= 7 during each iteration
increase count until it reaches 7
*/
let hashTree = "";
for (let tree = 0; tree <= 7; tree++) {
    // add the # to each iteration
    hashTree += "#";
    // print output in required format
    console.log(hashTree);
}


/* 5 - Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

/*initialise the loop
condition is for i <= 10 during each iteration
increase count until it reaches 10
*/
for (let i = 0; i <= 10; i++) {
    // multiply i by itself
    let numArray = i * i;
    // print output in required format
    console.log(
        `${i} x ${i} = ${numArray}`
    );
}


/* 6 - Using loop print the following pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/

/*initialise the loop
condition is for i <= 10 during each iteration
increase count until it reaches 10
*/
for (let i = 0; i <= 10; i++) {
    // i raised to power 2
    raised2 = i ** 2;

    // i raised to power 3
    raised3 = i ** 3;

    // print output in required pattern
    console.log(
        `${i}\t${raised2}\t${raised3}`
        );
}


// 7 - Use for loop to iterate from 0 to 100 and print only even numbers

/*initialise the loop
for i <= 100 during each iteration,
increase count until it reaches 100
*/
for (let evenNum = 0; evenNum <= 100; evenNum++) {
    // check if the number is an even number
    if (evenNum % 2 == 0) {
        // print the output
        console.log(evenNum);
    };
}


// 8 - Use for loop to iterate from 0 to 100 and print only odd numbers
/*initialise the loop
for i <= 100 during each iteration,
increase count until it reaches 100
*/
for (let oddNum = 0; oddNum <= 100; oddNum++) {
    // check if the number is an odd number
    if (oddNum % 2 != 0) {
        // print the output
        console.log(oddNum);
    };
}


// 9 - Use for loop to iterate from 0 to 100 and print only prime numbers
/*
Assign variable to the prime numbers
initialise the loop
for i <= 100 during each iteration,
increase count until it reaches 100
*/
let primeNum = 0;
for (let index = 1; index <= 100; index++) {
    /* a prime number is a number that has two factor. 
    it can only be divided by 1 or itself
    the smallest prime number is 2
    */
    let isPrime = index > 1;
    /*
    for each number greater than 1, calculate the square root
    if i
    */
    for (primeNum = 2; primeNum <= Math.sqrt(index); primeNum++) {
        if (index % primeNum == 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        primeNum += 1;
        console.log(index);
    }
}


/* 10 - Use for loop to iterate from 0 to 100 and print the sum of all numbers.
The sum of all numbers from 0 to 100 is 5050.
*/

/* declare variable for the sum
initialise the loop
for i <= 100 during each iteration,
increase count until it reaches 100
add value of index to the sum on each iteration
*/
let sum = 0;
for (let index = 1; index <= 100; index++) {
    sum += index;
} 
// print the output
console.log(
    `The sum of all numbers from 0 to 100 is ${sum}`
    );


/* 11 - Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
The sum of all evens from 0 to 100 is 2550. 
And the sum of all odds from 0 to 100 is 2500.
*/

/* declare variables for the even & odd numbers
initialise the loop
for i <= 100 during each iteration,
increase count until it reaches 100
assign variables for sum of even and odd numbers
*/
let sumOfEven = 0;
let sumOfOdd = 0;

for (let num = 0; num <= 100; num++) {
    // check if the number is an even number using ternary operators
    num % 2 == 0
        // add all even numbers
        ? sumOfEven += num 
        // add all odd numbers
        : sumOfOdd += num;
}
// print the output
console.log(
    `The sum of all evens from 0 to 100 is ${sumOfEven}. 
    And the sum of all odds from 0 to 100 is ${sumOfOdd}.`
    );


/* 12 - Use for loop to iterate from 0 to 100
and print the sum of all evens and the sum of all odds. 
Print sum of evens and sum of odds as array
[2550, 2500]
*/

/* declare variables for the even & odd numbers
initialise the loop
for i <= 100 during each iteration,
increase count until it reaches 100
*/
let sumEven = 0;
let sumOdd = 0;
for (let num = 0; num <= 100; num++) {
    // using ternary operators, check if the number is an even number
    num % 2 == 0
        // add all even numbers
        ? sumEven += num 
        // add all odd numbers
        : sumOdd += num;
}
// print output as an array
console.log([sumEven, sumOdd]);


// 13 - Develop a small script which generate array of 5 random numbers
/* declare variable for the array
initialise the loop
generate array with 5 numbers
increase count until it reaches 5
*/
let myArray = [];
for(let randomNum = 0; myArray.length < 5; randomNum++) {
    /* math floor to round down the numbers
    math.random to generate random numbers within a range of 0 - 20
    push the random numbers to the array
    */
    myArray.push(Math.floor(Math.random() * 20));
}
// print the output
console.log(myArray);


/* 14 - Develop a small script which generate array of 5 random numbers
 and the numbers must be unique
*/
let myrray = [];
for(let randomNum = 0; myrray.length < 5;  randomNum++) {
    /* math floor to round down the numbers
    math.random to generate random numbers within a range of 0 - 10
    */
    let randNum = Math.floor(Math.random(randomNum) * 10);
    /* if random number doesn't exist in the array
    push the number to the array
    */
    if (!myrray.includes(randNum)) {
        myrray.push(randNum);
    }
// print the output
}
console.log(myrray);


// 15 - Develop a small script which generate a six characters random id: 5j2khz
/* declare variables to store the generated string, 
combinations and the length of the generated string
*/
let genString = "";
let combos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghi\
jklmnopqrstuvwxyz0123456789";
let charLength = 6;

for (let i = 0; i < charLength; i++) {
/* generate a random character using the combination declared above
add to generated string until it meets the specified charlength
*/
    genString += combos.charAt(Math.floor(Math.random() * combos.length));
}
// print the output
console.log(genString);