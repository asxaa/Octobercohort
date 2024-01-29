// Exercise 2 
// Create a page that will check if a string/number is a palindrome using event listeners. It should console log whether the string is a palindrome or not. 

const body = document.body
const head = document.head 

var heading1 = document.querySelector("h1")


function checkPalindrome(string){
     console.log(string)
     var reversedWord = string.split("").reverse().join("")

     if( string === reversedWord){
        console.log(`${string} is the same as ${reversedWord} so it is a palindrome.`)
     }else{
        console.log(`${string} is not the same as ${reversedWord} so it is not a palindrome `)
     }

}

heading1.addEventListener('click', function(){
   var palindrome = prompt("Please enter password")

  /* if(palindrome.length>2){
     checkPalindrome(palindrome)
   }else{
      console.log(`${palindrome} is not a palindrome`)
   }*/

   if(palindrome.length>2){
      checkPalindrome(palindrome)
      var palindromeEl = document.createElement('h1')
   palindromeEl.innerText = `${palindrome} is a palindrome`
   palindromeEl.style.color = 'blue'

   body.append(palindromeEl)

   }
})

/*heckPalindrome(palindrome)

var palindromeEl = document.createElement('h1')
palindromeEl.innerText = `${palindrome} is a palindrome`
palindromeEl.style.color = 'blue'

body.append(palindromeEl)*/