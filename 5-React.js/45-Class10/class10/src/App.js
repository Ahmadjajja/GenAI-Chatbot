import { useState } from "react";
import './App.css';

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    console.log("event -> ", event)
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }


  return (
    <div className="App">
    <form onSubmit={handleSubmit}>

      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
    </div>
  );
}

export default App;


// // simple method
// input = "4"


// // pure method
// setInput("4")

