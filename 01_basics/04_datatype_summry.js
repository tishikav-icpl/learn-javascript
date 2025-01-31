
//Primitive datatype

//String,Number,Boolean,null,undefined,Symbol,BigInt

// const score =100 //Number
// const s1 = 100.2 //Number
// const isloggedIn = false 

// const bignumber = 12233444555877889n
// ///const bignumber = 12233444555877889n
// console.log(typeof bignumber)

// const id = Symbol(123)
// const id2=Symbol(123)
// console.log(id===id2)

//javascript is a dynamically typed language 


//Reference(Non primitive)

//Array,Object,Function

// const a1 =["a","b","c","d"] //Array

// //object
// let myobj ={
//     name:"Aayushi",
//     age:21, 
// }

///function

// const myfunction=function(){
//     console.log("Hello uusers!!")
// }

// console.log(typeof a1)
// console.log(typeof myobj)
// console.log(typeof myfunction)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*There are two types of Memory 

1.Stack  Primitive datatype--copy
2.Heap   Non Primitive datatype --oroginal value

*/

//Stack Memory
let st1 = "mystackmemory"
let st2 = st1
st2 = "copystackmemory"
console.log(st1) //mystackmemory
console.log(st2) //copystackmemory

//Heap Memory

let user1={

    email:"Pateltish21@gmail.com",
    upi:"user@123"
}

let user2=user1
user2.email="pateltishika21@gmail.com"
console.log(user1) //"pateltishika21@gmail.com"
console.log(user2) //"pateltishika21@gmail.com"