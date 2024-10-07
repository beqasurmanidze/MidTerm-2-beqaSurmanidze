import React, { useState } from "react";

function TodoList() {
  const [Value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    // Value -
    // setTodos((todos) => [...setValue, todos]);
    setTodos([...todos, Value]);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={Value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter a todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
