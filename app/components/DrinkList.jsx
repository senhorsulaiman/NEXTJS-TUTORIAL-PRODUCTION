import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const DrinkList = ({drinks}) => {
  return (
    <ul className='grid sm:grid-cols-2 gap-6'>
            {drinks.map((drink)=>{
                 return(
                 <li key={drink.idDrink}>
                      <Link href={`/drinks/${drink.idDrink}`} className="text-xl font-medium">
                        <div className='relative h-48 mb-4'>

                            <Image  className='h-auto rounded-md shadow-md transition-all hover:scale-[1.05]' src={drink.strDrinkThumb} fill size='(max-width:768px) width:100%, (max-width:1200px) width:50%' alt={drink.strDrink} />
                        </div>

                        {drink.strDrink}
                        </Link>

                 </li>
                 )

            })}
    </ul>
  )
}

export default DrinkList