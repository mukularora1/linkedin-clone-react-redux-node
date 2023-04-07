import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/post/postSlice';
import userReducer from '../features/user/userSlice';
const reducer = {
  counter: counterReducer,
  post: postReducer,
  user: userReducer,
};

export const store = configureStore({
  reducer,
});
