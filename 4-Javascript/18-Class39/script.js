// // get element by id

// document.getElementById("p1").style.backgroundColor = "green"
// document.getElementById("p1").style.color = "black"


// let colors = ["", "green", "blue", "yellow", "navy"]
// let backgroundColors = ["white", "purple", "aqua", "orange", "pink"]

// function changeTheme() {

//     document.getElementById("p1").style.backgroundColor = backgroundColors[Math.floor(Math.random() * 5)]
//     document.getElementById("p1").style.color = colors[Math.floor(Math.random() * 5)]

// }
// ------------------------------------------------------------------

// document.getElementById("p1").style.backgroundColor = "green"
// document.getElementById("p1").style.color = "black"


// let colors = ["red", "green", "blue", "yellow", "navy"]
// let backgroundColors = ["white", "purple", "aqua", "orange", "pink"]
// let counter = 0

// function changeTheme() {

//     document.getElementById("p1").style.backgroundColor = backgroundColors[counter]
//     document.getElementById("p1").style.color = colors[counter]
//     counter++
//     counter = counter % 5
//     console.log("counter : ", counter)

// }

// ----------------------------------------------------------------------

// // get element by tag name

// console.log(document.getElementsByTagName("p"))
// console.log(document.getElementsByTagName("p")[1])

// --------------------------------------------------------------------------

// // get element by class name

// console.log(document.getElementsByClassName("paragraphs"))
// console.log(document.getElementsByClassName("paragraphs")[1])

// --------------------------------------------------------------------------

console.log(document.getElementById("p1"))

document.getElementById("p1").className += " pGroup1"

console.log(document.getElementById("p1"))