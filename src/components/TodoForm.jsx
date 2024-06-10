import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      return alert("내용을 모두 입력해주세요.");
    }

    const newTodo = { title, body, id: Date.now() };
    dispatch(addTodo(newTodo));
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>내용: </label>
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button>추가</button>
    </form>
  );
}
