import { DeleteTask } from "../../utils/action"

const DeleteForm = ({id}) => {
  return (
    <form action={DeleteTask}>
      <input type="hidden" name="id"  value={id}/>
        {/* <input type="hidden" name="content"  value={content}/> */}
        <button className="btn  btn-error btn-xs uppercase">delete</button>
    </form>
  )
}

export default DeleteForm