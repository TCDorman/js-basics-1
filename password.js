console.log(`Welcome to the password validator tool!`)
reader.question(`what is your password?`, function($answer))
 
const readline = require('readline');

const reader - readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question("please enter a password to validate" , functions(answer {
    if (answer.length >= 10 && answer.includes("1") && answer.includes("&")){
        console.log("success! your password is valid.")
    } else { 
        console.log("Error: your password must contain at least 10 characters and both of the following.")
        reader.close();
    }
})

reader.close
//for(let i = 0; i <= 10; i++){
    //if(`$answer < 10){
//         console.log(failure){
//         } else {
//             console.log(success)
//         }
//     }
// }