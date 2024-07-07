// // Block-scoped variables that replace the old var keyword with let and const.
// // var vs let vs const

// // var - global scope
// // let - block scope
// // const - constant variable

// // Hoisting

// x = 10

// function func() {
//     x = 8;
//     console.log(x)
// }
// func()

// console.log(x)


// var x;


// // Shorter syntax for writing functions using Arrow functions.

// function func() {
//     return "hello"
// }
// console.log(func())

// let func2 = function () {
//     let x = 3
//     return x + 3
// }
// console.log(func2())

// // const func3 = () => {
// //     let x = 3
// //     return x + 3
// // }
// // console.log(func3())
// let f = () => {
//     let x = 3
//     return x + 3
// }
// console.log(f())

// // Improved syntax for creating strings with variables and expressions using Template literals.

// let firstName = "Javed"

// console.log("Hello Classfellows, " + firstName + " is a good boy.") // Hello Classfellows, Javed is a good boy.

// console.log(`Hello Classfellows, ${firstName} is a good boy.`)

// Syntax for extracting values from objects and arrays using Destructuring.

// Why destructuring? because it is efficient way to handle array & object

// let arr = [1, 2, 3, 5, 7, 4 , 8]

// let [n1, n2, n3, , n5, ...remainingElements] = arr

// console.log(n1)
// console.log(n2)
// console.log(n3)
// console.log(n5)
// console.log(remainingElements)


let person = {
    firstName: "Ali",
    age:'22',
    height: '5.9 feet',
    qualification: 'BSCS'
}


const {firstName: fName,height: hei, ...remaingAtt} = person
console.log(fName)
console.log(hei)
console.log(remaingAtt.age)