import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userId: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).id
    : null,
  token: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).token
    : null,
  status: 'idle',
  profileImgUrl: null,
  baseURL: 'http://localhost:3000/',
  userName: '',
  bgImgUrl: null,
  isNextClicked: true,
};

export const signIn = createAsyncThunk(
  'userSlice/signIn',
  async (credentials) => {
    const response = await axios.post('sign-in', credentials);
    return response.data;
  }
);

export const uploadProfileImg = createAsyncThunk(
  'userSlice/uploadProfileImg',
  async (data) => {
    const response = await axios.post('upload-profile-img', data);
    return response.data;
  }
);
export const uploadUserName = createAsyncThunk(
  'userSlice/uploadUserName',
  async (data) => {
    const response = await axios.post('upload-user-name', data);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.userName = action.payload;
    },
    setIsNextClicked: (state) => {
      state.isNextClicked = !state.isNextClicked;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userId = action.payload.id;
        state.token = action.payload.token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(uploadProfileImg.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(uploadProfileImg.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profileImgUrl = action.payload.url;
      })
      .addCase(uploadProfileImg.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(uploadUserName.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(uploadUserName.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(uploadUserName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
export const { setName, setIsNextClicked } = userSlice.actions;
export const selectUser = (state) => state.user;
