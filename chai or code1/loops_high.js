//for of loop
// ["" , "" , '']
// [{},{},{}]

// const arr=[1,2,3,4,5];
// for (const num of arr) {
//     console.log(num)
// }

// const greetings ="Hello World";
// for (const great of greetings) {
//     console.log(`Each character is ${great}`)
// }

//maps

// const map=new Map();
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('FR',"France")
// map.set('IN',"India")

// console.log(map)
//=====for-of loop to iterate the map key and values =====
// for (const [key,value] of map) {
//     console.log(key, ':-' ,value);
// }

//=====for-in loop to iterate the items of an object=====

// const myObject={
//     js:'javaScript',
//     cpp:'C++',
//     rb:'ruby',
//     swift:'swift by apple'
// }
// for (const key in myObject) {
//     // console.log(myObject[key]);
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }


//=====for-in loop to iterate the items of an array=====
//it gives keys

// const programming=["js","rb","py","java","cpp"]

// for (const key in programming) {
// //    console.log(key)//=>it will print only key
// console.log(programming[key])
// }


// for each loop

const coding=["js","ruby","java","python","cpp"]

//function
// coding.forEach(function (val) {
// console.log(val)
// })

//arrow function
// coding.forEach((item)=>{
//     console.log(item);
// })

//normal function

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//  console.log(item,index,arr)
// })

// const myCoding=[
//     {
//     languageName:"javaScript",
//     languageFileName:"js",
// },
//     {
//     languageName:"java",
//     languageFileName:"ja",
// },
//     {
//     languageName:"Python",
//     languageFileName:"py",
// },
//     {
//     languageName:"rubby",
//     languageFileName:"ru",
// },
// ]
// myCoding.forEach((item)=>{
//     // console.log(item.languageFileName)
//     console.log(item.languageName)
// })