import './App.css'
import MyClass from './MyClass'
// import Props2 from './Props2'


function App() {
  const obj1 = new MyClass("Zafar","Shabhai");
  const obj2 = new MyClass("Raj","Shah");
  return (
    <>
      <h2>Using Class</h2>      
      {obj1.display()}
      {obj2.display()}
    </>
  )
}

export default App



// import './App.css'
// // import Props2 from './Props2'


// function App() {
//   var myname = "Zafar";
//   var lastname = "Shabhai";

//   return (
//     <>
//       <h2>Props</h2>
//       <h3>My name is {myname}</h3>
//       <Props2 xyz={myname} abc={lastname}/>
//     </>
//   )
// }

// export default App
