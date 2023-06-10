import React from 'react'
export default function submitInpt(props) {

  let validations=()=>{
    if(props.validation){
      props.navigate('/Anotherpage')
  }else{
    props.validate('/validate')
  }


}
  return (
    <>
      <button onClick={validations} className='border w-full h-2/3 rounded-2xl border-none bg-blue-600'>Submit</button>
    </>
 
  )
}
