//Singleton

// Object.create  (it is the method to create the an object using constructor method)

//Object literals(It does not make the singleton)


const mySym=Symbol("key1");
const Jsuser={
    name:"Anshul",
    "full name":"Anshul kumar",
    [mySym]:"mykey1",
    age:40,
    id:"A2022CS8548",
    location:"Ghaziabad",
    email:"anshulaa5@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]

}

// console.log(Jsuser)
// console.log(Jsuser.email);
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])
// console.log(typeof Jsuser[mySym])


Jsuser.email='anshulak@gmail.com';
// Object.freeze(Jsuser)
// Jsuser.name= "Lalit"
Jsuser.email="Sachin@gmail.com";
// console.log(Jsuser)

Jsuser.greeting=function(){
    // console.log("Hello JS users")
}
Jsuser.greetingTwo=function(){
    // console.log(`Hello JS users, ${this.name}`)
}
// console.log(Jsuser.greeting())
// console.log(Jsuser.greetingTwo())