import React from 'react'
import './Alert.css'
function Alert({message,color}) {
  return (
    <div className='alert-slide' style={{backgroundColor: color==='green' ? '#d4edda' : '#e77763'}}>
     {message}
    </div>
  )
}

export default Alert