// src/App.tsx

import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Slideshow from "./components/Slideshow";
import BlurSlideshow from "./components/BlurSlideshow";
import ShutterSlideshow from "./components/ShutterSlideshow";
import RealisticApertureSlideshow from "./components/RealisticApertureSlideshow";
import ApertureSlideshow from "./components/ApertureSlideshow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>      
      <ApertureSlideshow />
      <RealisticApertureSlideshow />
      <ShutterSlideshow />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Slideshow />
      <BlurSlideshow />
      <h1>Vite + React</h1> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
