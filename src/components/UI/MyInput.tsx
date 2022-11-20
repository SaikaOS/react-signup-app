import React, { FC } from 'react'

interface IMyInput {
    label: string,
    placeholder: string,
    type: string,
    classname?: string,
    value: string,
    onChange: any,
    validation: any
}

const MyInput:FC<IMyInput> = ({label,placeholder, type, classname, value, onChange, validation}) => {
  return (
    <div className={classname}>
        <label className='mb-2'>{label}</label>
        <input type={type} placeholder={placeholder} 
        className="border-2 border-gray-200 rounded-md p-2"
        value={value}
        onChange={onChange}
        {...validation}
        />
    </div>
  )
}

export default MyInput