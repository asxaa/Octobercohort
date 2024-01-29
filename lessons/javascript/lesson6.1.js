// Tuesday 07/11/23
// Loops part 1
// For loops ß
// Intialisation vs Boundry vs iterator ß
// Fizz buzz x

// i++
// i--
// i-=2
// 1+=2
// i*=2

// Loops are exectuable statments/ smething that is looped around several times, and wwill continue to loop until you give it a stop. essentially continues to do something for x amount of times or untill you tell it to stop.

// Useful for removing repeated jobs. 

// intialisation is the begining step, it is what causes the loop to start working. 

// boundry is the last step, it causes the loop to stop repeating and acts as an end button. 

//Iterator also known as a step, depends on how many times you want something to be printed off, it will continue to repeat itself untill the end/boundry. If you wanted you could print it off every single step or you could change it to every 2 steps. E.g in a 0-10 sequence, an item can be printed off 10 timesusing a +1 iterator or 5 times using a +2 iterator.

// A loop is written as:

/*
for(){

}
*/

// to start off the intialisation you add a (let) in the bracets next to the for. then you add a semi-colon to seperate the conditions. The entire condition will have 3 values.

//The intiallisation will be the first value i.e (let i=0). 
//The second value will be the boundry and will be our ending point i.e (i<=10)- meaning our stop point will be less than or equal to 10. 

//The last value will be the iterator and will show how many times we want to loop it by i.e (i++)- which means i= i+i , and will tell the loop to repeat the maxiumum amount of times. Also can do (i--). You can also write it as (i+=2) to make the loop jump a step. (i*=2)- can also do it in multiplications.

// Example 1 


for(let i=0; i<=10;i++ ){
    console.log("Hello")
}
console.log("---------------")

// If a loop isnt written properly you will go into an infinite loop, which essentially means you are not reaching an end point. An example of this is :- (let i=0; i<=10; i*=10)- this is because i=0 and 0x2 will always equal to 0, which means that it will never increase and therefore never be equal to 10. All you have to do to fix this loop is to set i=1.

// If you ever enter an infinite loop, you have to left ctrl then c. sont quit the terminal or close vs code as the loop can still run in the background

// Example 2 

for(let i=10; i>=0; i--){
    if(i===0){
        console.log("Blast of!!!")
    }else{
        console.log(i)
    }
} 
console.log("------------")

// Lesson 6 homework 

// 1)

for(let i=1;i<=10; i++){
    console.log(i)
}
console.log("----------")

// 2)

for(let i=0; i<=10;i+=2){
    console.log(i)
}
console.log("-------------")

// 2) + 3) teachers answer 

var array = [0,1,2,3,4,5,6,7,8,9,10]

for(let i=0; i<array.length; i++){
    if(array[i]%2 === 0){
        console.log(`even number ${array[i]}`)
    }else{
        console.log(`odd number ${array[i]}`)
    }
}
console.log("-------------")
// 3)

for( let i=1; i<=10; i+=2){
    console.log(i)
}
console.log("------------")

// 4)

for(let i=0; i<=100; i+=2){
    console.log(i)
}

// Challange 1) teachers answer 

// A Palindrome is a string/ word that is spelt the same way backwards.

function checkPalindrome(string){
    console.log(string)
    var reversedWord = string.split("").reverse().join("")

    if(reversedWord === string){
        console.log(`${string} is = ${reversedWord} therefore it is a palindrome.`)
    }else{
        console.log(`${string} is != ${reversedWord} therefore it is not a palindrome.`)
    }

}

checkPalindrome("madam")
