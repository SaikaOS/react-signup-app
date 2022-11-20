import React from 'react'

const Message = () => {
  return (
    <div>
        <h1 className='font-bold text-2xl mb-8'>Message</h1>
        <p className='mb-2'>Message</p>
        <textarea cols={65} rows={7} placeholder='Lorem ipsum dolor sit amet' className='border-2 border-gray rounded-md p-2'></textarea>
        <div className='flex items-center justify-between w-[400px] mt-4'>
            <div>
            <input type="radio"/>
            <label>The number one choice</label>
            </div>
            <div>
            <input type="radio"/>
            <label>The number second choice</label>
            </div>
        </div>
    </div>
  )
}

export default Message