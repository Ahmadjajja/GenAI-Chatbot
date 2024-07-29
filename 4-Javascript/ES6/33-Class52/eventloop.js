// Is javascript single threaded or multiple threaded language?
// Ans: Single threaded


// Event Loop - single executor of the code

// Two things:
// 1. Call Stack


// |                   |
// |                   |
// |                   |
// |                   |
// |                   |
// |                   |
// |______main()_____________|



// 2. Callback Queue

let x = 2;
let y = 3;

setTimeout(() => {
    console.log(x, y);
}, 5000)

function sum(n1, n2) {
    return n1 + n2
}

console.log(sum(x, y));



// What's the heck is event loop? search on youtube (26 minutes video)