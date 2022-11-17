import { useState, useMemo } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";


const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('superzombie');
  }
  return `${iterationNumber} iteraciones realizadas`
}


export const MemoHook = () => {

  const { counter, handleIncrement } = useCounter(4000);

  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Counter: <Small value={counter} /></h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button
        className="btn btn-success"
        onClick={() => handleIncrement()}
      >
        +1
      </button>

      <button
        className="btn btn-outline-success"
        onClick={() => setShow(!show)}
      >
        show / hide {JSON.stringify(show)}
      </button>
    </>
  )
}