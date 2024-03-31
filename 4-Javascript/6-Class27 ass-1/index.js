// // Q1
// // 1. Write a js program to find the maximum between two numbers.

// let price1 = 10000
// let price2 = 5000

// // // through traditional if else if

// // if (price1 > price2) {
// //     console.log(`${price1} is greater than ${price2}`);
// // } else if(price1 < price2){
// //     console.log(`${price2} is greater than ${price1}`);
// // } else {
// //     console.log(`${price2} is equal to ${price1}`);
// // }

// // through ternary operator efficient way

// price1 > price2 ? console.log(`${price1} is greater than ${price2}`) : price1 < price2 ? console.log(`${price2} is greater than ${price1}`) : console.log(`${price2} is equal to ${price1}`)




// Leap year

let num = 2000

if(num % 4 == 0){
    if (num % 100 == 0) {
        if (num % 400 == 0) {
            console.log("Year is a leap year.");
        } else {
            console.log("Year is not a leap year.");
        }
    } else {
        console.log("Year is a leap year.");
    }

} else {
    console.log("Year is not a leap year.");
}