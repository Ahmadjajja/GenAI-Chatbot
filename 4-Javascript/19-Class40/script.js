// // in-efficient approach

// let doc = document.childNodes
// console.log(doc[1].childNodes[2].childNodes[1].childNodes[8].nodeType)
// doc[1].childNodes[2].childNodes[5].childNodes[3].style.color = "red"
// console.log(doc[1].childNodes[2].childNodes[5].childNodes[3])


// // efficient approach

// let elementCounter = 0
// for (let index = 0; index < document.getElementById("div1").childNodes.length; index++) {
//     if (document.getElementById("div1").childNodes[index].nodeType == 1) {
//         elementCounter++
//     }
    
//     if (elementCounter == 2) {
//         document.getElementById("div1").childNodes[index].style.color = "green"
//         break
//     }
// }


// var parent = document.getElementById("div1");
// var target = parent.firstChild.nextSibling;
// console.log(target)

// var nTextContent = target.nodeName;
// console.log(nTextContent)
