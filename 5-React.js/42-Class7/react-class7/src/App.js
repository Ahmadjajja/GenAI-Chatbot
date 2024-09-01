import './App.css';

import { useState } from "react";

function App() {
  const [users, setUsers] = useState([{ id: 1, name: "Ahmad", education: "Graduate" }, { id: 2, name: "Ali", education: "Under-Graduate" }])

  const userHandler = () => {
    setUsers( [...users, { id: users[users.length + 1], name: "name...", education: "Graduate..." }] )
  }


  return (
    <div className="App">

      {users.map((user) => {
        return <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h2>Education: {user.education}</h2>
          <hr />
        </div>
      })}

      <button onClick={userHandler}>Add new user</button>
{/* 
      <div>
        <h1>Name: {users[0].name}</h1>
        <h2>Education: {users[0].education}</h2>
      </div>

      <hr />

      <div>
        <h1>Name: {users[1].name}</h1>
        <h2>Education: {users[1].education}</h2>
      </div>

      <hr /> */}

    </div>
  );
}

export default App;



// import './App.css';

// import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, [count]);

//   return <h1>I've rendered {count} times!</h1>;
// }

// export default App;
