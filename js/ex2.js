// Exercise 2
/* 1 - Create a separate countries.js file and store the countries array in to this file
create a separate file web_techs.js and store the webTechs array in to this file. 
Access both file in main.js file
*/
import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

console.log(countries);
console.log(webTechs);


// 2 - First remove all the punctuations, change the string to array and count the number of words in the array
/* let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words) - ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(words.length) - 13
*/
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let invalid = /[,.]/gi;

let words = text.replace(invalid, "").split(" ");

console.log(words);
console.log(words.length);


/* 3 - In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let allergic = true;
let finalIndex = shoppingCart.length - 1;
console.log(shoppingCart);

// if the first item in the shoppingCart is not meat, add meat
if (shoppingCart[0] != "Meat") {
    shoppingCart.unshift("Meat");
    console.log(shoppingCart);
}

// if the last item in the shoppingCart is not sugar, add sugar
if (shoppingCart[finalIndex] != "Sugar") {
    shoppingCart.push("Sugar");
    console.log(shoppingCart);
  }

// if allergic is true, remove honey from the shoppingCart
if (allergic) {
    shoppingCart.splice(4, 1);
    console.log(shoppingCart);
}

// if there's tea in the shoppingCart, change it to green tea
if (shoppingCart.includes("Tea")) {
    // find the index of tea
    let teaIndex = shoppingCart.indexOf("Tea")
    // modify the value
    shoppingCart[teaIndex] = "Green Tea"
    console.log(shoppingCart);
}


// 4 - In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// assign variable to ethiopia
let country = "ethiopia"

/* convert array to string and lowercase
check if ethiopia exists in the countries array
*/
let checkCountry = countries.toString().toLowerCase().includes(country);

// check if country is present in the array
checkCountry == true
// if true, print the country in uppercase
? console.log(country.toUpperCase())
// else add it to the array
: countries.push(country);


// 5 - In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// assign variable to sass
let tech = "Sass"

/* convert array to string and lowercase
check if Sass exists in the countries array
*/
let checkSass = webTechs.toString().toUpperCase().includes(tech);

// if present
checkSass == true
// print the following
? console.log(`${tech} is a CSS preprocess`)
// else add it to the array
: webTechs.push(tech);
console.log(webTechs)


/* 6 - Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
let fullstack = frontEnd.concat(backEnd);

console.log(fullstack);