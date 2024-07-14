// // Asynchronous js
// // 1. Concurrency

// console.log("Hello Everyone! before")
// console.log("Hello Everyone! before")
// console.log("Hello Everyone! before")
// setTimeout(() => console.log("Hello Everyone! middle"), 5000)
// console.log("Hello Everyone! after")
// console.log("Hello Everyone! after")
// console.log("Hello Everyone! after")

// 2. Callback
function judge(grade) {
    switch (true) {
        case grade == "A":
            console.log(`Ahmad got ${grade} grade`)
            break;
        case grade == "B":
            console.log(`Ahmad got ${grade} grade`)
            break;
        case grade == "C":
            console.log(`Ahmad got ${grade} grade`)
            break;

        default:
            console.log(`Ahmad is failed.`)
            break;
    }
}

function gradeCalculator(marks, callback) {
    switch (true) {
        case marks > 80:
            callback("A")
            break;
        case marks > 60:
            callback("B")
            break;
        case marks > 40:
            callback("C")
            break;

        default:
            callback("F")
            break;
    }
}

gradeCalculator(68, judge)



// 3. Promises
// 4. Async & Await
// 5. Event Loop - this is most important