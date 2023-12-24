// Saturday 04/11/2023
// Functions
// Return statments ß
// Function parameters & arguments ß
// Calling on functions ß
// Purpose of functions ß

// A function is a block that is essentially re-used whenever necessary. It can be anything as simple as console.log("Hello world") to an error screen console.log

// The idea of a function is to extract a block of code that is re-used multiple times and place it into its own re-usable block and then when we need to use it in tthe script we just call on that re-usable block as many time as we want.

//  A Function is written out as;-
/*function functionName(){
}*/

function errorMessage3(){
    console.log(" this is an ERROR message")
}

// The above function is now going to be written instead of  a console.log, eveytime we need that block of code. 

//However, if was to run the code right now , the error message would not come up because a function is a private statment. It can not run unless you specify you want to run the function. 

// The difference between a function and a conditianal statment or a variable is that the function is a private statment and needs to be called upon fir it to be executed. The variable however will be executed as soon as it is written into the script.

let myName = "asia"

function errorMessage(errortype){
    console.log("ERROR " + errortype )
}
function name(){
    console.log("james")
}
name()
console.log(myName)

errorMessage()

// Both the myName variables were able to be printed out because the const myName is public and the var myName is private, so they do not clash.

// A function parameter goes inebtween the (), there can either be one or multiple parameters that are seperated by a ,.

if( typeof name === "string" && (name.length<15)){
    if( name.toLowerCase() === "john"){
        console.log( "Welcome back John")
    } else{
        console.log( "Sorry, I do not recognise you")
    }
}else{
    errorMessage()
}

if( typeof age === "number" && (age>=7 && age<=100)){
    if ( age>=25 ){
        console.log("Higher education is an option")
    } else{
        console.log( "Go study")
    }
} else{
    errorMessage()
}

if( typeof age === "number"){
    if(age === 60 ){
        console.log( "Only 7 more years to go")
    } else if(age >= 67 && (age<70)){
        console.log("Time to retire")
    }else if (age >=70){
        console.log( "Enjoying my time off")
    }
    else {
        console.log( "Need to work")
    }
}else{
   errorMessage()
}
console.log("---------------")
// instead of re-writing console.log("error") repeatedly, we create a function containing the error message and just use that when needed

// "Return" is used to the function accessible, so that it can be used by the rest of the script. Also works as a break. Anything after the retun statment is not printed.

function errorMessage2(){
    var someOne = "john"
    return someOne
}
errorMessage2()
console.log(errorMessage2())

myName = errorMessage2();
console.log(myName)
console.log("-------------")
// myName = errorMessage2 = someOne = "john" => return someOne to be accessible to the rest of the code utisde the private function. 
// myName = "john"

// A paramter is taken on by a function as an argument, this parametr can be anything you like. It can be a different function, a string or a bolean. 

function addition2(num7,num8,randomNumber){
console.log(num7+num8)
console.log(randomNumber)
}
// An argument is what is inside a paramter.An arguments is specific, whilest a parameter is generic. In the example below 2 is in the paramter num1 and 3 is in the parameter num2. If there is more arguments than parameters it wont make a difference because that argument will be undefined. If add another parameter but dont add it to the first two parameters it will be printed out seperatly. Arguments are only used if there are parameters available.

addition2(2,3,150.5)
console.log("----------------")

var operation = "addition"
var num1 = 25
var num2 = 39

function addition(a,b){
    console.log(a+b)
}
if( operation === "addition"){
    addition(num1,num2)
}else{
    errorMessage( "Sorry, o not recognise operation")
}

console.log("---------------")

var firstName = "john"
var name = "john"

function checkName(param){
    let ans = false
    if(typeof param === "string"){
        ans = true
    }
    return ans
}


if( checkName(name) && (name.length<15)){
    if( name.toLowerCase() === "john"){
        console.log( "Welcome back John")
    } else{
        console.log( "Sorry, I do not recognise you")
    }
}else{
    errorMessage("Invalid name")
}
console.log("----------------")

if( checkName(firstName) && (firstName.length >=2 && firstName.length) <15 ){
    if( firstName.toLowerCase() === "james" || firstName.toLowerCase() === "jason" || firstName.toLowerCase() === "john"){
        console.log( `Welcome back ${firstName}`)
    } else{
        console.log( "Sorry computer does not recognise you")
    }
}else{
    errorMessage( "Invalid name")
}
console.log("------------------")

// Another way to write out functions is the arrow method 

/*
const checkname = () => {
    
}
*/

// Lesson 5 homework 

// 1)

function hello(){
    console.log("Hello world")
}
console.log("-----------")
// 2)

function add(a,b){
    console.log( a+b)
}

var fruits = [ "apple", "orange", "mango", "lemons,"]
var vegtables = ["potato", "leek", "carrots", "onions"]

add( fruits, vegtables)
console.log("--------------")

// Teachers method 

function combinedArrays(arr1, arr2){
    var combined = arr1.concat(arr2)
    console.log(combined)
}

combinedArrays([1,2,3],[4,5,6])
console.log("-------------------")

// 3) Teachers answer 
// % (modulus) is used used to determine the remainder. it can be used to check whether a number is odd or even. 13%2 basically asks whether 13 can go into 2 with no remainder. if you get a 1 it means that there is a remainder and essentially means true. if you get a 0 it means there is no remainder and essentially means false.

function checkOddOrEven(num){
    if(num%2 === 0){
        console.log(`${num} is an even number`)
    }else{
        console.log(`${num} is an odd number `)
    }
}
checkOddOrEven(5)

console.log("----------------")

// 4)

param2 = "apple"

function string(param2){
    let ans = false
    if( param2 = "string"){
        ans = true
    }
    return ans
}
string()
console.log(string())

// 4) teachers answer

function checkStringOrNot(item){
    if(typeof item === "string"){
        console.log(`${item} is a string`)
    }else if(typeof item === "number"){
        console.log(`${item} is a number` )
    }else{
        console.log(`${item} is an object `)
    }
}
checkStringOrNot(2)
console.log("---------------")

// Combining the two functions (3+4) together
// the two functions are combined together to first check what type of data "num" is. if it is a number it passes the first check (checkStringOrNot). it then goes thrrough the second check, to see whether the number is even or not. 

function checkOddOrEven(num){
    var checked = checkStringOrNot(num)
    console.log(checked)
    if(checked === true){
        if(num%2 === 0){
            console.log(`${num} is an even number`)
        }else{
            console.log(`${num} is an odd number `)
        }
    }else{
        console.log( "can only accept numbers")
    }
}
checkOddOrEven(56)

function checkStringOrNot(item){
    let ans = false
    if(typeof item === "string"){
        ans = false
    }else if(typeof item === "number"){
        ans = true
    }else{
        ans = false
    }
    return ans
}
console.log("------------")

// challange 1) teachers answer

// we need to input an array [1,2,3,4,5] and output the reverse 54321.

// First thing to do is reverse the array using (.reverse)

function reverseArray(param){
    console.log(param.reverse())
}

// after reversing you add (.join("")) to join thr numbers together and make 54321
function reverseArray(param){
    console.log(param.reverse().join(""))
}
reverseArray([1,2,3,4,5])