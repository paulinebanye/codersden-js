// Exercise 2
/* 1 - Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

// prompt to enter a score
let score = prompt("Enter the student's score");

// assign grades based on the score
if (score >= 80)  {
    console.log(`Your score is ${score}, you got an A`);
} else if (score >= 70 && score <= 89) {
    console.log(`Your score is ${score}, you got an B`);
} else if (score >= 60 && score <= 69) {
    console.log(`Your score is ${score}, you got an C`);
} else if (score >= 50 && score <= 59) {
    console.log(`Your score is ${score}, you got an D`);
} else if (score >= 40 && score <= 49) {
    console.log(`Your score is ${score}, you got an E`);
} else {
    console.log(`Your score is ${score}, you got an F`);
}


/* 2 - Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

// prompt for and convert user input to lowercase
let inputMonth = prompt("What's the month today?");
let season = inputMonth.toLowerCase();

// check month based on user input and return the season
switch(season){
    case "september": 
    case "october": 
    case "november":
        console.log("The season is Autumn");
        break;
    case "december": 
    case "january": 
    case "february":
        console.log("The season is Winter");
        break;
    case "march": 
    case "april": 
    case "may":
        console.log("The season is Spring");
        break;
    case "june": 
    case "july": 
    case "august":
        console.log("The season is Summer");
        break;
    default:
        console.log(`${season} is not a month`);
  }


/* 3 - Check if a day is weekend day or a working day. Your script will take day as an input.
What is the day  today? Saturday
Saturday is a weekend.
What is the day today? saturDaY
Saturday is a weekend.
What is the day today? Friday
Friday is a working day.
What is the day today? FrIDAy
    Friday is a working day.
*/

// prompt for and convert user input to lowercase
let inputDay = prompt("What is the day today?")
let dayOfTheWeek = inputDay.toLowerCase();

// check day based on user input and return if the day is a work day or weekend
switch (dayOfTheWeek) {
    case 'monday': 
    case 'tuesday':  
    case 'wednesday': 
    case 'thursday': 
    case 'friday':
        console.log(`${dayOfTheWeek} is a working day`);
    break;
    case 'saturday': 
    case 'sunday':
        console.log(`${dayOfTheWeek} is a weekend`);
        break;
    default:
        // return this message if the day is not valid
        console.log(`${dayOfTheWeek} is not a weekday`);
}