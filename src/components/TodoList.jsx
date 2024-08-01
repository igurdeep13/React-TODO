import { useState } from "react";
import styles from "./TodoList.module.css"
import TodoItem from "./TodoItem";
export default function TodoList({ todos }) {
  return (
    <div className={styles.todoList}>
      {todos.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
}
