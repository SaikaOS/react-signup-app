import React, { FC, useState } from 'react'

const Checkbox:FC = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <div>
      <h1 className='mb-8 text-2xl font-bold'>Checkbox</h1>
      <div className='flex justify-between w-3/4'>
      <img src={"https://thumbs.dreamstime.com/b/customer-support-icon-operator-vector-headset-illustration-141495765.jpg"} alt="" 
      width={120} className={`border-2 ${clicked ? 'border-red-500' : 'border-gray-300'} 
      cursor-pointer `}
      onClick={() => setClicked(!clicked)}/>
      <img src={"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX36485658.jpg"} alt="" 
      width={120}  className={`border-2 ${!clicked ? 'border-red-500' : 'border-gray-300'} 
      cursor-pointer `}
      onClick={() => setClicked(!clicked)}/>  
      </div>
      <div className='mt-6'>
        <div>
          <input type="checkbox" />
          <label>I want to add this option</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Let me think on this checkbox and choose some cool stuff</label>
        </div>
      </div>
    </div>
  )
}

export default Checkbox