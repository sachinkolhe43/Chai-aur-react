import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  
  const [count, setCount] = useState(0);

  let myObj = {
    username : 'Sachin',
    email : 'sachin@gmail.com'
  }

  let arr = [1,2,3,4]

  return (
    <>
      <h1 className="bg-red-400 text-black p-5 rounded-xl mb-4">
        Hello Tailwind magic | Sachin
      </h1>

     <Card username="Sachin" someObj={myObj}/>
     <Card username ="Nikhil" someObj = {myObj}/>
     
    
     
    </>
  );
}

export default App;
