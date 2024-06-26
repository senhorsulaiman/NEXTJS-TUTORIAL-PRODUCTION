'use client'
import { DeleteTask } from "../../utils/action"
import {useFormStatus }from 'react-dom'

const SubmitButton=()=>{
    const pending=useFormStatus();
    // console.log('p'+pending)
    return(

        <button type="submit" className="btn  btn-error btn-xs uppercase" >
            {pending?"delete":' delete'}
        </button>
    )

}
// const initialState={

//   message:null,
// }
const DeleteForm = ({id}) => {
  // const [state,formAction]=useFormState(DeleteTask,initialState);

  return (
    <form action={DeleteTask}>
        <input type="hidden" name="id"  value={id} />

        <SubmitButton/>
    </form>
  )
}

export default DeleteForm