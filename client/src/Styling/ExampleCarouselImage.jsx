import React from 'react'

function ExampleCarouselImage({path,text}) {
  return (
    
    <img className='slide-image' src={path} alt={text} />
  )
}

export default ExampleCarouselImage