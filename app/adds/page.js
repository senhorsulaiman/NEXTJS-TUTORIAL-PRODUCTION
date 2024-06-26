import AdForm from '../components/AdForm'
import AdList from '../components/AdList'
export const dynamic = 'force-dynamic';
const pages = () => {
    return (
        <div className='max-w-xl'>

            <h2 className='font-medium mb-2'>You’re almost there!</h2>
            <p >Include as much details and pictures as possible!</p>
            <AdForm />
            <AdList />
        </div>
    )
}

export default pages