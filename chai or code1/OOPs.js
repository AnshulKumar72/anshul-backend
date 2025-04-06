/*
//JavaScript and classes

// OOP

 Object
->collection of properties and method
->toLowerCase


/*Why use OOP



// Parts of oop
//Object literal


->Constructor function
->Prototypes
->Classes
->Instance(new,this)

==========(4 pillars of oops)===============
->Abstraction
->Encapsulation
->Inheritance
->Polymorphism

*/

const user={
    username:"Anshul Kumar",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        // console.log(`Username:${this.username}`)
        // console.log(this)
    }
}
// console.log(user)
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)
// console.log(typeof(user)) //---->Type is object

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;


    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }
    return this;//here return is implicitly define in the function so we do not need to write this , it is our choice to write or not
}

const userOne=new User("Anshul",12,true)//when we use new keyword a new object create always which is called an ======instance===== and a constructor is called and all the variables inject inside in constructor 

const userTwo=new User("ChaiAurCode",11,false)
// console.log(userOne.constructor)//constructor is a refrence to itself
// console.log(userOne)
console.log(userTwo)//It overwrite the userOne

