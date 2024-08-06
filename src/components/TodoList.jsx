import { useState } from "react";
import styles from "./todoList.module.css"
import TodoItem from "./TodoItem";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.todoList}>
      {todos.map((item) => (
        <TodoItem key={item.name} item={item} todos={todos}  setTodos={setTodos}/>
      ))}
    </div>
  );
}
