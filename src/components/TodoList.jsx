import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {
  const todos = useSelector((state) => state.todo);
  console.log(todos);
  return (
    <section>
      <h2>{isDone ? "Done" : "Working..."}</h2>
      <ul>
        {todos.map((todo) =>
          todo.isDone === isDone ? <TodoItem key={todo} todo={todo} /> : <></>
        )}
      </ul>
    </section>
  );
}
