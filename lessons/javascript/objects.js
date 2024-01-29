// Saturday 11/11/2023
// Objects 

// Coding languages are always going to operate in an object oreantiated way. 
// An Objects is just better way of forming a variable. An object can hold multiple different types of information for a specific variable.

// Example 

/*
var name1 = "James"
var name2 = "Jane"

var age1 = 45
var age2 = 56
*/

// In this case we  respectively know that age 1 is for person 1 and age 2 is for person 2, but we dont know that. An object makes it easier to define. These are object below:

/*
const person1 = {
    name: "James",
    age: 45
}

const person2 = {
    name: "Jane",
    age: 56
}
*/

// Another way to write an object is through a constructor. A person constructor or an object constructor is a way of building a function to have all the necessary skeleton, we are then able to create people based on this skeleton. 

// Example 

// This is a basic object.
const person1 = {
    firstName: "John",
    lastName: "Smith", 
    dob: "11/11/2000",
    race: "Hispanic",
    age: 23

}
// We can use functions as a skeleton body for our objects.

function Car(name, model, type, colour, engineSize, drive){
    this.name = name
    this.model = model
    this.type = type
    this.colour = colour
    this.engineSize = engineSize
    this.drive = drive
    this.sales = function(){
        return this.name + " " + this.model + " FOR ONLY £15,000"
    }
}

let audiCar = new Car( "audi", "Q3", "Sline","Grey", 2.0, "4 wheel drive")
let bmw = new Car( "bmw", "150", "msport","white",2.0,"front wheel drive")

array = [audiCar, bmw]
console.log(array)

console.log( bmw.sales())

// Objects homework

