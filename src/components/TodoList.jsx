import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useMemo } from "react";

export default function TodoList({ isDone }) {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  // const filteredTodos = useMemo(
  //   todos.filter((todo) => todo.isDone === isDone),
  //   [todos]
  // );

  // useMemo는 함수와 의존성 배열을 인수로 받음
  const filteredTodos = useMemo(
    () => todos.filter((todo) => todo.isDone === isDone),
    [todos, isDone]
  );

  return (
    <section>
      <h2>{isDone ? "Done" : "Working..."}</h2>
      <ul>
        {filteredTodos.map((todo, index) => (
          <TodoItem todo={todo} isDone={isDone} key={index} />
        ))}
      </ul>
    </section>
  );
}
