import React from 'react'
import DeleteAdd from './DeleteAddForm'
import { getAllAdd } from '../../utils/action_placeadd'
import Image from 'next/image'
import Link from 'next/link'

const AdList = async () => {
    const adds=await getAllAdd();
    // console.log(adds);
    if (adds.length===0) {
        return <h2 className='text-2xl'>no adds to display...</h2>
    }

  return (

    <div>
        <ul className="">
            {adds.map((add)=>{
                return(
                    // className='h-auto rounded-md shadow-md transition-all hover:scale-[1.05]' src={drink.strDrinkThumb} fill size='(max-width:768px) width:100%, (max-width:1200px) width:50%'
                    <li key={add.key} className=" my-4  card w-96 bg-base-100 shadow-xl ">

                        <Link href={`/adds/${add.id}`} >
                            <figure>
                                <Image  src={add.imageLink} size='(max-width:768px) width:100%, (max-width:1200px) width:50%' width='500' height='500'  alt={add.id} />
                            </figure>
                            </Link>
                            <div className='p-2 flex justify-between items-center'>

                                <div>

                                <h2  className="card-title mb-1 capitalize">{add.title}</h2>
                                <p className='capitalize text-emerald-300 text-sm  w-full'>{add.description}</p>
                                </div>

                                <DeleteAdd id={add.id}/>

                            </div>

                    </li>
                )

            })}
        </ul>
    </div>
  )
}

export default AdList
