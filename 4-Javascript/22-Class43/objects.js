// let hostingPlans = {
//     basic: {
//         monthly: 3.99,
//         diskSpace: 100,
//         DataTransfer: 1000,
//         sitePages: 10
//     }, professional: {
//         monthly: 3.969,
//         diskSpace: 1070,
//         DataTransfer: 10800,
//         sitePages: 130
//     }, ultimate: {
//         monthly: 9.99,
//         diskSpace: 1000,
//         DataTransfer: 50000,
//         sitePages: 80
//     }
// }


var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    sum: function (n1, n2) {
        return n1 + n2
    }
};

// var plan2 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10
// };

// var plan3 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10
// };




function Plan(name, price, space, transfer, pages, sum) {
    this.name = name
    this.price = price 
    this.space = space
    this.transfer = transfer
    this.pages = pages
    this.sum = sum
}

let sum = function name(n1, n2) {
    return n1 + n2
}

let efficientPlan1 = new Plan("Basic", 3.99, 100, 1000, 10, sum)
// let efficientPlan2 = new Plan("Professional", 5.99, 1000, 10000, 30)
// let efficientPlan3 = new Plan("Ultimate", 8.99, 10000, 1000, 70)



console.log("plan1 -> ",  plan1.sum(5, 3));

console.log("efficientPlan1 -> ", efficientPlan1.sum(5, 3))



console.log(plan1)
delete plan1.name
console.log(plan1)
console.log("_______________")
console.log(efficientPlan1);
delete efficientPlan1.name
efficientPlan1.greet = "Hello Javed"
console.log(efficientPlan1);


console.log("price" in plan1);
console.log("name" in efficientPlan1);

console.log(plan1.hasOwnProperty("price"));
console.log(efficientPlan1.hasOwnProperty("name"));