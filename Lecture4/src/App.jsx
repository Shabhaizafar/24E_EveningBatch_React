import './App.css'
import Props from './Props';

function App() {
  var myname = "Raj";
  return (
    <>
      <h1>How To  pass Props(Property) in React ?</h1>
      <Props value={myname} value2={myname}/>
    </>
  )
}

export default App
