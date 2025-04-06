function multiply(num){
    return num*5;
}
multiply.power=2;
// console.log(multiply(6))
// console.log(multiply.power)
// console.log(multiply.prototype)
// console.log(typeof(multiply))//--->It is  a function 

function createUser(userName,score){
   this.userName=userName;
   this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai=new createUser("Anshul",34)
const tea=new createUser("Anshul",250)

// chai.printMe()
// tea.printMe()


/*
Here's what happens behind the scenes when the new keyword is used:

😍A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked 😍: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The 😍 constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value if specified from the constructor , JavaScript assumes this, the newly created object, to be the intended return value.

The new 😍 object is returned:After the constructor functionn has been called , if it does't return a non-primitive value (object, array, functiion, etc.), the newly created object is retrned.
*/

//====(The better understanding of the prototype)======

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    spidermanPower: function(){
        console.log(`spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyHitesh=function(){
    console.log(`Hitesh says hello`)
}
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

//--------Inheritance-----
const user={
    name:"chai",
    email:"chai@gmail.com",
}
const teacher={
    makeVideo:true,
}
const TeacherSupport={
    isAvailable:false,
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeacherSupport,
}
// Teacher.__proto__=user

//Modern syntax approach
Object.setPrototypeOf(TeacherSupport,teacher)

let anotherUserName="ChaiAurCode      "

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`True length is:${this.trim().length}`)
}
anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()