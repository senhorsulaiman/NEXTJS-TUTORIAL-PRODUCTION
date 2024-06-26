
import Link from "next/link";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import drinkImg from './drink.jpg';
import Image from "next/image";
const getSingleDrink = async (id) => {
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`${url}${id}`);
  //throw error
  if (!res.ok) {
    throw new Error('failed to fetch a drink...');
  }
  return res.json();
}
const SingleDrinkpage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgUrl = data?.drinks[0]?.strDrinkThumb;
  console.log(data);
  return (
    <div>

      <Link href='/drinks' className="btn  btn-secondary mb-8 btn-sm w-[200px]">Back to drinks</Link>
      <Image src={imgUrl} className="w-60 h-auto rounded-lg shadow-lg" width={300} height={300} priority alt={title} />
      <p className="text-xl font-medium mt-4">{title}</p>
    </div>
  )
}

export default SingleDrinkpage

