// Exercise 3
/* Write a program which tells the number of days in a month.
Enter a month: January
January has 31 days.
Enter a month: JANUARY
January has 31 day
Enter a month: February
February has 28 days.
Enter a month: FEbruary
February has 28 days.
*/

// prompt for & convert input to lowercase
let inputMonth = prompt("What's the month today?");
let daysInMonth = inputMonth.toLowerCase();

// return current year
let year = new Date();
console.log(year);

// calculation to check if the year is a leap year. Returns a boolean
let leapYear = ((0 == year % 4) && (0 != year % 100) || (0 == year % 400));

switch (daysInMonth) {
    // if month is september, april, june or november, assign 30 days
    case "september": 
    case "april": 
    case "june":
    case "november": 
        console.log(`${daysInMonth} has 30 days`);
        break;
    case "february":
        /* check if leapYear is true
        // if true, return february has 29 days else 28 days
        */
        leapYear
        ? console.log(`${daysInMonth} has 29 days`)
        : console.log(`${daysInMonth} has 28 days`);
        break;
    // all other months
    case "october": 
    case "december": 
    case "january":
    case "march":
    case "may":         
    case "july":
    case "august":         
        console.log(`${daysInMonth} has 31 days`);
        break;
    default:
        // if month is invalid
        console.log(`${daysInMonth} is not a valid month`);
    };