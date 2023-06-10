import React, { useState } from 'react'

export default function userInpt(props) {
  
  return (
    <div className='mx-auto'>
    <label className='m-3'>userName:</label>
   <input onChange={(event)=>{props.setUserChange(event.target.value)}}
    className='border rounded-md'  type="text" placeholder=' userName'/> 
  </div>
  )
}
