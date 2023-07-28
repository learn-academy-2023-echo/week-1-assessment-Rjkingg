// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: 10 was in fact the correct answer because the .length property counts all of the characters in the string, including the space, starting from 1.

// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: "o" was correct because the [] gives us the index of a string and we start off with a zero index.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: "Ruby" was correct. We have an array of programming languages and the index starts at zero. We also have a variable named index and assigned it 1. When it is concole logged, the number 1 in brackets is called on tells the terminal to pull the first index, which is Ruby.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
 console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: My answer is incorrect because weekendDays.toUpperCase is not a function. .toUpperCase method can only be used on the string values.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// a) Your answer:Error 
// b) Verify and explain: I ran this and the output was "Number". typeof operator will show you what kind of data type. When we use the .length property, we will get a number, therefore, "number" as the correct output