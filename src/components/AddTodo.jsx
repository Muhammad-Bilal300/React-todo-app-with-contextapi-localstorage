import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();

    if (title === "" || title === undefined) {
      alert("Filed can not be blank");
      return;
    }
    const newTodos = [
      ...todos,
      { id: uuidv4(), title: title, completed: false },
    ];
    setTodos(newTodos);
    setTitle("");
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="form-input-container">
      <input
        type="text"
        value={title}
        className="form-input"
        placeholder="Add Todo.."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="button" className="form-btn" onClick={addTodo}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
