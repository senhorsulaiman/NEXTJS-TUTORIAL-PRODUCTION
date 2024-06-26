

import Link from 'next/link';
import DeleteForm from "../components/DeleteFormCustom";
import {getAllTasks}  from '../../utils/action';

const TaskList=async ()=>{
  const tasks=await getAllTasks();

  if(tasks.length===0){

    return <h2>No task to show...</h2>;
  }
    return (
      <ul>

        {tasks.map((task)=>{
            return <li key={task.key} className='flex justify-between items-center px-6 py-4 border border-base-300 rounded-lg shadow-lg mb-4'>
              <h2 className={`text-capitalize font-medium w-full  ${task.completed?'line-through':null} `}> {task.content}</h2>
              <Link href={`/task/${task.id}`} className='btn  btn-accent btn-xs mx-2'>edit</Link>
              <DeleteForm id={task.id}/>
             </li>
        })}
      </ul>
    )

}

export default TaskList