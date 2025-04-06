// const userEmail=" "

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't hava user email");
// }

//false:-          0 , -0 , BigInt 0, "" ,null , undefined , Nan
//truthy values:-  "0",'false'," " ,[ ], {} ,function()



//==================
// const userEmail=""
// // if(userEmail.length===0){
// //     console.log("Array is empty");
// // }

//==================
// const useremail={}
// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty")
// }



// ========================

// ++++++++(Nullish coalesing Operator)+++++++

let val1;
// val1=5 ?? 10;
// val1 =null ?? 10
// // val1=undefined?? 15
// val1=null?? 10??20
// console.log(val1);


//=======Terniary Operator========
// syntax
/*
condition ? false : true
*/

const iceTeaPrice=100;
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")