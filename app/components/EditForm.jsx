
import { editTask } from "../../utils/action";


const EditForm = ({task}) => {
    // console.log(task);
    const {id ,completed ,content }=task;
  return (
    <form action={editTask} className="max-w-sm p-12 border-base-300 rounded-lg">
            <input type="hidden" name="id" value={id}/>


            <input type="text" required defaultValue={content} name="content" className="file-input-bordered w-full" />
        <div className="form-control">
          <label htmlFor="completed" className="label cursor-pointer">

          <span className="label-text" >completed</span>
          <input type="checkbox" defaultChecked={completed} id="completed" name="completed"
          className="checkbox checkbox-primary checkbox-sm"
          />

          </label>

        </div>
        <button type="submit" className="btn btn-block btn-primary btn-sm" >edit</button>
       </form>
  )
}

export default EditForm