// string concatenation 
// string interpolation 
// = vs == vs === / 1 == "1" || 1 === "1"
// && vs || 

let myName = "Asia"

//console.log("Hello" + "Welcome") = HelloWelcome with no gaps, to add a gap you put a space at the end of "hello" or the beginning of "welcome". This is called string concatenation//

console.log("Hello" + " welcome" + " to" + " Lesson 2")

console.log("---------------")

console.log("Hello" + "My name is " + myName)
// using variables and string concatenation together 

var welcomeMessage = "Hello welcome to lesson 2"
console.log("-------------")
console.log(welcomeMessage + " " + myName)
// using an empty string concatenation to mimic a space between two variables

// " " or ' ' are the same 
// ` ` is used in string interpolation which is used to join multiple variables together without using + and empty string concatentations.

console.log("------------------")
console.log( `hello my name is ${myName}`)

const firstName = "asia"
const lastName = "Smith"
let age = 35
const dob = "02/03/1988"

console.log("----------------")
console.log(welcomeMessage + " " + firstName + " " + "Give us an intro; " + "Hello my name is " + firstName +  " " + lastName + " I am " + age + " " + " years old, Born on " + dob  )
// This is a sentence written using string concatentations 

console.log( `${welcomeMessage} ${firstName} Give us an intro; Hello my name is ${firstName} ${lastName} I am ${age} years old, Born on ${dob}`)
console.log( "-------------------------")
// This is a sentence written using string interpolation. String interpolation is easier to write in ans saves time, all you have to do is add the variables and the writting togther using ``, whereas in string concatenation each variable and space and words must be seperated using "" and '' 

//----------------------------------------------

// a single = is used only for assigment of objects/Variables. e.g let name = "Asia"
// A double == loosely translates to if i compare the two are they equal to eachother, used in comparison. E.g if i input console.log(firstName == lastName ), i will get a false because john does not equal to smith 
// A triple === strictly translates, if the two components being compared are not the exact same value/data-type, the computer will give you a false. E.g Console.log( 1 == "1") will giev you a true beacause theyre a both 1. But Console.log(1 === "1") will give you a false because 1 is a number whilest "1" is a string 1.

// && (AND) both components have to be done for it to be true
// || (OR) only one component has to be done for it to be true 


// Conditional Statments ---> 
/*

if() { (also known as the tue execution line)
    execute  this line 
} else { (also known as the false execution line)
    execute this line 
}
or 
if()(

) else if (){ (multiple else if statments can either be 1 or 100, used to filter )

} else if (){

}else {

}

*/
// Example bellow 


if (firstName === "John" && lastName === "smith"){
    console.log( "Welcome back " + firstName)
} else {
    console.log( "Sorry i do not recognise you")
}
console.log( "-----------------")

//Example 2 using an else if statment 

if (firstName === "Asia" || firstName === "asia" ){
    console.log( "Oh i know you, Welcome back" + firstName)
}else if (firstName){
    console.log( "Welcome back " + firstName)
} else {
    console.log( "Sorry i do not recognise you")
}