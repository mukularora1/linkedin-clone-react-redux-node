import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  userId: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).id
    : null,
  token: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).token
    : null,
  status: 'idle',
};
const userSlice = createSlice({
  name: 'postSlice',
  initialState: initialState,
  reducers: {
    setPostArr: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export default userSlice.reducer;
export const selectUserId = (state) => state.user;
console.log(userSlice, selectUserId);
