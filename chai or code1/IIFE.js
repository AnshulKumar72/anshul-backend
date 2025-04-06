//============This is all about IIFE============

// function chai(){
//     console.log(`Db connected`)
// }
// chai()

// There are three method to declare the function and avoid the gloable pollution 
// we can also use this in arrow function and also in simple function but it is mendatory to write a ;(semi colon) it mean that the particular code terminate here

//This is first method
// (function chai(){
    //-----------this is name IIFE-----------
//     console.log(`Db connected`)
// })();


//This is second method 
//================This is unname IIFE()================
// ( ()=>{
//     console.log(`Db connected Two`)
// })();

// This is third method 

// ( function aurCode(){
//     console.log("Db connected three")
// })()

// Example:-

// ((name)=>{
//  console.log(`Db is connected again ${name}`)   
// })("Anshul");

