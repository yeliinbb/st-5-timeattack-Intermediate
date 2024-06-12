import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useMemo } from "react";

export default function TodoList({ isDone }) {
  const todos = useSelector((state) => state.todo);
  console.log(todos);

  const filteredTodos = useMemo(
    todos.filter((todo) => todo.isDone === isDone),
    [todos]
  );

  return (
    <section>
      <h2>{isDone ? "Done" : "Working..."}</h2>
      <ul>
        {filteredTodos.map((todo) =>
          todo.isDone === isDone ? <TodoItem key={todo} todo={todo} /> : <></>
        )}
      </ul>
    </section>
  );
}
