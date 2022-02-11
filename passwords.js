console.log("Welcome to the Password Validator tool")

const readline = require("readline")
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question("Please enter a password for me to... validate  ", function(input){

    if(input.length>=10){
        console.log("Well done, you may continue...")
    }else if(input.length<10){
        console.log("Oh no, your password is too short for me. Let's one with at least 10 characters next time.")
    }
})
//Attempt to check for numbers in password
//     for(var i=0; i<input.length; i++){
//         var char1 = input.charAt(i)
//         var cc = char1.charCodeAt(0)
//         if(input.length<10){
//             console.log("Oh no, your password is too short for me. Let's one with at least 10 characters next time."){
//                 return
//             }
//         }else if(input.length>=10 && cc>=0 && cc<=9){
//             console.log("Well done, you may continue...")(input.length<10)
//         }else{
//             console.log("Well it should also have at least a number in there too. ")
//         }
//     }
// })