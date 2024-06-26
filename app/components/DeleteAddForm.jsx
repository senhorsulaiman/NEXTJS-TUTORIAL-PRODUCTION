import { DeleteAdd } from "../../utils/action_placeadd"
const DeleteFormAdd = ({id}) => {
  return (
    <form action={DeleteAdd}>
      <input type="hidden"  name='id' value={id}/>
      <button type='submit' className='btn btn-primary btn-sm'>Delete</button>
    </form>
  )
}

export default DeleteFormAdd
