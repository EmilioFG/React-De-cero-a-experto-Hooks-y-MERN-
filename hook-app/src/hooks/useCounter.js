import { useState } from 'react';


export const useCounter = (initialValue = 0) => {

  const [counter, setcounter] = useState(initialValue);

  const handleIncrement = (value = 1) => setcounter(counter + value);

  const handleDecrement = (value = 1) => {
    if (counter === 0) return;
    setcounter(counter - value)
  };

  const handleReset = () => setcounter(initialValue);

  return {
    counter,
    handleIncrement,
    handleDecrement,
    handleReset,
  }
}
