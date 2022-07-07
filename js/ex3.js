import { countries } from './countries.js';
// create a new array from the countries array so the original array is not modified
let currentCountries = Array.from(countries)
// console.log(currentCountries);


// Exercise 3
/* 1 - The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
a - Sort the array and find the min and max age
b - Find the median age(one middle item or two middle items divided by two)
c - Find the average age(all items divided by number of items)
d - Find the range of the ages(max minus min)
e - Compare the value of (min - average) and (max - average), use abs() method
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// a - sort the array from the lowest to the highest age
let sorted = (ages.sort());
console.log(sorted);

// find the maximum age in the sorted array
let maximum = sorted[sorted.length - 1];
console.log(maximum);

// find the minimum age in the array
let minimum = sorted[0];
console.log(minimum);

// b - Find the median age in the array
const midAge = Math.floor(sorted.length / 2);

// check if the array is even or odd using the modulus operator
if (sorted.length % 2 === 0) {
    // if the array is even, return the two middle values
    let midAge1 = sorted[midAge - 1];
    let midAge2 = sorted[midAge];

    // print the two values
    console.log([midAge1, midAge2]);

    // to find the median, sum the two middle numbers and divide by 2
    let median = (midAge1 + midAge2) / 2
    console.log(median);
    } else {
    // if the array has an odd number of items
    console.log(sorted[Math.floor(midAge)]);
}

// c - Find the average age(all items divided by number of items)
// declare an empty variable to hold the sum of the ages
let sumAges = 0;

// Using a for loop to iterate through all the values in the age array
for (let index = 0; index < ages.length; index++) {
    // on each iteration, add the value to the sum of the array
    sumAges += ages[index];
};
// determine the length of the array
let agesLength = ages.length;

// calculate the average by dividing the sum of the array by its length
let average = sumAges/agesLength;

// return the output
console.log(average);

// d - Find the range of the ages(max minus min)
let range = maximum - minimum;
console.log(range);

// e - Compare the value of (min - average) and (max - average), use abs() method
let minAverage = Math.abs(minimum - average);
let maxAverage = Math.abs(maximum - average);

minAverage < maxAverage
? console.log(
    `minAverage (${minAverage}) is greater than maxAverage (${maxAverage})`
    )
: console.log(
    `maxAverage (${maxAverage}) is greater than minAverage (${minAverage})`
    );
    

// 2 - Slice the first ten countries from the countries array
let extract = countries.slice(0,10)
console.log(extract);


// 3 -  Find the middle country(ies) in the countries array

// for splitting the arrays into equal parts
const midCountry = Math.floor(countries.length / 2);

// check if the array is even or odd using the modulus operator
if (countries.length % 2 === 0) {
    // if the array is even, return the two middle countries
    let midCountry1 = countries[midCountry - 1];
    let midCountry2 = countries[midCountry];
    
    // print the output
    console.log([midCountry1, midCountry2]);
} else {
    // if the array has an odd number of items, return the middle country
    console.log(countries[(midCountry)]);
}


/* 4 - Divide the countries array into two equal arrays if it is even. 
If countries array is not even , one more country for the first half.
*/

// declare a new array to hold the first half
let newArray = []

// check if the array is even or odd using the modulus operator
if (currentCountries.length % 2 === 0) {
    /* if the array is even, split the countries array evenly
    splice out the first half and push them to the new array
    used the spread operator to destructure the array into its individual elements
    */
    newArray.push(...currentCountries.splice(0, midCountry));

    // print the output and length of the new array
    console.log(newArray);
    console.log(newArray.length);
    
    // print the output and length of the old countries array after the splice
    console.log(currentCountries);
    console.log(currentCountries.length);
} else {
    /* if the array has an odd number of items, let the first array be larger
    splice out the first half and push them to the new array
    */
    newArray.push(...currentCountries.splice(0, midCountry + 1));

    // print the output and length of the new array
    console.log(newArray);
    console.log(newArray.length);
    
    // print the output and length of the old countries array after the splice
    console.log(currentCountries);
    console.log(currentCountries.length);
}