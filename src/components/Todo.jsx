import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ item }) => {
  const [todos, setTodos] = useContext(TodoContext);

  const completeTodo = (e) => {
    const filteredTodos = todos.map((item) => {
      if (item.id === e.target.value) {
        item.completed = false;
        if (e.target.checked) {
          item.completed = true;
        }
      }
      return item;
    });
    setTodos(filteredTodos);
  };

  const deleteTodo = (e) => {
    const filteredTodos = todos.filter((item) => {
      return item.id !== e.target.id;
    });
    setTodos(filteredTodos);
  };

  const isCompleted = item.completed ? "checked" : "";

  return (
    <div>
      <p className="todo-item">
        <input
          type="checkbox"
          checked={isCompleted}
          name=""
          id={item.id}
          value={item.id}
          onChange={(e) => completeTodo(e)}
        />
        <label htmlFor={item.id}>{item.title}</label>

        <button
          type="button"
          onClick={(e) => deleteTodo(e)}
          className="btn-delete"
          id={item.id}
        >
          Delete
        </button>
      </p>
    </div>
  );
};

export default Todo;
