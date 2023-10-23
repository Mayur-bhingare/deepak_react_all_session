import { useCounterContext } from "./context/counter.context";

let Counter = () => {
  let { count, incCounter } = useCounterContext();
  return (
    <center>
      <h1>{count}</h1>
      <button onClick={incCounter}>INC</button>
    </center>
  );
};
export default Counter;
