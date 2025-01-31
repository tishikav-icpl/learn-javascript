let score = "33" 
console.log(typeof score) //string

//String to number
let convertnumber = Number(score)
console.log(convertnumber)
console.log(typeof convertnumber) //number

//using both number and string
let mix = "12abc" //null,undefine
console.log(mix)
console.log(typeof mix)

let convertmix = Number(mix)
console.log(convertmix) //Nan
console.log(typeof convertmix)

//Number to boolean
let b1 = 1
console.log(b1)
console.log(typeof b1)

let b2 = Boolean(b1)
console.log(b1)
console.log(typeof b2)

//Number to string
let s1 = 33
console.log(s1)
console.log(typeof s1)

let s2=String(s1)
console.log(s2)
console.log(typeof s2)

//****************************************************Operations**********************************************************/

console.log(2+2)
console.log(23*3)
console.log(4-2)
console.log(22/2)
console.log(220%2)

let v1="hello "
let v2="users"
let v3 =v1+v2
console.log(v3)


//wrong way
console.log("1"+2) //12
console.log(2+"1") //21
console.log("1"+2+2) //122
console.log(1+2+"2") //32

//right way
console.log((3+4)*5-2) 



console.log(true)
console.log(+true)
//console.log(true+)//error


//prefix and postfix
let gamecounter = 100
gamecounter++ //postincreement
console.log(gamecounter) //101
++gamecounter //preincrement
console.log(gamecounter)



//relational opetrators
console.log(2>9)
console.log(3<1)
console.log(2>=4)
console.log(2<=4)
console.log(2==2)
console.log(2**2)

console.log(null==0) //f
console.log(null>0) //f
console.log(null>=0) //t
console.log(undefined==0) //f
console.log(undefined>0) //f
console.log(undefined<0)//f