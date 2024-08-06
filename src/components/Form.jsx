import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", isdone: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", isdone: false });
  }  

  function handleChange(e) {
    setTodo({ name: e.target.value, isdone: false });
  }

  return (
    <form className={styles.modernForm} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        onChange={(e) => handleChange(e)}
        type="text"
        value={todo.name}
        placeholder="Enter the task..."
      />
      <button className={styles.modernButton} type="Submit">
        Add
      </button>
    </form>
  );
}
