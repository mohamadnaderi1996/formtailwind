import React from 'react'
import img from '../../../image/img.jpg';

export default function imgTag() {
  return (
    <div className='h-64 lg:rounded-l-md'>
    <img src={img} alt="images"  className="h-full lg:rounded-l-md" />
  </div>
  )
}
