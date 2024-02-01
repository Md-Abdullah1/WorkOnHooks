// import { useState ,useEffect,useRef} from 'react'
// import NameContext from '../src/context/NameContext'
// import { createContext } from "react";
import "./App.css";
import CounterOne from "./components/CounterOne";
// import Child1 from "./components/Child1";
// import Counter from './components/Counter'
// import RefEffect from './components/RefEffect'
// import { Provider } from "react-redux";
// import store from "./StateContainer/Store";
// import BookContainer from "./components/BookContainer";
// import { Provider } from 'react'

// export const data = createContext()

function App() {

  
// const [count, setCount] = useState(0)

// const [inputValue, setInputValue] = useState("");
// const count1 = useRef(0);

// useEffect(() => {
// count.current = count1.current + 1;})

// const name = 'Ahil'
// const age = 21



  return (

    // <data.Provider value={[name,age]} >

    //   <Child1/>
    // </data.Provider>




    <>
      <CounterOne/>
      </>





    // <Provider store={store}>
    //   <div className="App flex  gap-6 mt-6 justify-center items-center w-full h-full">
    //     <BookContainer/>
    //   </div>
    // </Provider>

    // <div className=" flex  gap-6 mt-6 justify-center items-center w-full h-full">
    //   <Counter />
    //   <RefEffect />

    //   <input
    //     placeholder="write here"
    //     type="text"
    //     value={inputValue}
    //     onChange={(e) => setInputValue(e.target.value)}
    //   />
    //   <h1>Render Count: {count.current}</h1>
    // </div>
  )
}
export default App;

// // });
// return (
//
// )
// }
