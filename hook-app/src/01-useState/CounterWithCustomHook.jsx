import { useCounter } from '../hooks';


export const CounterWithCustomHook = () => {

  const { counter, handleIncrement, handleDecrement, handleReset } = useCounter(7);

  return (
    <>
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />
      <button className="btn btn-success" onClick={() => handleIncrement()}>+1</button>
      <button className="btn btn-success" onClick={handleReset}>Reset</button>
      <button className="btn btn-success" onClick={() => handleDecrement()}>-1</button>
    </>
  )
}