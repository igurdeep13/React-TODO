export default function TodoItem({ item }) {
  return (
    <div>
      <h3 key={item}>{item}</h3>
    </div>
  );
}
