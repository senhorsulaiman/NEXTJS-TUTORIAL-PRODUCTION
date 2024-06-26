import Link from "next/link";

const links=[
    {href:'./prisma-example',lable:'prisma'},
    {href:'./client',lable:'client'},
    {href:'./drinks',lable:'drinks'},
    {href:'./task',lable:'task'},
];

function Navbar() {
  return (
    <nav className="bg-base-300 py-4">

        <div className="navbar px-8 max-w-6xl mx-auto flex-col md:flex-row">

            <Link href='./' className="btn btn-primary ">Logo</Link>

            <ul className="menu menu-horizontal md:ml-8 gap-3" >

                    {links.map((links)=>{

                        return <li key={links.href}>

                            <Link href={links.href} className="capitalize">

                                {links.lable}
                            </Link>
                        </li>
                    })}
            </ul>
        </div>

    </nav>
  )
}

export default Navbar
