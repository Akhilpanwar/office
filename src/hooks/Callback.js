import React, { useState, useCallback, useEffect, useMemo } from "react";
import "./callback.css";
import user

const Hookslearn = () => {
  const [counter, setCounter] = useState(0);
  const [callbackValue, setCallbackValue] = useState(0);
  const [CallbackNumber, setCallbackNumber] = useState();

  const [squaredNumber, setSquaredNumber] = useState();
  const [effectValue, setEffectValue] = useState(0);
  const [effectNumber, setEffectNumber] = useState();
  const [memoValue, setMemoValue] = useState(0);
  const [memoNumber, setMemoNumber] = useState();

  //--------------------------useEffect use----------------------->
  useEffect(() => {
    setEffectNumber(effectValue * effectValue * effectValue);
    console.log(" from useEffect====>I am rendering ");
  }, [effectValue]);
  //--------------------------useCallback--------------------->
  let squaredCallback = useCallback(() => {
    setCallbackNumber(callbackValue * callbackValue);
    console.log("from useCallback=======>I am rendering");
  }, [callbackValue]);
  //<-----------------------useMemo-------------------------->

  let squaredMemo = useMemo(() => {
    setMemoNumber(memoValue * memoValue);
    console.log("from useMemo=========>I am  rendering");
  }, [memoValue]);
  //-------------------------------------------------------------->
  let increment = () => {
    setCounter(counter + 1);
    console.log("from incement=============>Im rendering");
  };
  let decrement = () => {
    setCounter(counter - 1);
    console.log("from Decrement=============>I m rendering");
  };
  return (
    <div>
      {/* <--------------------------useEffect use----------------------->  */}
      <div className="main">
        <h1>useEffect</h1>
        <input
          type="number"
          value={effectValue}
          onChange={(e) => setEffectValue(e.target.value)}
        />
        <h1>useEffect:{effectNumber}</h1>
      </div>
      {/* <--------------------------useMemo use----------------------->  */}
      <div className="main">
        <h1>Use Memo</h1>
        <input
          type="number"
          value={memoValue}
          onChange={(e) => setMemoValue(e.target.value)}
        />

        <h1>{memoNumber}</h1>
      </div>
      {/* <--------------------------useCallback use----------------------->  */}
      <div className="main">
        <h1>useCallback</h1>
        <input
          type="number"
          value={callbackValue}
          onChange={(e) => setCallbackValue(e.target.value)}
        />
        <button onClick={squaredCallback}>call me</button>
        <h1>{CallbackNumber}</h1>
        

      </div>
      <div className="main">
        <button onClick={increment}>+</button>
        <h1>{counter}</h1>

        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Hookslearn;
