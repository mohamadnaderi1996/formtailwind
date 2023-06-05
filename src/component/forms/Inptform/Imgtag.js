import React from 'react'
import img from '../../../image/img.jpg';

export default function imgTag() {
  return (
    <div className='h-64 rounded-l-md'>
    <img src={img} alt="images"  className="h-full rounded-l-md" />
  </div>
  )
}
