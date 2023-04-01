import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/post/postSlice';
const reducer = {
  counter: counterReducer,
  post: postReducer,
};

export const store = configureStore({
  reducer,
});
