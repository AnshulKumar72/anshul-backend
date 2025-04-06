function saymyname(){
    console.log("A")
    console.log("n")
    console.log("s")
    console.log("h")
    console.log("u")
    console.log("l")
}

// call the function
// console.log(typeof(saymyname))
// saymyname()

//+++++  WAP to Add to numbers  ++++++++

// function addToNumbers(num1,num2){
//    console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){
    /*
//    result=num1+num2;
// //    console.log("Hitesh")

//    return result;
//    console.log("Hitesh")//=====after the return statement nothing to be execute
*/

return num1+num2;
}
// const result=addTwoNumbers(5,6)

// console.log("Result:",result)


function loginUserMessage(username="sam"){
    if(!username){
    // if(username===undefined){
        // console.log("Please enter the valid username");
        return
    }
return `${username} just logged in`;
}
// console.log(loginUserMessage(" "))


// function add(num1,num2){
//     return num1+num2;
// console.log(num1+num2);
// }
// add(4,4)
// const result1=add(4,5);
// console.log(result1)