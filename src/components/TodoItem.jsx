import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, isdone: !todo.isdone } : todo
    );
    setTodos(newArray);
  }

  const className = item.isdone? styles.completed : ""
  return (
    <div className={styles.itemDiv}>
      <h4 className={styles.todoItem} key={item}>
        <span className={className} onClick={() => handleClick(item.name)}> {item.name}</span>
        <button onClick={() => handleDelete(item)} className={styles.btn}>
          x
        </button>
      </h4>
      <hr className={styles.seperationLine} />
    </div>
  );
}
