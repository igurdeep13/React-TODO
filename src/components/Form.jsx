import { useState } from "react";
import styles from "./form.module.css";

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
    <form className={styles.modernForm} onSubmit={handleSubmit}>
      <input className={styles.modernInput} onChange={(e) => handleChange(e)} type="text" value={todo} placeholder="Enter the task..."/>
      <button className={styles.modernButton} type="Submit">Add</button>
    </form>
  );
}
