import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  
  function handleChange(e) {
    console.log(e);
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
