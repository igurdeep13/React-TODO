import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(todo)
    console.log(todos)
  }

  function handleChange(e) {

    setTodo(e.target.value);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => handleChange(e)} type="text" value={todo} />
        <button>Add</button>
      </form>


    </div>
  );
}
