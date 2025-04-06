/*
//=====Creation promises=======
const promiseOne=new Promise(function(resolve,reject){
    // Do an async task
    // DB calls , cryptography ,network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})


//=====Other way of promises=====

new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async task 2");
    resolve();
},1000);
}).then(function(){
    console.log("Async 2 resolved")
})


//===thied promise====

const promiseThree=new Promise(function(resolve,reject){
      setTimeout(function() {
    resolve({username:"Chai",email:"chai@exam.com"})    
      }, 1000);
})

promiseThree.then(function(user){
     console.log(user)
})

//=====fourth promise========

const promiseFour=new Promise(function(resolve,reject){
      setTimeout(function(){
        let error=true;
        // let error=false;
        if(!error){
            resolve({username:"Anshul", email:"anshul@gmail.com",password:"haianshul"})
        }
        else{
            reject('Error: Somthing went wrong')
        }
      }, 1000); 
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The promise is either resolved or rejected"))


//====promise five======

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        // let error=false;
        if(!error){
            resolve({username:"Sachin",email:"sachin@gmail.com"})
        }
        else{
            reject('Error:Somthing went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
  try{
    const response=await promiseFive
    console.log(response)
  }
  catch(error){
    console.log(error)
  }
}

consumePromiseFive();

//======Behind the sceen(in next lecture)======
// =====using try and catch method=======

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//     const data=await response.json()
//     console.log(data)
//     }
//     catch(error){
//     console.log("E: ",error);
//     }
// }

// getAllUsers()


//=====same code using then and catch method=======

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
    console.log(error)
})
    */