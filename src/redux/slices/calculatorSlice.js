// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};
// 입력갑 상태 관리하는 함수
const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      const amount = action.payload;
      state.result += amount;
    },
    minusNumber: (state, action) => {
      const amount = action.payload;
      state.result -= amount;
    },
  },
});

export const { addNumber, minusNumber } = calculatorSlice.actions;
export default calculatorSlice.reducer;
