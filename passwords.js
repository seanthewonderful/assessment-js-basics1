console.log("Welcome to the Password Validator tool")

const readline = require("readline")
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question("Please enter a password for me to... validate", function(input){
    inputArr = input.split(` `)
    console.log(inputArr)
    console.log(inputArr[1])
})