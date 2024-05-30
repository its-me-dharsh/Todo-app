import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([{ text: "Eat", completed: false }]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function toggleCompletion(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="field">
      <div>
        <h1 className="header" style={{ textAlign: 'center' , paddingBottom:"50px"}}>To Do List</h1>
        <div className="task-field">
          <h3 className="text">Enter your tasks:</h3>
          <input
            type="text"
            placeholder="Enter your tasks"
            value={newTask}
            onChange={handleInputChange}
            
            style={{backgroundColor:"white", textAlign:"center"}}
          />
        </div>
        <button className="button" onClick={addTask}>Add Task</button>
      </div> 

      <ol className="task-names">
        {tasks.map((task, index) => (
          <li className="lists" key={index}>
            <p className={`work ${task.completed ? 'completed' : ''}`}>
              <span className="text">
                {task.text}
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="complete-button" onClick={() => toggleCompletion(index)}>
                  {task.completed ? 'Unmark' : 'Complete'}
                </button>
              </span>
            </p>
          </li>
        ))}
      </ol>
     </div>
  );
}

export default Todo;
