import { useContext} from 'react'
import { data } from '../App'

const Child1 = () => {

    const [name,age ] = useContext(data)
  return (
    <div>
        <h1 className='text-blue-300 text-xl font-bold'>my name is {name}</h1>
        <h4 className='text-blue-300 text-xl font-bold'>age is {age}</h4>
    </div>
  )
}

export default Child1