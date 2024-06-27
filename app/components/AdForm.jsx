'use client';
import { CreateAdd } from '../../utils/action_placeadd';
// import {useFormStatus }from 'react-dom';

const SubmitBtn=()=>{
//  const pending=useFormStatus();

  return(

    <button className='btn btn-accent my-2 btn-md'>
     Place ad
    </button>
  )
}
const AdForm = () => {
  return (
    <form action={CreateAdd}>
        <input type='text' placeholder='title' name='title' className='input input-bordered w-full my-4' required></input>
        <input type='text' placeholder='description...' name='description' className='input input-bordered w-full my-4' required></input>
        <input type="text" placeholder='image Link' name='imageLink' className='input input-bordered w-full my-4' required/>
        <SubmitBtn/>
    </form>
  )
}

export default AdForm