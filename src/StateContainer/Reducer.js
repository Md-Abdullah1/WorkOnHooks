import { buy_book, store_book } from "./ActionTypes"
// import { buyBook ,storeBook} from "./State"

const  initialValue = {
    noOfBooks:50,
}

const Reducer = (state = initialValue,action)=>{
    switch(action.type){
        case buy_book : return{
            ...state,noOfBooks:state.noOfBooks -1
        }
        case store_book : return{
            ...state,noOfBooks:state.noOfBooks + 1
        }
        default : return state
    }
}
export  default Reducer;