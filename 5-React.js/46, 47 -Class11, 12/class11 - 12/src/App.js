import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  // Step 1: Setting initial state for the CRUD operations
  // tasks, task, isEditing, currentTask
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://retoolapi.v/rOoy1D/data'); // Replace with your API URL
            setTasks(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, []); // Empty dependency array means it runs once on mount

  // Step 2: Handling input change
  const handleInputChange = (e) => {
    setTask(e.target.value)
  }

  // Step 3: Adding a task (Create operation)
  const handleAddTask = () => {
    // tasks == [], task = 'ahmad'  
    // [
    //   {id: 1, name: "Ahmad"},
    //   {id: 2, name: "Amaar"},

    // ]

    if (task !== '') {
      setTasks([...tasks, { id: tasks.length + 1, name: task }])
      setTask('');
    }

  }
  // Step 4: Handling edit state
  const handleEditTask = (t) => {
    setIsEditing(true)
    setTask(t.name)
    setCurrentTask(t)

  }
  // Step 5: Saving an edited task (Update operation)
  const handleSaveEditTask = () => {
    setTasks(
      tasks.map((item) => 
      item.id == currentTask.id ? {...item, name: task  } : item
      )
    )
    setIsEditing(false)
    setTask('')
    setCurrentTask(null)
  }
  // Step 6: Deleting a task (Delete operation)
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>CRUD App with React.js</h1>

      {/* Input to add or edit task */}
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Add a task..."
        />
        {!isEditing ? (
          <button onClick={handleAddTask}>Add Task</button>
        ) : (
          <button onClick={handleSaveEditTask}>Save Task</button>
        )}

      </div>
      {/* Only reading the data from tasks */}
      <div style={{ textAlign: "center" }}>
        <ul>
          {
            tasks.map((t) => (
              <li key={t.id}>
                {t.name}
                <button onClick={() => handleEditTask(t)}>Edit</button>
                <button onClick={() => handleDeleteTask(t.id)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
