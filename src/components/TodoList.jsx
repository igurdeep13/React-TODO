import { useState } from "react";
export default function TodoList({todos}) {
  
  return (
    <div>
      {todos.map((item) => (
        <h3 key={item}>{item}</h3>
      ))}
    </div>
  );
}
