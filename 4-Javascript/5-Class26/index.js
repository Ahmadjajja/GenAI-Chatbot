let firstName = "ahmad"
let secondName ="sultan"


function greet(fName, sName) {
    return `Hello! ${fName} ${sName}` // Hello! Muhammad Javaid
}

for (let index = 0; index > -1; index++) {

    if (index == 4998) {
        console.log("continue statement just ran");
        // continue
    }

    console.log(greet(firstName, secondName));


    if (index == 5000) {
        break;
    }
}
