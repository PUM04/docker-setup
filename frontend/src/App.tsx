import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useWasm } from "./hooks/wasm";
import { useWasmFile } from "./hooks/wasm";
// This file needs to be compiled from C++ source with emcc.
//import createIncrementModule from "./increment";

function App() {
  const [count, setCount] = useState(0);

  // Two different ways to load the WebAssembly
  // useWasm uses the Emscripten compiled JS Module together with the WebAssembly file.
  // useWasmFile uses the raw WebAssembly binary.
  //const wasm = useWasm(createIncrementModule);
  const rawWasm = useWasmFile("increment.wasm");

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            // comment out here to test a different type of WebAssembly call
            setCount((count) => rawWasm.increment(count));
            // setCount((count) =>
            //   rawWasm.ccall("increment", "number", ["number"], [count])
            // );
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
