// Exercise 2
// import from arrays.js
import {countriesA, webTechs, mernStack} from "./arrays.js";

/* 1 - Develop a small script which generate any number of characters random id:
fe3jo1gl124g
xkqci4utda1lmbelpkm03rba
*/
// variable for the generated string
let randomId = "";
// variable for the combinations
let mixed = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghi\
jklmnopqrstuvwxyz";
/* determine the random length of the id
math floor to round down the number
math.random to generate random numbers within a range of 8 - 20
*/
let num = Math.floor(Math.random() * 12 + 8);
for (let i = 0; i < num; i++) {
    /* math floor to round down the numbers
    math.random to generate random numbers from the mixed string
    charat to retrieve the characters
    add each generated character to randomId variable
    */
    randomId += mixed.charAt(Math.floor(Math.random() * mixed.length));
}
// print the output
console.log(randomId);


// 2 - Write a script which generates a random hexadecimal number: '#ee33df'
let result = "";
let hexLen = 6;
for (let i = 0; i < hexLen; i++) {
    /* math floor to round down the numbers
    math.random to generate random numbers
    tostring(32) to convert the result to hexadecimal
    */
    result += (Math.floor(Math.random() * 16)).toString(32);
}
// print the output
console.log(`#${result}`);


// 3 - Write a script which generates a random rgb color number: rgb(240,180,80)
// declare variables
let a;
let b;
let c;

for (let i = 0; i <= 100; i++) {
    /* math floor to round down the numbers
    math.random to generate random numbers
    */
    a = Math.floor(Math.random() * 300);
    b = Math.floor(Math.random() * 200);
    c = Math.floor(Math.random() * 100);
}
// print the output
console.log(`rgb(${a},${b},${c})`);


/* 4 - Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", 
"GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
let countryArr = []
for (let country of countriesA ){
    /* iterate through the countries array
    convert to uppercase
    push country to country array
    */
    countryArr.push(country.toUpperCase())
}
// print the output
console.log(countryArr);


/* 5 - Using the above countries array, create an array for countries length'.
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/
let countryLen = []
for(let country of countriesA){
    countryLen.push(country.length);
}
// print the output
console.log(countryLen);


/* 6 - Use the countries array to create the following array of arrays:
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/
let newCountry = []
/* create new array from the countries array 
and unpack it using the spread operator */
let arr = new Array(...countriesA)

// find index of ireland
console.log(arr.indexOf("Ireland"))
// if Iceland is not in the countries array, add it after Ireland
!arr.includes("Iceland")
? arr.splice(9, 0, "Iceland")
: console.log("Iceland is in the array");

for(let country of arr){
    // extract the first 3 letters from the country
    // convert to uppercase
    let first3 = country.slice(0, 3).toUpperCase();
    // find length of each country
    let len = country.length;
    console.log(len);

    // push to the newcountry array
    newCountry.push([country, first3, len]);
}
// print output
console.log(newCountry);


/* 7 - In above countries array, check if there is a country or countries 
containing the word 'land'. If there are countries containing 'land', print it as array. 
If there is no country containing the word 'land', print 'All these countries are without land'.
['Finland','Ireland', 'Iceland']
*/
let landArr = [];
for (let country of arr) {
    /* iterate through the countries array
    if country includes land; push to the array
    */
    if (country.includes("land")) {
        landArr.push(country);
    } 
    else {
    // if land isn't present, print output
    console.log(
        'All these countries are without land'
        );
    }
}
// print array
console.log(landArr);


/* 8 - In above countries array, check if there is a country or countries end with a substring 'ia'.
If there are countries end with, print it as array. 
If there is no country containing the word 'ai', print 'These are countries ends without ia'.
['Albania', 'Bolivia','Ethiopia']
*/
let aiArr = [];
for (let country of arr) {
    /* iterate through the countries array
    if country includes ia; push to the array
    */
    if (country.includes("ia")) {
        aiArr.push(country);
    } 
    else {
    console.log(
        'These are countries ends without ia'
        );
    }
}
// print the output
console.log(aiArr);


/* 9 - Using the above countries array, find the country containing 
the biggest number of characters.
Ethiopia
*/
// declare variables for the country lengths and the country with the highest length
let lenCountry = 0;
let maxString;
for (let country of arr) {
    if (country.length > lenCountry) {
        /* iterate through the countries array
        if current country length is longer than lencountry,
        assign it as the country with the longest length
        */
        lenCountry = country.length;
        // identify the country with longest length
        maxString = country;
    }
}
// print the output
console.log(maxString);


/* 10 - Using the above countries array, find the country containing only 5 characters.
['Japan', 'Kenya']
*/
let max5 = [];
for (let country of arr) {
    /* iterate through the countries array
    if country length is equal to 5, 
    push it to the array
    */
    if (country.length == 5) {
        max5.push(country);
    }
}
// print the output
console.log(max5);


// 11 - declare variables for the tech with the longest word
let lenTech = 0;
let maxTech = "";
for (let tech of webTechs) {
    if (tech.length > lenTech) {
        /* iterate through the webtechs array
        if current tech length is longer than lentech,
        assign it as the tech with the longest length
        */
        lenTech = tech.length;
        // identify the tech with the longest word
        maxTech = tech;
    }
}
// print the output
console.log(maxTech);


/* 12 - Use the webTechs array to create the following array of arrays:
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/
let newWebTech = [];
for(let tech of webTechs){
    // find the length of each element in the array
    let len = tech.length;
    // push the element and the length to the newwebtech array
    newWebTech.push([tech, len]);
}
// print the output
console.log(newWebTech);


/* 13 - An application created using MongoDB, Express, React and Node is called a MERN stack app. 
Create the acronym MERN by using the array mernStack
*/
// create array for the letters
let newStack = [];
for(let mern of mernStack){
    // for each array element, extract the first letter
    mern = mern[0];
    // push to the newstack array
    newStack.push(mern);
}
// join the array
console.log(newStack.join(''));


/* 14 - Iterate through the array, 
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
using a for loop or for of loop and print out the items.
*/
let techStack = [
    "HTML", 
    "CSS", 
    "JS", 
    "React", 
    "Redux", 
    "Node", 
    "Express", 
    "MongoDB"
];
// iterate through the array
for (let techs of techStack) {
    // print the elements of the array
    console.log(techs);
}

// iterate through the array
for (let i = 0; i < techStack.length; i++) {
    // print the elements of the array
    console.log(techStack[i]);
}


/* 15 - This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] 
reverse the order using loop without using a reverse method.
*/
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let revFruits = [];
// initialize the array
for (let index = fruits.length - 1; index >= 0;  index--) {
    // push to the revfruits array
    revFruits.push(fruits[index]);
}
// print output
console.log(revFruits);


/* 16 - Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
// iterate through the first array in the nested fullstack array
for (let index = 0; index < fullStack.length; index++) {
    // iterate through the second array the nested fullstack array
    for (let indexB = 0; indexB < fullStack[index].length; indexB++) {
        // convert both arrays to uppercase
        let upper = fullStack[index][indexB].toUpperCase();
        // print output
        console.log(upper);
    }
}