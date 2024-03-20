import { useState } from 'react'
import React from 'react'
import './App.css'
import './App.css'

function App() {

   /* without using hooks or useState(), this is what the eventlistener looks like. the number is also not updating onto the page when you click the addition button or the subtraction button.
   
   var number = 0 

    function handleAddition (){
        console.log(number)
        number++
        console.log(number)
    }

    function handleSubtraction(){
        console.log(number)
        number--
        console.log(number)
    }*/

    const [number, setNumber] = useState(0)

    function handleAddition(){
        setNumber(prevNumber=> prevNumber+1)
        setNumber(prevNumber=> prevNumber+1)
        console.log(number)
    }

    /*
    setNumber(number+1) //0=> //1
    setNumber(number+1) //0=> //1
    However when you use  setNumber(prevNumber=>prevNumber+1) //0=> //1, when you do it a second time it doubles because PrevNumber is no longer equal to 0. E.g setNumber(prevNumber=>prevNumber+1) //1=> //2
    */
   function handleSubtraction(){
        setNumber(number-1)
   }

   

    return (
     <div className='cardHolder'>

        <button onClick={handleAddition}>+</button>
        <h1>{number}</h1>
        <button onClick={handleSubtraction}>-</button>
      </div>
  )}

  


export default App

/*
import Card from './Card'
import './App.css'
import data from './data.json'

function App() {

    const bookList = data.map((item) => {
       return(
         <Card
         imgLink = {item.thumbnailUrl}
         title = {item.title}
         authors = {item.authors.join(" , ")}
         blurb = {item.shortDescription}
         pageCount = {item.pageCount}
         genre = {item.categories.join(", ")}
         />
       )
    })
     return (
      <div>
          <header>
              <h2> Book Library</h2>
              <Nav
 
               Link1 = "Twitter"
               link2 = "Facebook"
               link3 = "Log In"
               />
           </header>
         
           <main>
               <div className='cardHolder'>
                   {bookList}
               </div>
           </main>
       </div>
   )
 }


 <Card
                 imgLink = "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg"
                 title = "Unlocking Android"
                 authors = "W. Frank Ableson , Charlie Collins , Robi Sen"
                 blurb = "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout."
                 pageCount = "416"
                 genre =  ""
                />  
                <Card
                 imgLink = "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg"
                 title = "Unlocking Android"
                 authors = "W. Frank Ableson , Charlie Collins , Robi Sen"
                 blurb = "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout."
                 pageCount = "416"
                 genre =  ""
                /> 
                <Card
                 imgLink = "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg"
                 title = "Unlocking Android"
                 authors = "W. Frank Ableson , Charlie Collins , Robi Sen"
                 blurb = "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout."
                 pageCount = "416"
                 genre =  ""
                />  
                <Card
                 imgLink = "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg"
                 title = "Unlocking Android"
                 authors = "W. Frank Ableson , Charlie Collins , Robi Sen"
                 blurb = "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout."
                 pageCount = "416"
                 genre =  ""
                />  
                */