// // Generator Function


// // function* GeneratorFunction() {
    
// //     console.log("Start");
// //     yield 1
// //     console.log("Continue...");
// //     yield 2
// //     console.log("Continue...");
// //     yield 3
// //     console.log("Continue...");
// //     yield
// //     console.log("Continue...");
// //     yield 5
// //     console.log("Continue...");
// //     yield 6
// //     console.log("END");
// //     yield 7
    
// // }

// function* GeneratorFunction() {
    
//     let num = 0
//     while (true) {
//         yield num

//         num = num + 1
//     }
    
// }


// let generator = GeneratorFunction()

// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())


// Curying


function SUM3VALUE(a, b, c) {
    return a + b + c
}
console.log(SUM3VALUE(2, 4, 9))


function Sum3Value(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(Sum3Value(2)(4)(9))

