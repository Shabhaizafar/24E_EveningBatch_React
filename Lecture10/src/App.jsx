import './App.css'
import useCustom from './useCustom'

function App() {
  const {counter,increment,decrement,reset} = useCustom();
  return (
    <>
      <h1>Custom Hook</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
