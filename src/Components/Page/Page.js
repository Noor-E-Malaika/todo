import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import "./Page.css";

const Page = () => {
  const [input, setInput] = useState("");
  const [enter, setEnter] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleSubmit = () => {
    if (input.trim()) {
      if (isEditing) {
        const updatedTasks = enter.map((task, index) =>
          index === currentIndex ? input : task
        );
        setEnter(updatedTasks);
        setIsEditing(false);
      } else {
        setEnter([...enter, input]);
      }
      setInput("");
    }
  };

  const deleteTask = (index) => {
    const filteredTasks = enter.filter((id, i) => i !== index);
    setEnter(filteredTasks);
  };

  const editTask = (index) => {
    setInput(enter[index]);
    setIsEditing(true);
    setCurrentIndex(index);
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
        <button onClick={handleSubmit}>{isEditing ? "Update" : "Add Task"}</button>
      </div>
      <ul>
        {enter.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button id="edit" onClick={() => editTask(index)}>
              <MdEdit />
            </button>
            <button id="del" onClick={() => deleteTask(index)}>
              <MdDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;