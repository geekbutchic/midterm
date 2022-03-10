# Midterm

* Please include the correct number of parameters in each function!
* Make sure every function returns something
* You can console.log() the functions with test input to test your functions in the space provided
* Read each question carefully
* Good luck!

## Methods you might need
* .toLowerCase()
* .toUpperCase()
* .concat()
* .indexOf()
* .push()
* .unshift()

* You may NEED some of these at certain points, but definitely not all of them.
* You can use anything else we've formally covered.
* If we have not covered it, please ask to be sure that it's okay.

## Setup

* Fork
* Clone

## Tasks

* `sumOfOdds`
* Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
* This function is inclusive so please include your two parameters in your calculation.
* After summing the numbers, return the sum.
* You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
* Note: This problem should account for negative number input

* `arraySubtract`
  * Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
  * The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
  * For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length


* `surroundArray`
  * Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
  * Add the first string to the beginning of the array
  * Add the second string to the end of the array
  * Return the modified array

* `longestString`
  * Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
  * If there is nothing in the array, return an empty string ('')
  * You can assume that no two strings will have the same length in the array

* `sToR`
  * Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
  * If the letter in the original string is uppercase the letter in the output string should be as well
  * Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)

* `divisibleBy4And7`
  * Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
  * If it is not, return false.

* `exclamationAndQuestion`
  * Write a function exclamationAndQuestion that takes in a string
  * Return true if the string contains both an exclamation point (!) AND a question mark (?)
  * Return false if otherwise

* `countAB`
  * Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
  * No need to add the count of A and B together.  Again, we want an array with the separate counts of each
  * Your function should account for both cases (upper and lower) of each letter.

* `addStringIfLastS`
  * Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
  * Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
  * Finally, return your modified array.
  * Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']

* `twoSmallest`
  * Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
  * [smallestNumber, secondSmallestNumber]
  * If the array is shorter than length 2, return undefined to the user
  * You can assume that every number in the array will be unique


# midterm-2022
