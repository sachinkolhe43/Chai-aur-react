import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4">
        <div
          className="flex flex-wrap justify-center gap-03 shadow-lg bg-white px-3 py-2 rounded-3xl "
          style={{ background: "yellow" }}
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-3 shadow-lg rounded-full text-lg font-bold mx-3"
            style={{ backgroundColor: "red" }}
          >
            Click Me
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-3 shadow-lg rounded-full text-lg font-bold mx-3"
            style={{ backgroundColor: "pink" }}
          >
            Click Me
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-3 shadow-lg rounded-full text-lg font-bold mx-3 "
            style={{ backgroundColor: "orange" }}
          >
            Click Me
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-3 shadow-lg rounded-full text-lg font-bold mx-3"
            style={{ backgroundColor: "green" }}
          >
            Click Me
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-3 shadow-lg rounded-full text-lg font-bold mx-3"
            style={{ backgroundColor: "black", color : 'white' }}
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
