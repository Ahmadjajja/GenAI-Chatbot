// 1. Concurrency
// 2. Callbacks
// 3. Promises
// // 4. async / await

// let saysomething = (n1) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("something"+ n1)
//         }, 2000)
//     })
// }


// let talk = async (n2) => {
//     let promise = await saysomething(n2)
//     console.log(promise)
// }

// talk(2)
// talk(4)
// talk(6)
// Exercise     13.3

let counter = 0;

function func1(n1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            resolve([counter, n1])
        }, 1000)
    })
}

let func2 = async (n2) => {
    console.log(counter)
    console.log(n2)

    let promise = await func1(n2);
    console.log(promise)
}


for (let index = 1; index <= 10; index++) {
    func2(index)
}



// 5. Event loop
