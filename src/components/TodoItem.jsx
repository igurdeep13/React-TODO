import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }



  return (
    <div className={styles.itemDiv}>
      <h4 onclick={handleClick} className={styles.todoItem} key={item}>
        {item.name}{" "}
        <button onClick={() => handleDelete(item)} className={styles.btn}>
          x
        </button>
      </h4>
      <hr className={styles.seperationLine} />
    </div>
  );
}
