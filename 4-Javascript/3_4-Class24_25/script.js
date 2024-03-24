// variables types
// integers, float, string, character, array, object, boolean


// function - It is just like a block of code that used to perform specific task

// let personsMoney = [100, 150, 200, 300, 4900000]
// console.log(personsMoney);    // [100, 150, 200, 300, 4900000]
// console.log(personsMoney[0]); // 100
// console.log(personsMoney[1]); // 150
// console.log(personsMoney[4]); // 4900000
// console.log(personsMoney.length); 

// console.log(personsMoney[personsMoney.length - 1]); // 4900000
// console.log(personsMoney[personsMoney.length - 3]); // 4900000



// given an array, we have to double every element of it
// input array -->    [1,  7,  54, 33, 2, 0, 2]
// array index         0,  1,   2,  3, 4, 5, 6
//                               |
//                               |
//                               |
// output array -->   [2, 14, 108, 66, 4, 0, 4]


function doubleShah(inputMoney) {

    for(let i = 0; i < inputMoney.length; i++){
        inputMoney[i] = inputMoney[i] * 2;
    }

    return inputMoney
}

let personsDoubledMoney1 = doubleShah([100, 150, 200, 300, 4900000])
let personsDoubledMoney2 = doubleShah([1,  7,  54, 33, 2, 0, 2])

console.log(personsDoubledMoney1);
console.log(personsDoubledMoney2);


// console.log("Amaar money: ", doubleShah(100))
// console.log("Afaaq money: ", doubleShah(150))
// console.log("Marsad money: ", doubleShah(200))
// console.log("Usman money: ", doubleShah(300))
// console.log("Ahmad money: ", doubleShah(4900000))



// Programming fundamentals
// 1- variables (let, var, const)
// 2- data types (integer, float, character, string, boolean, array, object, null, undefined)
// 3- Mathematical expression
// 4- operators (comparison, logical, increment/decrement, assignment, and mathematical operators)
// 5- conditional statements (if, if-else, if-else-if, ternary operator, switch case)
// 6- iterative statement - loops (while, do-while, for)







// let num = 5

// // if-else

// if (num < 10) {
//     console.log("smaller number than 10");
// } else {
//     console.log("greater number than 10");    
// }

// // ternary operator

// num < 10 ? console.log("smaller number than 10"): console.log("greater number than 10")
