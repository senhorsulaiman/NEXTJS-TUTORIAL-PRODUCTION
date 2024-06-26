import { getTask } from "../../../utils/action";
import Link from "next/link";
import EditForm from '../../components/EditForm'

const SingleTaskpage = async ({ params }) => {
    const task = await getTask(params.id);

    return (
        <div className='mb-6'>
            <Link href='/task' className='btn btn-accent'> back to task</Link>

            <EditForm task={task} />



        </div>
    )
}

export default SingleTaskpage
