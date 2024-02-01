import { useDispatch, useSelector } from "react-redux"
import { buyBook, storeBook } from "../StateContainer/State"
// import 

const BookContainer = () => {
const Books = useSelector(state => state.noOfBooks)
const dispatch = useDispatch()
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
        <p>Books In Store</p>
        <h2 className="text-blue-500 text-lg font-bold">No of Books :{Books}</h2>
        <button className="btn p-2 bg-light text-blue-500  border-2"  onClick={()=>dispatch(storeBook())}>Store book</button>
        <button className="btn p-2 bg-light text-blue-500  border-2"  onClick={()=>dispatch(buyBook())}>Remove book</button>
    </div>
  )
}

export default BookContainer