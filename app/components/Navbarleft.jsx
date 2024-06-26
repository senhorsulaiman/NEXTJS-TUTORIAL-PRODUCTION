import React from 'react'
import Link from 'next/link';
const links = [


  { href: './client', lable: 'client' },
  { href: './drinks', lable: 'drinks' },
  { href: './task', lable: 'task' },
  {href:'./prisma-example',lable:'prisma'},
  {href:'./adds',lable:'adds'},

];
const Navbarleft = () => {
  return (

    <div className=' bg-base-200  max-w-xs w-full min-h-[100%] max-h-100%'>
      <ul className="gap-3 menu menu-xs">
        {links.map((links) => {
          return <li key={links.href}>
            <Link href={links.href} className="capitalize">
              {links.lable}
            </Link>
          </li>
        })}
      </ul>
    </div>

  )
}

export default Navbarleft