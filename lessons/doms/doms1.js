// Document object model or DOM is essentially manipulating or making use of javascript into our html documents. Once we add javascript to our html page, it is what allows us to proccess logic in our html websites. 

const body = document.body
const head = document.head 

const pageTitle = document.createElement("title")
console.log(pageTitle)
pageTitle.innerText = "Lesson 1 DOMs"

head.append(pageTitle)




const smallParagraph = document.createElement("p")
smallParagraph.innerText = "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
body.append(smallParagraph)



const headingOne = document.getElementById( "heading1")

// To create an ordered list of three items, add this list to the page for 
//it to be displayed 

const orderedList = document.createElement("ol")
const listOne = document.createElement("li")
const listTwo = document.createElement("li")
const listThree = document.createElement("li")

listOne.innerText = "Bread"
listTwo.innerText = "Milk"
listThree.innerText = "Cheese"

body.append(listOne)
body.append(listTwo)
body.append(listThree)
orderedList.innerText = listOne + listTwo + listThree

// Teachers version

const orderedList2 = document.createElement("ol")
const item1 = document.createElement("li")
item1.innerText = "Bread"

const item2 = document.createElement("li")
item2.innerText = "Milk"

const item3 = document.createElement("li")
item3.innerText = "Cheese"

orderedList2.append(item1)
orderedList2.append(item2)
orderedList2.append(item3)

body.append(orderedList2)

 alert("Hello this is an alert")
 var response = prompt("Hello, what is your name?")
console.log(response)
headingOne.innerText = response