import React from 'react'
import { editPlaceAdd } from "../../utils/action_placeadd"


const EditAdd = ({add}) => {
    // console.log(add);
    const {id, title , description}=add;
    // // console.log(id)
  return (
    <div>

       <form action={editPlaceAdd} >

            <input className="input input-bordered w-full my-4" type='hidden' name='id'  value={id} />
            <label className='label-text'>Title</label><input required className="input input-bordered w-full my-2" type='text' name='title'  defaultValue={title}/>
            <label className='label-text'>Description</label><input required className="input input-bordered w-full my-2" type='text' name='description'  defaultValue={description}/>
            <button type='submit'  className='btn btn-outline btn-accent'>Save Chages</button>

        </form>

    </div>
  )
}

export default EditAdd
