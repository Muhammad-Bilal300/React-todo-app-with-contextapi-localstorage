import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const [todos, setTodos] = useContext(TodoContext);
  return (
    <div>
      {todos.length >= 1 ? (
        todos.map((item) => {
          return <Todo key={item.id} item={item} />;
        })
      ) : (
        <h4>No todo found. Please add some todo...</h4>
      )}
    </div>
  );
};

export default TodoList;
