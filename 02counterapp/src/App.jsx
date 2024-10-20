
import { useState } from 'react'
import './App.css'

function App() {
 
  
  let [counter, setCounter] = useState(15)
  const addValue = () =>{
    if (counter < 20){
      counter += 1
      setCounter(counter)
      console.log(counter)
    }
    console.log("counter limit")
  }

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
      console.log(counter)
    }
    console.debug("counter limit")
  }

  return (
    <>
     <h1>Chai Aur React | Sachin</h1>
     <h2>Counter value : {counter}</h2>

     <button
     onClick={addValue}>Add vlaue</button>
     <br /> <br />
     <button 
     onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
