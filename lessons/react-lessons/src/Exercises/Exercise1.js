import React from 'react'
import './Cardhwk.css'
import Hwknav from './Hwknav'

function Exercise1(props) {
  return (
   <div className='cardHolder'>
     <div className='card'>
            <img src= {props.img} alt='Harry Potter'/>
            <h3>{props.title}</h3>
         <h4>{props.author}</h4>
         <p>{props.description}</p>

         < Hwknav
         link1 = "Wikipedia"
         link2 = "Goodread"
         link3 = "Amazon"
         />
     </div>
    </div>
  )
}

export default Exercise1