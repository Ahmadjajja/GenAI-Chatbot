// Variable
// Variable is just like container that can store values of multiple types.


// What are the types?

// 1- Number (Integer + Float) i.e: 1, 3.2
// 2- Character i.e: 'a', '1', "a"
// 3- String i.e: "asdf", "1243", 'asdf', '1234'
// 4- Boolean i.e: (False, True), (0, 1)
// 5- Object  i.e: {name: "pencil", price: "20 rupees", listData: [56, 'Ahmad'], personBrother: {name:"Ali"}}
// 5- List of data i.e: [1, 2.3, "Hello", 'a', [5, "world", {name: "pencil", color: "green"}]]
//                  is called in programming


// Ways to define variable in JS 
// Three ways: 
// 1- let - local scoping

// 2- var - global scoping

// 3- const

let num1;   // variable declaration
num1 = 40;

let num2 = 50;  // variable initialization
let sum;
sum = num1 + num2;
console.log("sum -> ", sum)


//       =(assignment operator)       ,          ==(value check)           ,         ===(value check + data type)

console.log("Hello")
if(num1 > 40 && num1 < 50)
{
    console.log("Number is between 40 and 50 is -> ", num1)
} else {
    console.log("num2 -> ", num2)
    console.log("num2 -> "+ num2)
    console.log(`num2 -> ${num2}`)
}



// Expression in programming
// We will discuss here two types of expressions
// 1- Mathematical expression -sum = num1 + num2 

// 2- Logical expression 

// a - and operator     &&
// true ==================  true && true 
// false ==================  false && true 
// false ==================  true && false 
// false ==================  false && false 

// b - or operator ||

// true ==================  true || true 
// true ==================  false || true 
// true ==================  true || false 
// false ==================  false || false 

// c - not operator
// true ==================  !false
// false ==================  !true