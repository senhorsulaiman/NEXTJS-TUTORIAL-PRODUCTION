import React from 'react'
import { CreateTask } from '../../utils/action'
function TaskForm() {
  return (
    <form className='join w-full mb-4 ' action={CreateTask}>

        <input type='text' required placeholder='type here...' className='input input-bordered join-item w-full'  name='content'></input>
        <button className='btn btn-primary join-item'>Submit</button>
    </form>
  )
}

export default TaskForm
