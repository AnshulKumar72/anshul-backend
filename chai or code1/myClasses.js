//=====Class and object in js======
// class User{
//     constructor(username,email,password){
//      this.username=username;
//      this.email=email;
//      this.password=password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Anshul","anshul@gmail.com","123")
// console.log(chai)
// console.log(chai.encryptPassword())
// console.log(chai.changeusername())

//==Behind the scene==

// function User(username,email,password){
//      this.username=username;
//      this.email=email;
//      this.password=password;
// }

// User.prototype.encryptPassword=function(){
//     return `${this.password}abc`
// }

// User.prototype.changeusername=function(){
//     return `${this.username.toUpperCase()}abc`
// }
// const tea = new User("tea","tea@gmail.com","123")
// console.log(tea.encryptPassword())
// console.log(tea.changeusername())


//------------------Inheritance in javascript------------------

// class User{
//     constructor(username){
//         this.username=username
//     }
//     logMe(){
//         console.log(`USERNAME is ${this.username}`)
//     }
// }

// class Teacher extends User{
//     constructor(username,email,password){
//         super(username)
//         this.email=email;
//         this.password=password;
//     }
//     addCourse(){
//         console.log(`A new course was added by ${this.username}`)
//     }
// }

// const chai=new Teacher("chai","chai@gmail.com","123")
// chai.addCourse()

// chai.logMe()
// const masalaChai=new User("masalaChai")
// masalaChai.logMe()

// console.log(chai instanceof Teacher)
// console.log(chai instanceof User)


//*******Static keyword *******/
class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is:${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const hitesh=new User("Anshul")
console.log(hitesh.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

const iphone=new Teacher("iphone","i@gmail.com")
console.log(iphone.createId())