import React from 'react'

function Card(props) {
  return (
    <div className='component'>
        <div className='card'>
        {props.imgLink ? <img src={props.imgLink} alt= 'book'/> : <img src='https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg' alt='book'/> }
        {props.title.length>1 ? <h3>{props.title}</h3> : <h3> Title not found </h3>}
        {props.authors.length > 0 ? <h4> {props.authors}</h4> : <h4> Unknown Authors</h4>}
        {props.blurb ? <p> {props.blurb}</p> : <p> Description not found</p>}
        {props.pageCount ? <h5>{props.pageCount}</h5> : <h5> Page count not available</h5> }
        {props.genre.length> 1 ? <p>{props.genre}</p> : <p>Genre not specified</p> }
        </div>
    </div>
  )
}

export default Card