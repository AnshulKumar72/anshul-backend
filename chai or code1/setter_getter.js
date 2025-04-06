// class User{
//     constructor(email,password){
//         this.email=password;
//         this.password=password;
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//         set email(value){
//             this._email=value
        
//     }
//     get password(){
//         return `${this._password}Hitesh`
//     }
//     set password(value){
//         this._password=value
//     }
// }

// const hitesh=new User("hitesh@.ai","abc")
// console.log(hitesh.password)
// console.log(hitesh.email)

//======(Old method)=======
// -->Properties based syntax

// function User(email,password){
//     this.email=email,
//     this.password=password,

//     Object.defineProperty(this,'email',{
//         get:function(){
//             return this._email.toUpperCase()
//         },
//         set:function(value){
//             this._email=value
//         }
//     })
//     Object.defineProperty(this,'password',{
//         get:function(){
//             return this._password.toUpperCase()
//         },
//         set:function(value){
//             this._password=value
//         }
//     })

// }

// // const chai=new User("anshul@gmail.com","chai");
// // console.log(chai.email);


// // Another way(Object based syntex)

// const User={
//     _email:"anshul@gmail.com",
//     _password:"abc",

//     //email
//     get email(){
//         return this._email.toUpperCase()
//     },
//     set email(value){
//         this._email=value
//     },

//     //password
//     get password(){
//      return this._password.toUpperCase()
//     },
//     set(value){
//     this._password.toUpperCase()
//     }
// }
// //factory function (object.create)
// const tea=Object.create(User)
// console.log(tea.email);
// console.log(tea.password)
