import React from 'react'

export default function passwordInpt(props) {
  return (
    <div  className='mx-auto'>
    <label className='m-3'>password:</label>
     <input onChange={(event)=>{props.setPassChange(event.target.value)}}
      className='border rounded-md' type="password" placeholder='  password..'/>
  </div>
  )
}
