// Hint: TodoItem 컴포넌트는 props 를 받습니다.
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/slices/todoSlice";
export default function TodoItem({ isDone }) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  console.log(todo);

  const completeTodo = (prev) =>
    prev.map((list) => (isDone ? [...list, !isDone] : list));
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
        <p>제목: 이거슨제목</p>
        <p>내용: 이거슨내용</p>
      </section>
      <section>
        <button onClick={completeTodo}>완료</button>
        <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
      </section>
    </li>
  );
}
