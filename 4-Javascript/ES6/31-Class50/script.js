// Asynchronous JS

// 1. Concurrency
//              Doing multiple things at the same time.
// 2. Callbacks

// let func1 = () => {
//     console.log("Hello from function 1.")
// }

// let func2 = (function1) => {
//     console.log("Hello from function 2.")
//     function1()
// }
// func2(func1)


// // 3. Promises
// let promise = new Promise((resolve, reject) => {
//     let promiseContent = "I have submitted the fee"

//     if(promiseContent == "I have submitted the fee"){
//         resolve("Baith jao")
//     } else {
//         reject("Chly jao.")
//     }
// })

// promise
//     .then((res) => {
//         console.log("res: ", res)
//         throw "Bohat zyada nhin parhun ga"
//     })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log("err: ", err)
//     })







// 4. async / await
// 5. Event loop

//     |
//     |
//     |
//     |
//   |   |
//   |   |


// Exercise 13.2
let promise = new Promise((resolve, reject) => resolve("Start Counting"))

function counter(value) {
    console.log(value)
}

promise
    .then((res) => {
        counter(res)
        return "One"
    })
    .then((res) => {
        counter(res)
        return "Two"
    })
    .then((res) => {
        counter(res)
        return "Three"
    })
    .then((res) => {
        counter(res)
    })