import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {
  return (
    <section>
      <h2>{isDone ? "Done" : "Working..."}</h2>
      <ul>
        <TodoItem isDone={isDone} />
      </ul>
    </section>
  );
}
