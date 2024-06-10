// Hint: TodoItem 컴포넌트는 props 를 받습니다.
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, removeTodo } from "../redux/slices/todoSlice";
export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {todo.title}</p>
        <p>내용: {todo.body}</p>
      </section>
      <section>
        <button onClick={() => dispatch(completeTodo(todo.id))}>완료</button>
        <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
      </section>
    </li>
  );
}
