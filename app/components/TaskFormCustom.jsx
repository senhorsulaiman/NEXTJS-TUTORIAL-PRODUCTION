'use client';
import {useFormStatus, useFormState }from 'react-dom'
import { CreateTaskCustom } from '../../utils/action'
import { useEffect } from 'react';
import toast from 'react-hot-toast';


const SubmitBtn= () =>{
    const {pending}=useFormStatus();
  return(
    <button type='submit' className='btn btn-primary join-item   ' disabled={pending}>
      {pending?"please wait ...":'create task'}
    </button>
    )
}

const initialState={

  message:null,
}
const TaskForm = () => {
  // useFormState(CreateTaskCustom)

  const [state,formAction]=useFormState(CreateTaskCustom,initialState);
  useEffect(()=>{
    if(state.message ==='error'){
      toast.error('there was an error');
      return;
    }
    if(state.message){
      toast.success('task created')

    }
  },[state])

  return (
    <form  action={formAction}>
        {/* {state.message ? <p className='mb-2 block'>{state.message}</p>:null} */}
       <div className='join w-full mb-4 '>
        <input type='text' required placeholder='type here...' className='input   input-bordered join-item w-full focus:outline-none'  name='content'></input>
        <SubmitBtn/>
       </div>
    </form>
  )
}

export default TaskForm
