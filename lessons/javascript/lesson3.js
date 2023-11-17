// Tuesday 24/10/2023
// .Tolowercase() / .Touppercase ß
// Logical operators in conditional statments > < ß
// Switch cases ß
// Arrays x


// Greater than > / Greater than or equal >=
// Less than < / Less than or equal <=

// Example of conditional statments using greater than

let age = 34

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

console.log( "--------------------")

// adding nesting conditional statments which checks if the input you are putting into the stament is the correct type

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
    console.log( "Error: Age must be a number")
}
console.log( "--------------------")

// Second example 
var name = "john"
console.log( name.length)
console.log(name.toLowerCase())
// all these fall under validation, essentially making sure that your code is fool-proof

if( typeof name === "string" && (name.length<15)){
    if( name.toLowerCase() === "john"){
        console.log( "Welcome back John")
    } else{
        console.log( "Sorry, I do not recognise you")
    }
}else{
    console.log( "Error")
}

// Switchcases 
 
/*

switch(condition){
    case1:
        doThis
        break
    casse2:
        doThis
        break
    default:
        doThis
        break;    
}
*/

var dayOfTheWeek = "monday"
var time = "16:30"

switch(dayOfTheWeek.toLowerCase()){
    case "monday":
        if(time == "16:30"){
            console.log("Finish work early")
        }
        break;
    case "tuesday":
        console.log( "work")
        break;
    case "wednesday":
        console.log( "work")
        break;
    case "thursday":
        console.log("work")
        break;
    case "friday":
        console.log( "IT'S FRIDAY")
        break;
    case "saturday":
        console.log( "IT'S THE WEEKEND")
        break;
    case "sunday":
        console.log("it's monday tomorrow")
        break;
    default:
        console.log(`Error ${dayOfTheWeek} is not an actual day`)  
        break;  
    }
    console.log( "-----------------")
    // Lesson 3 Homework

    // 1)
    var weather = "raining"
    
    
    if( typeof weather === "string"){
        if(weather.toLowerCase() == "raining"){
            console.log( "Do not forgot to being your umberella")
        }else if( weather.toLowerCase == "sunny"){
            console.log( "No need for umberalla, it's sunny today")
        }else{
            console.log( "I'm not sure what the weather is today")
        }
    }else{
        console.log( "ERROR")
    }
    console.log( "--------------------")
    // 1) teacher answer/example 1

    var firstname = "james"

    if( typeof firstname === "string" && firstname.length >=2 && firstname.length <15 ){
        if( firstname.toLowerCase() === "james" || firstname.toLowerCase() === "jason"){
            console.log( `Welcome back ${firstname}`)
        } else{
            console.log( "Sorry computer does not recognise you")
        }
    }else{
        console.log( "ERROR")
    }
    console.log( "--------------------")

    // example 2 

    age = 25

    if( typeof age === "number" && (age>=7 && age<=100)){
        if ( age>=25 ){
            console.log("Higher education is an option")
        } else{
            console.log( "Go study")
        }
    } else{
        console.log( "ERROR")
    }
    console.log( "------------------")
    // 2)

    var phone = "android"

    if( phone == "iphone"){
        console.log( "This phone is an iphone")
    }else if( phone == "android"){
        console.log("This phone is an android")
    }else{
        console.log("Sorry, i dont know what type of phone this is")
    }
    console.log( "--------------------")

    // 3)
    var mathOperation = "*"
    console.log( "250" + mathOperation + "10" + " =")

    switch(mathOperation.toLowerCase()){
        case "+":
            console.log("260")
            break;
        case "-":
            console.log("240")
            break;
        case "*":
            console.log( "2500")
            break;
        case "/":
            console.log("25")
            break;       
        default:
            console.log("Do not recognise that operation")
            break;
    }
    console.log( "------------------")

    // 3) teacher answer
    
    var a = 250
    var b = 10
    
    var mathOperation2 = "multiplication"

    switch(mathOperation2.toLowerCase()){
        case "addition":
            console.log(a+b)
            break;
        case "subtraction":
            console.log(a-b)
            break;
        case "multiplication":
            console.log(a*b)
            break;
        case "division":
            console.log(a/b)
            break;       
        default:
            console.log("Do not recognise that operation")
            break;
    }