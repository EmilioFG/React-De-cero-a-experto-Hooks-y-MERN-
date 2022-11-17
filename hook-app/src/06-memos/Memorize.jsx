import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {

  const { counter, handleIncrement } = useCounter(7);

  const [show, setShow] = useState(true);


  return (
    <>
      <h1>Counter: <Small value={counter} /></h1>
      <hr />

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