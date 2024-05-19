// let date = new Date()
// let day = date.getDay()
// method-1
// if (day == 0) {
//     console.log("Sunday")
// } else if (day == 1) {
//     console.log("Monday")  
// } else if (day == 2) {
//     console.log("tuesday")
// } else if (day == 3) {
//     console.log("wednesday")  
// } else if (day == 4) {
//     console.log("thursday")
// } else if (day == 5) {
//     console.log("friday")  
// } else if (day == 6) {
//     console.log("saturday")
// } else  {
//     console.log("Invalid value!!")  
// }
// method-2
// switch (day) {
//     case 0:
//         console.log("Sunday")
//         break;
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("tuesday")
//         break;
//     case 3:
//         console.log("wednesday")
//         break;
//     case 4:
//         console.log("thursday")
//         break;
//     case 5:
//         console.log("friday")
//         break;
//     case 6:
//         console.log("saturday")
//         break;

//     default:
//         break;
// }


// while
// 1 - 10
console.log("_________________for loop_____________________")
for (let index = 1; index <= 10; index++) {
    console.log(index)
}
console.log("_________________while loop_____________________")

let index = 1;

while (index <= 10){

    console.log(index)
    index++
}

console.log("_________________do while loop_____________________")

let index2 = 1;

do {
    console.log(index2)
    index2++
}while (index2 <= 10)