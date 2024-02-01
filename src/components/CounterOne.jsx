import { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="w-full flex flex-col justify-center items-center h-[100vh] gap-5">
      <h1 className="text-2xl text-purple-700 font-bold">
        UseReducer Hook in react
      </h1>
      <div className="flex flex-col p-2 justify-center items-center border-2 w-fit border-purple-300">
        <h3 className="text-xl font-bold p-2 text-purple-300">{count}</h3>
        <div className="flex gap-2 ">
          <button
            type="button"
            className="btn text-purple-200 p-2 text-lg rounded-md  bg-purple-700"
            onClick={() => dispatch("increament")}
          >
            Increament
          </button>
          <button
            type="button"
            className="btn text-purple-200 p-2 text-lg rounded-md bg-purple-700"
            onClick={() => dispatch("reset")}
          >
            Reset
          </button>
          <button
            type="button"
            className="btn text-purple-200 p-2 text-lg rounded-md bg-purple-700"
            onClick={() => dispatch("decreament")}
          >
            Decreament
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;
