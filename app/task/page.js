import React from 'react'
import TaskForm from '../components/TaskFormCustom'
export const dynamic = 'force-dynamic';

import TaskList from '../components/TaskList'
const Taskpage = () => {
    return (
        <div className='max-w-lg'>
            <TaskForm />
            <TaskList />
        </div>
    )
}

export default Taskpage