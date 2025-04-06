// const coding= ["js","ruby","java","python","cpp"];

// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(values)


//=============use of filter=============
// const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums=myNums.filter((num)=>{
//     return num>4
// })//filter return callback(It is important in filter to write the return )
// console.log(newNums)


//=============use of forEach Loop=============

// const newNums=[]
// myNums.forEach((num)=>{
//  if(num>4){
//     newNums.push(num)
//  }
// })
// console.log(newNums)

//----------This is the use of Filter---------------
//=====Books examples=====

// const books=[
//     {title:'Book One',genre:'Fiction',publish:1981,edition:2004},
//     {title:'Book Two',genre:'Non-Fiction',publish:1984,edition:2009},
//     {title:'Book Three',genre:'History',publish:1961,edition:2008},
//     {title:'Book Four',genre:'English',publish:1945,edition:2005},
//     {title:'Book Five',genre:'Maths 4',publish:1967,edition:2002},
//     {title:'Book Six',genre:'History',publish:1955,edition:1998},
//     {title:'Book Seven',genre:'TAFL',publish:1987,edition:2013},
//     {title:'Book Eight',genre:'COA',publish:1999,edition:2022},
//     {title:'Book Nine',genre:'OS',publish:1909,edition:2012},
//     {title:'Book Ten',genre:'Digital Electronics',publish:1989,edition:2018},
// ]

// let userBooks=books.filter((bk)=>bk.genre==='History')
// // const userBooks=books.filter((bk)=>bk.title=='Book Ten')
// userBooks=books.filter((bk)=> {return bk.publish>=1960 && bk.genre==='History'})
// // const userBooks=books;
// console.log(userBooks)

//----------This is the use of Map---------------

const myNumbers=[1,2,3,4,5,6,7,8,9,10];
// const newNums=myNumbers.map((num)=>{return num+10});//{} this is known as scope 

//=====Chaning ->In this we use two three method combine======

// const newNums=myNumbers
//               .map((num)=>num*10)
//               .map((num)=>num+1)
//               .filter((num)=>num>=61)
// console.log(newNums)


//======Reduce=========

// method 1

// const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// },0)
// console.log(myTotal)

// 2 nd method======Arrow function
const myNums=[1,2,3,4]
const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal)

// const array1=[1,2,3,4]
// const initialvalue=0;
// const sumWithInitial=array1.reduce((accumulator,currentvalue)=>accumulator+currentvalue,initialvalue)
// console.log(sumWithInitial)

//example of shipping cart
const shoppingCart=[
{
    itemName:"js course",
    price:2999
},
{
    itemName:"py course",
    price:999
},
{
    itemName:"mobile dev course",
    price:5999
},
{
    itemName:"data scientist course",
    price:12999
},
{
    itemName:"DSA course",
    price:4559
},
]

const priceTopay=shoppingCart.reduce((acc ,item)=>acc + item.price,0)
console.log(priceTopay)