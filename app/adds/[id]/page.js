import React from 'react'
import { getAdd } from '../../../utils/action_placeadd';
import Link from 'next/link';
import Image from 'next/image'
import EditAdd from '../../components/EditAdd';
const Singleaddpage = async ({ params }) => {
    const add = await getAdd(params.id);

    return (
        <div>

            <div className="card w-96 glass">
                <figure><Image src={add.imageLink} size='(max-width:768px) width:100%, (max-width:1200px) width:50%' width='500' height='500' alt={add.id} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{add.title}</h2>
                    <p>{add.description}</p>
                    <div className="card-actions justify-end">
                        <Link href='/adds' className="btn btn-primary" >Back to add page</Link>

                    </div>
                </div>

            </div>

            <div className='card w-96 glass mt-4'>

                <div className='card-body'>

                    <EditAdd add={add} />
                </div>


            </div>


        </div>
    )
}

export default Singleaddpage
