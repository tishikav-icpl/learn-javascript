
//create string
const name = "Tishika"
const repoCount = 50

//console.log(name+repoCount+"value") not valid 

console.log(`my name is ${name} and my repo count no is ${repoCount}`)

//using object create string 

const gameName = new String("Ishika-patel-21")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

//substring

const Newstring = gameName.substring(0, 3)  //nagative value not aalowed
console.log(Newstring)

const anotherstring = gameName.slice(-4,4) //nagative values allowed
console.log(anotherstring)

const newst = "      aws1    "
console.log(newst)
console.log(newst.trim())


const rep = "https://ishika@gmail.com//ishika%20patel"
console.log(rep.replace("%20" ,"_"))
console.log(rep.includes("ishika"))
console.log(rep.includes("abc"))
console.log(gameName.split("-"))