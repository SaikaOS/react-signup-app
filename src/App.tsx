import React from 'react';
import { useForm } from 'react-hook-form';
import Checkbox from './components/Checkbox/Checkbox';
import Message from './components/Message/Message';
import Navigation from './components/SignUp/Navigation';
import MyButton from './components/UI/MyButton';
import { nextPage, prevPage, setAddress, setDateOfBirth, setDoneOrNot, setEmailAddress, setFirstName, setLastName } from './store/slice';
import { useAppDispatch, useAppSelector } from './store/store';

export interface IForm {
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  email_address: string,
  address: string,
}

function App() {
  const {currentPage,address,dateOfBirth,email_address,firstName,lastName} = useAppSelector(state => state.slice)
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState: { errors }} = useForm<IForm>()

  const onSubmit = (data:any) => {
    if(currentPage === 3) {
      alert("Done!")
      console.log(data)
    } else {
      dispatch(nextPage())
      dispatch(setDoneOrNot())
    }
  }

  const moveForward = () => {
      dispatch(nextPage())
  }

  return (
    <div className='flex justify-center items-center pt-4 max-w-[1024px] mx-auto'>
      <div className=' bg-white rounded-2xl overflow-hidden flex items-center
      justify-between w-full'>
      <img src={"https://images.unsplash.com/photo-1498735599329-ed6e3798cdcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} 
      alt="" 
        />
        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col justify-between h-[500px] ml-12'>
         {currentPage === 1 ? 
         (
          <>
          <Navigation />
         <hr className='w-10/12'/>
         <p>Step {currentPage}/3</p>
         <div className='grid grid-cols-2 gap-1'>
         <h1 className='col-span-2 mb-6 text-2xl'>Sign UP</h1>
        <div className='flex flex-col justify-between w-3/4'>
        <label className='mb-2'>First Name</label>
         <input {...register("firstName", { required: true })} type="text" className='border-2 border-gray-200 rounded-md p-2'
         value={firstName}
         onChange={(e:any) => dispatch(setFirstName(e.target.value))}
         />
         {errors.firstName && <span className='text-red-500'>Incorrect first name</span>}
        </div>
        <div className='flex flex-col justify-between w-3/4'>
        <label className='mb-2'>Last Name</label>
         <input {...register("lastName", { required: true })} type="text" className='border-2 border-gray-200 rounded-md p-2'
         value={lastName}
         onChange={(e:any) => dispatch(setLastName(e.target.value))}
         />
         {errors.lastName && <span className='text-red-500'>Incorrect last name</span>}
        </div>
        <div className='flex flex-col justify-between w-3/4'>
        <label className='mb-2'>Date of birth</label>
         <input {...register("dateOfBirth", { required: true })} type="date" className='border-2 border-gray-200 rounded-md p-2' 
         value={dateOfBirth}
         onChange={(e:any) => dispatch(setDateOfBirth(e.target.value))}
         />
         {errors.dateOfBirth && <span className='text-red-500'>Incorrect date of birth</span>}
        </div>
        <div className='flex flex-col justify-between w-3/4'>
        <label className='mb-2'>Email Address</label>
         <input {...register("email_address", { required: true })} type="email" className='border-2 border-gray-200 rounded-md p-2' 
         value={email_address}
         onChange={(e:any) => dispatch(setEmailAddress(e.target.value))}
         />
         {errors.email_address && <span className='text-red-500'>Incorrect email address</span>}
        </div>
         <div className='flex flex-col justify-between w-3/4'>
         <label className='mb-2'>Address</label>
         <input {...register("address", { required: true })} type="text" className='border-2 border-gray-200 rounded-md p-2 w-[520px]' 
         value={address}
         onChange={(e:any) => dispatch(setAddress(e.target.value))}
         />
         {errors.address && <span className='text-red-500'>Incorrect address</span>}
         </div>
         </div>
         <hr className='w-10/12'/>
         <input type="submit" value="Next Step" className='rounded-md p-4 bg-blue-500 w-[150px] self-end mr-16 text-white cursor-pointer'/>
          </>
         ): null}
         {currentPage === 2 ? 
         (
          <>
          <Navigation />
         <hr className='w-10/12'/>
         <p>Step {currentPage}/3</p>
         <Message />
         <hr className='w-10/12'/>
         <div className='flex items-center justify-between w-[350px] ml-36'>
         <MyButton title='Back' styleBtn='rounded-md p-4 bg-gray-500 w-[150px]' styleTitle='text-black'
         onClick={() => dispatch(prevPage())}/>
         <MyButton title='Next Step' styleBtn='rounded-md p-4 bg-blue-500 w-[150px]' styleTitle='text-white' onClick={moveForward}/>
         </div>
          </>
         ): null}
         {currentPage === 3 ? 
         (
          <>
          <Navigation />
         <hr className='w-10/12'/>
         <p>Step {currentPage}/3</p>
         <Checkbox />
         <hr className='w-10/12'/>
         <div className='flex items-center justify-between w-[350px] ml-36'>
         <MyButton title='Back' styleBtn='rounded-md p-4 bg-gray-500 w-[150px]' styleTitle='text-black'
         onClick={() => dispatch(prevPage())}/>
         <input type="submit" value="Submit" className='rounded-md p-4 bg-blue-500 w-[150px] text-white cursor-pointer'/>
         </div>
          </>
         ): null}
        </form>
    </div>
    </div>
  );
}

export default App;