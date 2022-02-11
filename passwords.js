console.log("Welcome to the Password Validator tool")

const readline = require("readline")
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question("Please enter a password for me to... validate  ", function(input){
//   console.log(input.length)
    if(input.length>=10){
        console.log("Well done, you may continue...")
    }else if(input.length<10){
        console.log("Oh no, your password is too short for me. Let's one with at least 10 characters next time.")
    }
})