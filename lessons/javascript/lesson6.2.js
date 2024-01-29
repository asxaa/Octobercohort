// Saturday 11/11/2023
// Loops part 2
// For loops ß
// While loops 
// Fizz buzz ß

// Challange question.
// Create me a script that prints forms of fizzbuzz depending on if a number is divisible. Any number divisible by 3 is replaced by the word fizz and any number divisible by 5 buzz. Finally any number divisible by 3 and 5 should print "FLIZZBUZZ!"
// 0-100

var array = [3,5,6,9,10,12,15,18,20,21,24,25,27,30]

function checkFizzBuzz(array){
    if((array%3) === 0 && (array%5 === 0)){
        console.log("FIZZBUZZ!")
    }else if(array%3 === 0){
        console.log("Fizz")
    }else if(array%5 === 0){
        console.log("Buzz")
    }else{
        console.log("wrong")
    }
    
}

checkFizzBuzz(100)
console.log("-------------")
// Teachers answer 

for(let num=1; num<=100; num++){
    if((num%3 === 0) && (num%5 === 0)){
        console.log("FIZZBUZZ!")
    }else if(num%3 === 0){
        console.log("Fizz")
    }else if(num%5 === 0){
        console.log("Buzz")
    }else{
        console.log(num)
    }
}
console.log("-------------")

// My answer was pretty spot on only thing was i shouldve used a forloop and not a function. function was pretty much not needed here. forloop was better option 

// Using a forloop

var array2 = [1,2,3,4,5,6345,32]
target = 5

let ans = false 
var position;

for(let i=0; i<array2.length; i++){
    if(array2[i] === target){
        ans = true
        position = i 
    }
}

if(ans){
    console.log("Target is in the array at position " + position)
}else{
    console.log("Item is not in array")
}

console.log("-------------")

// A While loop is different to the for loop in many ways. A while loop has the condition inside the bracket. But it has the index starting point outise the bracket. It is written as:

/* 
let index = 0
while(conditon){
    doSomething
    index++
}
*/

// For loops and while loops are fairly similar except for the way they are written and used. A for loop continues to loop until the boundry/end point is reached. A while loop continues to loop untill the condition in the bracket is met. (or is it the other way around).

// Example 1 

let i = 0
while(i<100){
    console.log(i)
    i++
}
