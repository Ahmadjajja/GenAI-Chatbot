// There two paradigm in programming:
// 1. Procedural Programming
// 2. Object oriented programming

// OOP: javascript is not pure object oriented programming language.
// Two concepts are very important in OOP: Classes & Objects


class Student{
    constructor(name, age, dob){ // It is a special type of function that automatically calls when new object being created.
        this.name = name // data member
        this.age = age  
        this.dob = dob
    }

    display(){ // member function
        console.log(this.name, this.age, this.dob)
    }

}


let student1 = new Student("Javed Sahib", 33, 1990)
let student2 = new Student("Ammar", 19, 2004)


console.log("student1 : ", student1)
student1.display()
console.log("student2 : ", student2)
student2.display()





