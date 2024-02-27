import React from 'react'
import Nav from './Nav'
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

export default App

/* <Card
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