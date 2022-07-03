// Exercise 3

/* 1 - Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 2012-01-02 07:05
*/ 

// declare date
const this_Year = new Date();

// assign variables for year, hour, mins, day and month
current_Year = this_Year.getFullYear();
let mins = this_Year.getMinutes();
let hour = this_Year.getHours();
let day = this_Year.getDate();
let month = this_Year.getMonth() + 1;

/*
return date and time in the format specified
add "00" and slice by -2 to adjust the formatting to two digits for date/time i.e 07 instead of 7
*/
let date = (
    `${current_Year}-${("00" + month).slice(-2)}-${("00" + day).slice(-2)} ${("00" + hour).slice(-2)}:${("00" + mins).slice(-2)}`
    );
console.log(date);