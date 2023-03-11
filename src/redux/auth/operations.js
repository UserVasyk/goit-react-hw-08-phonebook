import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (registerUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', registerUser);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (logInUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', logInUser);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
