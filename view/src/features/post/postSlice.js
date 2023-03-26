import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
  status: "idle",
};
const postSlice = createSlice({
  name: "postSlice",
  initialState: initialState,
  reducers: {
    setPostArr: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { setPostArr } = postSlice.actions;
export const selectPost = (state) => state.post;
export default postSlice.reducer;
