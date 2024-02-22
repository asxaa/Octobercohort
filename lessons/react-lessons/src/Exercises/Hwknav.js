import React from 'react'

function Hwknav(props) {
  return (
    <div>
        
        <nav>
           
            <ul>
                
                <li><a href='https://www.waterstones.com/book/harry-potter-and-the-philosophers-stone/j-k-rowling/9781408855652' target='_blank' rel='noreferrer'>{props.link1}</a></li>

                <li><a href='https://www.waterstones.com/book/harry-potter-and-the-philosophers-stone/j-k-rowling/9781408855652' target='_blank' rel='noreferrer'>{props.link2}</a></li>

                <li><a href='https://www.waterstones.com/book/harry-potter-and-the-philosophers-stone/j-k-rowling/9781408855652' target='_blank' rel='noreferrer'>{props.link3}</a></li>
            
            </ul>

        </nav>

    </div>
  )
}

export default Hwknav