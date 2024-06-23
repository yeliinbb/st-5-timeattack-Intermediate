import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

// TODO: todoSlice 를 작성하세요.
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      console.log(action.payload);
      const id = action.payload;
      // filter는 새로운 배열을 반환하기 때문에 state.todos에 직접 할당해줘야함.
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    completeTodo: (state, action) => {
      // console.log(action.payload);
      const id = action.payload;
      // map은 새로운 배열을 반환하기 때문에 state.todos에 직접 할당해줘야함.
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
