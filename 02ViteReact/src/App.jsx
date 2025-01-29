import './App.css'

function App() {
  let counter = 0;
  const addValue = () => {
    counter += 1;
    console.log(counter);
  }
  return (
    <>
      <h1>Learn React </h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value </button>
      <br />
      <button>Remove value </button>
    </>
  )
}

export default App
