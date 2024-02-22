import React from 'react'
import './App.css'
import Nav from './Nav'

function Card(props) {
    
  return (
    <div className='cardHolder'>
        <div className='Card'>
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