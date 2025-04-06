//
// if(2!==2){
//     console.log("executed")
// }

// ===============

// const temperature=41;
// if(temperature<50){
//     console.log("Temp is less than 50");
// }
// else{
//     console.log("Temp is greater than 50")
// }

// ====================

// const score=200;
// if(score>100){
//     let power="fly";
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);


// let age=-9;
// if(age>=18){
//     console.log("You are eligible for vote");
// }
// else if(age>0 && age<18){
//     console.log("You are not elegibli for vote")
// }
// else{
//     console.log("You entered invalid age")
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Allow to loggedIn")
}