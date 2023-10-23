import { createContext, useContext, useState } from "react";

// create context
let CounterContext = createContext({});

// create provider
export let CounterContextProvider = (props) => {
  let [count, setCount] = useState(0);
  let incCounter = () => {
    setCount(++count);
  };

  let values = {
    count,
    incCounter,
  };
  return (
    <CounterContext.Provider value={values}>
      {props.children}
    </CounterContext.Provider>
  );
};

// custom hook
export let useCounterContext = () => {
  return useContext(CounterContext);
};
