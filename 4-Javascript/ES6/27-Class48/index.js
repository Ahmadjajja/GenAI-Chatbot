// // // const sum = () => 2 + 2
// // // console.log(sum())

// // let person = {
// //     firstName: "Ali",
// //     secondName: "Ahmad",
// //     age: "22"
// // }

// // console.log(person)


// // person = {name: "hamza"}

// // console.log("person ", person)
// // delete person.age
// // console.log("person ", person)


// // map
// let arr = [2, 4, 6, 8, 10]

// let newArr = arr.map((element) => element * 2)
// // [4, 8, 12, 16, 20]
// console.log("newArr -> ", newArr)

// // foreach

// let arr3 = [2, 4, 6, 8, 10]

// arr.forEach((element) => console.log(element))

// console.log("newArr -> ", newArr)

// // filter

// let arr2 = [2, 4, 6, 8, 10]

// let newArr2 = arr2.filter((element) => element >= 4)
// // [4, 8, 12, 16, 20]
// console.log("newArr -> ", newArr2)



const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

const test1 = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}
const {brand, model} = test1
