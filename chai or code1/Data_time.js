let myDate=new Date()
// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.getTimezoneOffset())
// console.log(typeof(myDate))

let myCreateDate=new Date(2024,3,27,5,3)
// let myCreateDate=new Date("2024-04-27")//YY-MM-DD syntax of date
// let myCreateDate=new Date("04-27-2024")//MM-DD-YY
// console.log(myCreateDate.toDateString())
// console.log(myCreateDate.toLocaleString())

let myTimeStamp=Date.now()
 
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate=new Date();
// console.log(newDate)
// console.log(newDate.getTime())
// console.log(newDate.getFullYear())
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)
// console.log(newDate.getHours())

// `${newDate.getDate()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    
})

// console.log(newDate)