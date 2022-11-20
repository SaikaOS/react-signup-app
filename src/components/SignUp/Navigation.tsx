import React from 'react'
import { useAppSelector } from '../../store/store'

const Navigation = () => {
  return (
    <div className='flex items-center justify-between w-[500px]'>
        <Nav id={1} title={'SignUp'}/>
        <Nav id={2} title={'Message'}/>
        <Nav id={3} title={'Checkbox'}/>
    </div>
  )
}

const Nav = ({id, title}:any) => {
  const {currentPage} = useAppSelector(state => state.slice)
    return (
        <div className='flex items-center justify-around w-[150px]'>
            <div className={`${id === currentPage ? 
              'bg-blue-500 text-white' : 'bg-white border-gray-100 border-2'} 
              py-1 px-3 rounded-md flex justify-center items-center`}>
              {id}
              </div>
            <p>{title}</p>
        </div>
    )
}

export default Navigation