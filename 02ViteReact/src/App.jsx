import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 0;
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    // console.log(counter);
  }
  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Learn React </h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value: {counter} </button>
      <br />
      <button onClick={removeValue}>Remove value: {counter} </button>
    </>
  )
}

export default App
