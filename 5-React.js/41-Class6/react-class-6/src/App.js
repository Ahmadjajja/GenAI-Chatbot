import { useState } from "react";
import './App.css';

function App() {
  // const [shooted, setShooted] = useState(false)
  const [col, setCol] = useState("")

  // const shoot = (name) => {
  //   setShooted(true)

  // }

  // const changeHandler = (event) => {
  //   console.log("event : ", event)
  // }

  return (
    <div className="App">

      {/* <button onClick={() => shoot("Marsad")}>
        Shoot
      </button>
      {shooted
        &&
        <h1 style={{color: "green"}}> Great Shoot by Marsad !!! </h1>
      }
      <br />
      <input type="text" onChange={(e) => changeHandler(e)} /> */}

      <p onClick={() => setCol("green")} style={{ color: col, cursor: "pointer" }}>set green color</p>
      <p onClick={() => setCol("yellow")} style={{ color: col, cursor: "pointer" }}>set yellow color</p>
      <p onClick={() => setCol("pink")} style={{ color: col, cursor: "pointer" }}>set pink color</p>
      <p onClick={() => setCol("blue")} style={{ color: col, cursor: "pointer" }}>set blue color</p>

    </div>
  );

}

export default App;
