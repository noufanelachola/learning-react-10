import React , {useEffect, useState} from "react";
import "./App.css";

function App() {

  const [show , setShow] = useState(true);
  const [wind , setWind] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize",() => {
      setWind(window.innerWidth);
    })
  },[])

  function handleChange(){
    setShow(prevShow => !prevShow);
  }

  return (
    <div className="cont">
      <button onClick={handleChange}>Toggle Window Tracker</button>
      {show ? <h2>{`Window width : ${wind}`}</h2> : null}
    </div>
  );
}

export default App;
