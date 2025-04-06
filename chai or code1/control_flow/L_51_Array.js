// const myArray=[]
// %DebugPrint(myArray)

//Type of array
//-->continuous(packed array) array 
//-->holey array

//SMI (small integer)
//Packed element
//Double(float,string,function)

const arrTwo=[1,2,3,4,5];
//Packed_SMI_ELEMENTS

arrTwo.push(6.0)   //====>if we downgrade the value once we can not upgrade the value again.
//PACKED_DOUBLE_ELEMENTS
arrTwo.push('7')

arrTwo.push[10]=11;
//This is a holey array
//HOLEY_SMI_ELEMENTS
console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9])


//Bound check in array
//hasOwnProperty(arrtwo.prototype,10)
//hasOwnProperty(Object.prototype,10)

//holes are very expensive in js


const arrThree=[1,2,3,4,5]
console.log(arrThree[2])

//SMI>DOUBLE>PACKED
//H_SMI>H_DOUBLE>H_PACKED

const arrFour=new Array(3)
//just 3 holes.HOLEY_SMI_ELEMENTS
arrFour[0]='1';//HOLEY_ELEMENTS
arrFour[1]='2';//HOLEY_ELEMENTS
arrFour[2]='3';//HOLEY_ELEMENTS

const arrFive=[]
arrFive.push('1')//it is the packed array

const arrSix=[1,2,3,4,5]
arrSix.push(Infinity)

//for ,for-of,foreach