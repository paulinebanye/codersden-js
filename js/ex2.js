// Exercise: Level 2
/* 1 - Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.*/
let quote = "The quote 'There is no exercise better for the heart\
 than reaching down and lifting people up.'\
 by John Holmes teaches us to help one another."

console.log(quote)


// 2 - Using console.log() print out the following quote by Mother Teresa:
/*"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."*/
const teresa = "Love is not patronizing and charity isn't about pity, it is about love.\
 Charity and love are the same -- with charity you give love,\
 so don't just give money but reach out your hand instead."

console.log(teresa)


// 3 - Check if typeof '10' is exactly equal to 10. If not make it exactly equal. //qstn regarding clarification about the task
// comparing type and values
if (typeof('10') === 10) {
    // if they aren't exactly equal
    console.log(
        `${typeof('10') === (10)}: typeof'10' is not exactly equal to 10`
        )

    console.log(
        `${typeof('10') === typeof(10)}: typeof'10' is not exactly equal to 10`
        )

    console.log(
        `${'10' === 10}: typeof '10' is not exactly equal to 10`
        )
}
else {
    /* To make them exactly equal
    convert '10' to a number
    compare typeof after conversion
    compare after conversion
    */
    console.log(
        `${(typeof(10) === typeof(Number('10')))}: typeof '10' is exactly equal to 10`
        )

    console.log(
        `${(10 === Number('10'))}: typeof '10' is exactly equal to 10`
        )
}


// 4 - Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10. qstn
// using if/else
if (parseFloat('9.8') === 10) {
    // if they aren't exactly equal
    console.log(
        `${(10 === parseFloat('9.8'))}: parseFloat('9.8') is not exactly equal to 10`
        )
}
else {
    /* To make them exactly equal
    convert parseFloat('9.8') to a number
    round up the float using Math.round or Math.ceil
    compare after conversion
    */
    console.log(
        `${(10 === Number(Math.ceil(parseFloat('9.8'))))}: parseFloat('9.8') is exactly equal to 10`
        )
    console.log(
        `${(10 === Number(Math.round(parseFloat('9.8'))))}: parseFloat('9.8') is exactly equal to 10`
        )
}

// uring ternary operators
parseFloat('9.8') === 10
    // if they aren't exactly equal
    ? console.log(
        `${(10 === parseFloat('9.8'))}: parseFloat('9.8') is not exactly equal to 10`
        )

    /* To make them exactly equal
    convert parseFloat('9.8') to a number
    round up the float using Math.round
    compare after conversion
    */
    : console.log(
        `${(10 === Number(Math.round(parseFloat('9.8'))))}: parseFloat('9.8') is exactly equal to 10`
        )


// 5 -  Check if 'on' is found in both python and jargon
console.log("python".includes('on') && "jargon".includes('on'))


// 6 - I hope this course is not full of jargon. Check if jargon is in the sentence.
sentence = "I hope this course is not full of jargon"
console.log(sentence.includes("jargon"))


// 7 - Generate a random number between 0 and 100 inclusively.
console.log(Math.round(Math.random() * 100))


// 8 - Generate a random number between 50 and 100 inclusively.
console.log(Math.round(Math.random() * 50) + 50)


// 9 - Generate a random number between 0 and 255 inclusively.
console.log(Math.round(Math.random() * 255))


// 10 - Access the 'JavaScript' string characters using a random number.
console.log('JavaScript'[Math.floor(Math.random() * 'JavaScript'.length -1)]);


// 11 - Use console.log() and escape characters to print the following pattern.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')


// 12 - Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction' qstn
let sentence_12 = 'You cannot end a sentence with because because because is a conjunction'

/* extracted because because because from the sentence
used substr to extract the sentences by selecting the starting point index
and the number of characters after
*/
console.log(sentence_12.substr(31,24))

/* removing because because because from the sentence
used substr to extract the separated sentences by selecting the starting point index
and the number of characters after
used concat to merge the separated sentences together
*/
console.log(sentence_12.substr(0,30).concat( sentence_12.substr(54,17)))
