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
let year = new Date().getFullYear()

// calculation to check if the year is a leap year. Returns a boolean
let leapYear = ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
console.log(year, leapYear)


switch (daysInMonth) {
    // if month is september, april, june or november, assign 30 days
    case "september": 
    case "april": 
    case "june":
    case "november": 
        console.log(`There are 30 days in ${daysInMonth}`);
        break;
    case "february":
        // if leap year is true
        if (leapYear) {
            console.log(`There are 29 days in ${daysInMonth}`);
        } else {
            // if leap year is false
            console.log(`There are 28 days in ${daysInMonth}`);
        }
        break;
    // all other months
    case "october": 
    case "december": 
    case "january":
    case "march":
    case "may":         
    case "july":
    case "august":         
        console.log(`There are 31 days in ${daysInMonth}`);
        break;
    default:
        // if month is invalis
        console.log(`${daysInMonth} is not a valid month`);
    }