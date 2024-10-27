import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "0123456789";
    if (isCharacterAllowed) str += `!@#$%^&*()_+[]{}|;:'",.<>?/\\~\`-=`;

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumberAllowed, isCharacterAllowed]);

  return (
    <>
      <h1 className="text-2xl text-center text-white mt-7">
        Magic of React | Password Generator
      </h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 bg-gray-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 py-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor=""> Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumberAllowed}
              id="numberInput"
              onChange={() => {
                setIsNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor=""> Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isCharacterAllowed}
              id="characterInput"
              onChange={() => {
                setIsNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor=""> charcaters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
