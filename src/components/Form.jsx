import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => handleChange(e)} type="text" value={todo} />
        <button type="Submit">Add</button>
      </form>
    </div>
  );
}
