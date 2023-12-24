// Tuesday 31/10/2023
// Arrays and Array methods
// arrays ß
/* Methods
    .push("itemname") 
    .pop()
    .unshift("itemname")
    .shift()
    .includes("itemaname")
    .indexOf("itemname")
    .join()
*/
/* Properties
    .length  

*/

//  an Arrays is an object; also known as a conatiner or a variable that holds multiple different types of variables or the same variable in itself. [] are used with arrays. 

var array = [ 1, 2, 3]
console.log( typeof array)

const shoppinglist = [ "bread", "juice", "milk", "cereal", "butter"]
console.log( shoppinglist[0])
// when lisitng an object, you must start from the number 0, as the computer sees 0 as the first number and not 1. Bread in the example above is classes as 0. if i tried aksing the computer for the 5th object in the array above i would get an "undefined" as my answer because in the computers eyes there is no defined 5th object/variable.
// console.log(shoppinglist[shoppinglist.length-1]) - usally done to find the last item in the list. to find out how many items are in the list, you use console.log(shoppinglist.length)

// to reasign/change an item in the list you use an = sign 

shoppinglist[0] = "apples"
console.log(shoppinglist)

// here we can see that 0 in the list has been changed from bread into apples. even if shopping list was a const, it would still be changed into apples because we are not changing the array itself but the items inside of the array 

// .push() is used to add items to the end of a list 
shoppinglist.push("oranges")
console.log(shoppinglist)
console.log(shoppinglist.length)

// .pop() is used to remove the item on the very end of the list
shoppinglist.pop()
console.log(shoppinglist)
// "oranges" has now been removed from the array "shoppinglist"

// .unshift() is used to add items to the very beginning of the list/stack
shoppinglist.unshift("cheese")
console.log(shoppinglist)

// .shift() is used to remove an item from the very beginning of the list
shoppinglist.shift()
console.log(shoppinglist)

// .include() is used to see whether an item is on the list or not. "false" means 
console.log(shoppinglist.includes("milk"))

// .indexOf() is used to see the position of an item on the list. "-1" indicates that the item is not on the listindicates that the
console.log(shoppinglist.indexOf("milk"))

if(shoppinglist.includes("green apples")){
    console.log(shoppinglist.indexOf("green apples"))
}else{
    shoppinglist.push("green apples")
}

// .join() is used to join the list together, whether its into one word or seperated by a comma
console.log(shoppinglist.join(","))
console.log("----------------")

// Lesson 4 homework

// 1)
var schoolRegister = ["dylan", "mike", "amanda", "trisha", "james", "alice", "josh", "hannah", "alex", "holly", "william", "kate", "harry", "megan", "archie" ]

// 2)
schoolRegister.pop()
console.log(schoolRegister)

// 3)
schoolRegister.push("lucie")
console.log(schoolRegister)

// 4)
console.log(schoolRegister.indexOf("dylan"))
console.log(schoolRegister.indexOf("hannah"))
console.log(schoolRegister.indexOf("lucie"))

// 5)

schoolRegister[0] = "green"
schoolRegister[1] = "blue"
schoolRegister[2] = "yellow"
console.log(schoolRegister)