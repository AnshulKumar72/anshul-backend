// Iterations
// for loop
//=========Understanding of for loop 1============
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is the best number:");
//     }
//     console.log(element);
// }

//=========Understanding of for loop 2============

// for (let i = 0; i <=10 ; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`)
//         console.log(i + ' * ' + j + ' = ' +i * j);
        
//     }
// }

//=========Understanding of for loop 2============

// let myArray=['flash' ,'batman','superman'];
// console.log(myArray.length);
// for (let i = 0; i <myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
//     // console.log(myArray)
    
// }

//========key words for loop(break and continue)============

// -------Break-------
// for (let i = 0; i <=20; i++) {
//     if(i==5){
//         console.log(`Detected 5`)
//         break;
//     }
//     console.log(`value of i is ${i}`)
    
// }

// -------Continue-------

for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log(`Detected 5`)
        continue;
    }
    console.log(`value of i is ${i}`)
    
}