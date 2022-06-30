// Exercise: Level 3

/* 1 - 'Love is the best thing in this world. 
Some found their love and some are still looking for their love.' 
Count the number of word love in this sentence.
*/
let ex1_text = "Love is the best thing in this world. Some found their love and some are still looking for their love."

// use g to search the whole text and i to ignore case
console.log(ex1_text.match(/love/gi))


/* 2 - Use match() to count the number of all because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'
*/
let ex2_text = 'You cannot end a sentence with because because because is a conjunction'

// use g to search the whole text and i to ignore case
console.log(ex2_text.match(/because/gi))


/* 3 - Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
*/
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

/* 
first remove the invalid characters by using replace
use regular expressions to declare the invalid characters
use g to search the whole sentence
use i to ignore case
then split the words into an array at the spaces
*/
sentence = passage
let cleaned = passage.replace(/[$%@;&#!,.?]/gi, "").split(" ")
console.log(cleaned)

// declare empty dictionary to hold the words
let appearance = {}
// declare variable for maximum count
let count = 0
// declare cariable for the word with the maximum count
let maxWord = ""

// loop over all the words in the array
for (let word of cleaned) {
    if (appearance[word]) {
        // if a unique word is already in the array, increment it by 1
        appearance[word]++
        // if a word occurs more than the maximum count
        if (appearance[word] > count) {
            // count the number of times the word appears
            count = appearance[word]
            // return the word that has the highest count
            maxWord = word
        }
    } 
    else {
        // if a unique word is not in the array, add it to the array
        appearance[word] = 1
    }
}
console.log(appearance);
console.log(maxWord)


/* 4 - Calculate the total annual income of the person by extracting the numbers from the following text. 
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/

// option-1: 
// assign variable to the sentence
let ex4_text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// extract all the numbers from the text into an array
let num_arr = ex4_text.match(/\d+/g)

/* convert from string int to numbers 
calculate 
*/
let annual_bonus = Number(num_arr[1])
let monthly_income = (
    Number(Math.max(num_arr[0])) + Number(Math.min(num_arr[2]))
    ) * 12

// calculate annual income
annual_income = annual_bonus + monthly_income
console.log(annual_income)

/* option-2: calculate annual income in one line
To get yearly income, sum monthly salary and income from online courses then multiply by 12
add the yearly earning with annual bonus
*/
console.log(
    Number(num_arr[1]) + ((Number(Math.max(num_arr[0])) + Number(Math.min(num_arr[2]))) * 12)
    )