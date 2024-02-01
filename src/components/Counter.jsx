import { useState } from "react";


// usestate hook 
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className=" p-2 border-2 w-full text-center ">
        {" "}
        <h3 className="text-blue-300 text-xl">{count}</h3>
      </div>
      <div className="btns flex justify-center items-center gap-3 ">
        <button
          className="btn p-2 border-2 shadow rounded-lg text-white bg-gray-500"
          onClick={() => setCount(count + 1)}
        >
          Increament
        </button>
        <button
          className="btn p-2 border-2 shadow rounded-lg text-white bg-gray-500"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="btn p-2 border-2 shadow rounded-lg text-white bg-gray-500"
          onClick={() => setCount(count - 1)}
        >
          Decreament
        </button>
      </div>
    </div>
  );
};

export default Counter;
