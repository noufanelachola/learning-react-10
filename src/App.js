import React , { useState} from "react";
import "./App.css";
import Windwidth from "./Windwidth";

function App() {

  const [show , setShow] = useState(true);
 
  function handleChange(){
    setShow(prevShow => !prevShow);
  }

  return (
    <div className="cont">
      <button onClick={handleChange}>Toggle Window Tracker</button>
      {show ? <Windwidth/> : null}
    </div>
  );
}

export default App;
