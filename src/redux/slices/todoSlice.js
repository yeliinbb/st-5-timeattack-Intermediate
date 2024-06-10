import { createSlice } from "@reduxjs/toolkit";

// TODO: todoSlice 를 작성하세요.
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    // completeTodo : (state, action) => {
    //     return state.map((todo) => todo.)
    // }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
