//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']
let colorCopy = faveColors.slice()
//console.log(colorCopy)
//"It's an older code sir, but it checks out."

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

colorCopy.push(`yellow`)
//console.log(colorCopy)
//"It's an older code sir, but it checks out."

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

middleNums = numbers.slice(1,4)
/*console.log(middleNums)
console.log(numbers)
"It's an older code sir, but it checks out."
*/

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]
let answers = []

for(i=0; i<bigOrSmallArray.length; i++){
  if(bigOrSmallArray[i]>100){
    answers.push("big")
  }else if(bigOrSmallArray[i]<=100){
    answers.push('small')
  }
}
/*console.log(answers)
"It's an older code sir, but it checks out."
*/
