

// Exercise 1
// 1 - Declare an empty array;
let myArray = [];


// 2 - Declare an array with more than 5 number of elements
let newArray = ["hello", "ginger", "nigeria", "javascript", "stunning", "developer", "actor"];
    console.log(newArray)


// 3 - Find the length of your array
console.log(newArray.length);


// 4 - Get the first element, the middle element and the last element of the array
let firstItem = newArray[0];
let middleItem = newArray[3];
let lastItem = newArray[6];

console.log(firstItem, middleItem, lastItem);


// 5 - Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["hello", 56, "nigeria", {description: "stunning"}, true, 300, [ "actor"]];

console.log(
    mixedDataTypes, mixedDataTypes.length
    );


//  6 - Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];


// 7 - Print the array using console.log()
console.log(itCompanies);


// 8 - Print the number of companies in the array
console.log(itCompanies.length);


// 9 - Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);


// 10 - Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);


// 11 - Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());


// 12 - Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// split the array into two to slice out amazon from the array
let companies = itCompanies.slice(0, itCompanies.length - 1)
let amazon = `${itCompanies.slice(6, itCompanies.length)}`

console.log(companies);
console.log(amazon);

// merge both arrays in the specified format using concat method and template literals
let merged = companies.concat(`and ${amazon} are big IT companies`)
console.log(merged)

// An alternative is to print the array in the specified format using template literals
console.log(
    `${companies.join(", ")} and ${amazon} are big IT companies`
    )


// 13 - Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// specify the string to be searched for
let check = "oracle"

/* convert the elements in the array to string and lowercase
add the include to check for the specified string
*/
let findCompany = itCompanies.toString().toLowerCase().includes(check);

// using ternary operators to confirm is the string is present in the array
findCompany == true
? console.log(`${check} exists in the array`)
: console.log(`${check} is not found in the array`);


// 14 - Filter out companies which have more than one 'o' without the filter method
// declare an empty array
let arr = []

/* determine the length of the array using the split method
push the elements that meet the specified conditions into the empty array
*/
if (itCompanies[0].split("o").length > 2) {
  arr.push(itCompanies[0])
}
if (itCompanies[1].split("o").length > 2) {
  arr.push(itCompanies[1])
}
if (itCompanies[2].split("o").length > 2) {
  arr.push(itCompanies[2])
}
if (itCompanies[3].split("o").length > 2) {
  arr.push(itCompanies[3])
}
if (itCompanies[4].split("o").length > 2) {
  arr.push(itCompanies[4])
}
if (itCompanies[5].split("o").length > 2) {
  arr.push(itCompanies[5])
}
if (itCompanies[6].split("o").length > 2) {
  arr.push(itCompanies[6])
}
console.log(arr)


// 15 - Sort the array using sort() method
let sorted = itCompanies.sort();
// the sort method sorts the items in the original array
console.log(itCompanies.sort());


// 16 - Reverse the array using reverse() method
// the reverse method reverses the order of items in the original array
let reversed = itCompanies.reverse();
console.log(reversed)


// 17 - Slice out the first 3 companies from the array
/* the array contains 7 elements
to extract the first 3, select index 0 as the starting position
specify 3 to extract the first 3 numbers
*/
let firstSlice = itCompanies.slice(0,3);
console.log(firstSlice);


// 18 - Slice out the last 3 companies from the array
/* the array contains 7 elements
to extract the last 3, select index 4 as the starting position
specifying the numbers of items to extract is not required
*/
let lastSlice = itCompanies.slice(-3);
console.log(lastSlice);


// 19 - Slice out the middle IT company or companies from the array
// index 3 is the starting position, and 4 is the element number to slice out
let midSlice = itCompanies.slice(3,4);
console.log(midSlice);


// 20 -Remove the first IT company from the array
/* 0 is the starting position, and 1 is the number of items to remove
the array now contains 6 items
*/
let remFirst = itCompanies.splice(0,1);
console.log(itCompanies);


// 21 - Remove the middle IT company or companies from the array
/*
the array now has a length of 6 so there are 2 items in the middle
2 is the starting position and 2 are the number of items to remove
*/
let remMid = itCompanies.splice(2,2);
console.log(itCompanies);


// 22 - Remove the last IT company from the array
/*
the array has a length of 4 now and the last element is to be removed
Used the array.length method to remove the last element in the array
*/
let remLast = itCompanies.splice(itCompanies.length - 1);
console.log(itCompanies);


// 23 - Remove all IT companies
// adding 0 to splice method removes all elements in the array
let remAll = itCompanies.splice(0);
console.log(itCompanies);