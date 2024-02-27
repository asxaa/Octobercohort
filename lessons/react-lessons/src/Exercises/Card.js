import React from 'react'
import './App.css'
import Nav from './Nav'
// not related to the homework

function Card(props) {
    
  return (
    <div className='cardComponent'>
        <div className='CardTwo'>
        <img src={props.img} alt='Astronaut' />
        <h3>{props.name}</h3>
        <h4>{props.job}</h4>
        <p>{props.hobbies}</p>
        <Nav 
        link1 = {props.socialMedia}
        link2 = "Twitter"
        link3 = "Instagram"
        />
        </div>
    </div>
  )
  
  
}

export default Card

// function nav{link1,link2,link3}{
//  console.log(link1)
//  console.log(link2)
//  console.log(link3)
// }
//Nav{link1,link2,link3}

// Ternary Conditionals: a one line conditional statment 
// if true ? do this: do that 
/* Example:
{ props.animal ? <h1> {props.animal} </h1> : <h1> Undefined </h1> }

// a regular conditional statment has multiple lines

/* if{condition is true}(
  do this
)else{
  do that 
}*/