import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import './'


const Page = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);


  const handleSubmit = () => {
    if (!input.trim()) return; 

    if (editIndex !== null) {
      tasks[editIndex] = input;
      setTasks([...tasks]); 
      setEditIndex(null); 
    } else {
      setTasks([...tasks, input]);
    }

    setInput(""); 
  };

  // Deleting a Task
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks); 
  };

  // Editing a Task
  const handleEdit = (index) => {
    setInput(tasks[index]); 
    setEditIndex(index); 
  };

  return (
    <div className="box">
      <h1>Todo List</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Enter Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => handleEdit(index)}>
              <MdEdit />
            </button>
            <button onClick={() => handleDelete(index)}>
              <MdDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
