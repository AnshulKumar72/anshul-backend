//===============This is about the global and scope variable(L.C:-21)===============
// var c=30;

// let a=30;
// if(true){
//    let a=10;
//    const b=20;
//    var c=300;
//    console.log("Inner:",a)
// }
// console.log(c)
// const a=[1,2,3,4,5,6];
//  for(let i=0;i<=a.length;i++){
//      const element=array[i];
//  }

// console.log(a);
// console.log(b);
// console.log(c);

//===============This is about the Scope level and Mini hoisting in JS(L.C:-22)===============

// function one(){
//     const username="Hitesh";

//     function two(){
//         const website="youtube";
//         console.log(username);
//         console.log(website);
//     }
//     two();
// }
// one();


//-------------This is the nested function to understand the full knowledge of the scope of variables-------------

// function name1(){
//     console.log("Anshul")

//     function name2(){
//         console.log("Hitesh")

//         function name3(){
//             console.log("Sachin")
//         }
//         name3()
//     }
//     // name2()
// }
// name1()

// if(true){
//     const username="Hitesh";
//     if(username==="Hitesh"){
//         const website="youtube"
//         console.log(username + website)
//         console.log(typeof(username))
//         console.log(website)
//     }
//     console.log(username)//out of scope 
// }

//==========Very interesting ans important concept ===========

// console.log(addone(5));
// function addone(num){
//     return num+1;
// }

// console.log(addTwo(5))
const addTwo=function (num){
    return num+2;
}