// There are three ways to to define variable such as var, let, and const.

// what is variable?
// Variable is just like container that can stores data of any type.

// How many types of data available?
// 1- Integer number       -> 1,
// 2- Floating number      -> 1.3
// 3- Character            -> 'a' or "a" or '5'
// 4- String               -> 'asdf' or "asdf" or '24352345'
// 5- Boolean              -> true or false
// 6- list -> a list of data that can contains all of above values in single
//            variable     -> [1, 3.2, 'a', false, 'string data', [], {}]
//         -> list type of data is called array
// 7- Object -> every entity in this world is called object such as person
//         -> person type data -> { name : "Ahmad", age : "22", speed = function{}}


// Keep in mind the difference b/w = and == and ===
// =    ->   It is called assignment operator that used to store value in variable.
// ==   ->   It is called comparison operator that used to compare value without caring about type.
//           for example :       5 == '5'  -> true (coz just compare values)
// ===  ->   It is also called comparison operator that used to compare value by keeping type in mind.
//           for example :       5 === '5'  -> false (coz just compare values & types)


// index = index + 1 
// index++

const n1 = 2;    
const n2 = 4;    

table(n1)

table(n2)

function table(num) {
    for (let index = 1; index <= 10; index++) {
    
        if (num * index != 10) {    
            console.log(`${num} * ${index} = ${num * index}`)
        }
    
    }
    
}










// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8

// 2 * 6 = 12
// 2 * 7 = 14
// 2 * 8 = 16
// 2 * 9 = 18
// 2 * 10= 20