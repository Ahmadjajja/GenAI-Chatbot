// let randomNumber = Math.random()
// let num = parseInt((randomNumber * 5).toFixed(0)) + 1
// console.log(num);



let date = new Date()
date.setFullYear(2020)
date.setMonth(3)
console.log(date)
let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
console.log("Current day -> ", days[date.getDay()])