// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/


const sumOfOdds = (min, max, step) => {
    let arr = [];
    for (let i = min; i <= max; i += step) {
        arr.push(i)
    }
    return arr
}


/* console.logs to test */
console.log(`Answer to Sum of Odds: ?`,sumOfOdds(5, 10));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For example arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

let arr1 = [1, 2, 3, 4]
let arr2 = [9, 8, 7, 5]

const arraySubtract = (arr1, arr2) => {
    const sum = [];
    for (let i = 0; i < arr1.length; i++) {
        //RETURNS ABSOLUTE VALUE REGARDLESS OF NEGATIVE NUM 
        const element = Math.abs((arr1[i] || 0) - (arr2[i] || 0))
        sum[i] = element
    }
    return sum
}

/* console.logs to test */
console.log(`Array Subtract Answer: `,arraySubtract(arr1, arr2));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

// let array3 = ["Rabbit", "Dog", "Cat"];
// let string1 = "Lion";
// let string2 = 'Tiger';

// const surroundArray = (array3, string1, string2) => {
//     const merge = 
// }

// /* console.logs to test */
// console.log(`Surround Array Answer`, surroundArray(array3, string1, string2));
console.log(`Answer to Surround Array: ?`);
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/


function findLongestWord(array) {
    var longestWord = "";
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
    return longestWord;
}
  const word = findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
  console.log(`Longest String Answer: `,word);

console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

const sToR = (text) => {
    //Cannot use replace 😮‍💨
}
/* console.logs to test */
console.log(`Answer to sToR: ?`,sToR('ABSORBED'));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

const divisibleBy4And7 = (num) => {
    if (num % 4 === 0 && num % 7 === 0) {
        return true
    } else {
        return false
    }
}

/* console.logs to test */
console.log(`Answer to is Divisible by 4 and 7: `,divisibleBy4And7(140));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

const exclamationAndQuestion = (str) => {
   const regexp = /\.*[?!].*/g;
   return regexp.test(str);
}

/* console.logs to test */
console.log(`Answer to exclaim and question: `,exclamationAndQuestion("Happy Birthday?!"));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/


// const countAB = (str) => {
//     let string = str.toLowerCase();
//     const counts = []
//     for (const char of string) {
//         counts[char] = counts[char]  ? counts[char] + 1 : 1;
//     }
//     return counts
// }

const countAB = (str) => {
    let a = [],
      b = [],
      arr = [...str],
      prev;
  
    arr.sort();
    for (let element of str) {
      if (element !== prev) {
        a.push(element);
        b.push(1);
      }
      else ++b[b.length - 1];
      prev = element;
    }
  
    return [a, b];
  }

/* console.logs to test */
console.log(`Count AB Answer: `,countAB("aabbbccdd"));
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(){

}

/* console.logs to test */
console.log(`Adds String If Last ?`);
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

// const twoSmallest = (arr) => {
//     smallest = numbers.sort((a, b) => {
//         return a - b;
//     })
// }

// let arr = [12, 13, 1, 10, 34]

// /* console.logs to test */
console.log(`Two Smallest Answer: ?`);
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

