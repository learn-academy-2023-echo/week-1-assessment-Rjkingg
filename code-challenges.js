// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: Function
//Input: number
//Output: string indicating tempterature is above, below or at boiling point
//Input: 42 , 350, 212
//Output: "42 is below boiling point" , "350 is above boiling point" , "212 is at boiling point"

//Process
//Create a function called boilingPoint that takes in a number called degrees. Pass arguments, 42, 350, 212 through function. 
//  If degrees is below boiling point return  "42 is below boiling point". If degrees is above boiling point, return  "350 is above boiling point". If degrees is at boiling point, return  "212 is at boiling point".    

const boilingPoint = (degrees) => {
    if (degrees === 42) {
    return "42 is below boiling point"
} 
else if (degrees === 350 ) {
    return "350 is above boiling point"
}
else (degrees === 212) 
    return "212 is at boiling point"
}
console.log(boilingPoint(42))
//output: "42 is below boiling point"

console.log(boilingPoint(350))
//output: "350 is above boiling point"

console.log(boilingPoint(212))
//output: "212 is at boiling point"

const temperature1 = 42
//output: "42 is below boiling point"
const temperature2 = 350
//output: "350 is above boiling point"
const temperature3 = 212
//output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: An array
//Input: 2 arrays:  const padres1984WorldSeriesRuns, const padres1998WorldSeriesRuns
//Output: A new array called const seriesRunsCombined with a length of 9

//Process
//Two arrays combined using .concat() method. Return the length of the array using the .length method 

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const seriesRunsCombined = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)

console.log(seriesRunsCombined)
//Actual output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: String
//Process: create a new variable called currentCohortSplit. using the .split() method will convert the string "Echo 2023" into an array of characters. The array of characters will be reversed using the .reverse() method and then using the .join() method, the string of letters will convert all values into a string
//Input: A string of characters 
//Output: A reversed string of characters

const currentCohort = "Echo 2023"
// Expected output: "3202 ohcE"
const currentCohortSplit = currentCohort.split("")
//console.log(currentCohortSplit)
// 'E', 'c', 'h','o', ' ', '2', '0', '2', '3'
console.log(currentCohortSplit.reverse().join(""))
//"3202 ohcE"
// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: 
// Process: using .lastIndexOf to return the last index of test variables. Declaring test variables with numberOfConnections and adding the value(s) 42, 10 to get an output of 7,8
//Input: 42, 10
//Output: 7, 8

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

//const givenValue1 = 42
const givenValue1 = numberOfConnections.lastIndexOf(42)
console.log(givenValue1)
// 7
// Expected output: 7

//const givenValue2 = 10
// Expected output: 8
const givenValue2 = numberOfConnections.lastIndexOf(10)
console.log(givenValue2)
// 8
// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: Both arrays have numbers randomly listed. I will console log each array, using the .sort method, which will list each number from smallest to largest. I will also use the .reverse method to reverse the order so that numbers are listed from greatest to smallest.
//Input: An array of numbers in random order
//Output: An array of numberslisted from largest to smallest

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
console.log(sanDiegoSummerTemperatures.sort().reverse())
//Actual output: [82, 80, 79, 77, 76, 73, 72]
const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
console.log(sanDiegoWinterTemperatures.sort().reverse())
//Actual output:[68, 67, 66, 66, 62, 59, 59]