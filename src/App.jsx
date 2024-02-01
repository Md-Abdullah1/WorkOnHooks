// import { useState ,useEffect,useRef} from 'react'
// import NameContext from '../src/context/NameContext'
import './App.css'
// import Counter from './components/Counter'
// import RefEffect from './components/RefEffect'
import { Provider } from 'react-redux'
import store from './StateContainer/Store'
import BookContainer from './components/BookContainer'
// import { Provider } from 'react'
function App() {
  return (
    <Provider store={store}>
      <div className="App flex  gap-6 mt-6 justify-center items-center w-full h-full">
        <BookContainer/>
      </div>
    </Provider>
  )

  
}
export default App


// // const [count, setCount] = useState(0)

// //   const [inputValue, setInputValue] = useState("");
// // const count = useRef(0);

// // useEffect(() => {
// // count.current = count.current + 1;
// // });
// return (
//   <div className=' flex  gap-6 mt-6 justify-center items-center w-full h-full'>
//     <Counter /> 
//     <RefEffect/>

//   {/* <>
//     <input
//     placeholder='write here'
//       type="text"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//     />
//     <h1>Render Count: {count.current}</h1>
//   </> */}
//        </div>
// )
// }
