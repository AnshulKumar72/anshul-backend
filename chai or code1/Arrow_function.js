const user={
    username:"Hitesh",
    price:999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//         let username="Anshul"
//         console.log(this.username)
//     }
//     chai()


    //================ Arrow function ================

    const chai = ()=>{
        let username="Anshul";
        // console.log(this.username)
    }
    chai()

//     const addTwo=(num1,num2)=>{
//       return num1+num2;
//     }
//    console.log(addTwo(3,6))

   //implicit return of a arrow function

//    const addTwo=(num1,num2)=> num1+num2
//    const addTwo=(num1,num2)=> (num1+num2)


//    const addTwo=(num1,num2)=> ({username:"anshul"})

//    console.log(addTwo(3,3))

//    const myarray=[1,2,3,4,5]

// myarray.forEach