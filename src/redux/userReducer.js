import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from '../utils/LocalStorage';
import customFetch from '../utils/axios';

const initialState = {
  isLoading: false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
  userId: null,
};

export const setUserId = (userId) => ({
  type: 'user/setUserId',
  payload: userId,
});

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ username, password }, thunkAPI) => {
    try {
      const resp = await customFetch.post('/api/v1/register', {
        user: { username, password },
      });
      const user = resp.data;
      localStorage.setItem('isAuthenticated', true);
      thunkAPI.dispatch(setUserId(user.id));
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Error during registration. Please try again.',
      );
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ username, password }, thunkAPI) => {
    try {
      const resp = await customFetch.post('/api/v1/login', {
        username,
        password,
      });
      const user = resp.data;
      localStorage.setItem('isAuthenticated', true);
      thunkAPI.dispatch(setUserId(user.id));
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Error during login. Please check your credentials and try again.',
      );
    }
  },
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, thunkAPI) => {
    try {
      localStorage.setItem('isAuthenticated', 'false');
      removeUserFromLocalStorage();
      return 'Logout successful';
    } catch (error) {
      return thunkAPI.rejectWithValue('Logout failed');
    }
  },
);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => ({ ...state, userId: action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const user = payload;
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
        // eslint-disable-next-line no-param-reassign
        state.user = user;
        // eslint-disable-next-line no-param-reassign
        state.isAuthenticated = true;
        addUserToLocalStorage(user);
        toast.success(`Hello 👋 ${user.username}`);
      })
      .addCase(registerUser.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
        toast.error('Username already exists or password too short');
      })
      .addCase(loginUser.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const user = payload;
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
        // eslint-disable-next-line no-param-reassign
        state.user = user;
        // eslint-disable-next-line no-param-reassign
        state.isAuthenticated = true;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back 😀 ${user.username}`);
      })
      .addCase(loginUser.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
        toast.error('Invalid username or password 😔');
      });
  },
});

export const selectUserId = (state) => state.user.userId;

export default userSlice.reducer;
