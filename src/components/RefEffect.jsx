import { useState, useRef, useEffect } from "react";

const RefEffect = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return (
    <div className="container-fluid border-2  border-blue-100 p-2">
      <input className="border-2 outline-none p-2"
      placeholder="write here"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2 className="text-blue-300 text-lg font-bold p-2">Current Value: {inputValue}</h2>
      <h2 className="text-blue-300 text-lg font-bold p-2">Previous Value: {previousInputValue.current}</h2>
    </div>
  );
};

export default RefEffect;
