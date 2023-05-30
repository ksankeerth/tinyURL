import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { LoginResponse } from './../../types/index';
import APIClient from './../../utils/APIClient';
import { AuthState } from './state';

export const loginUser = createAsyncThunk<LoginResponse, { username: string; password: string }>('auth/login',
  async ({ username, password }, thunkApi) => {
    try {
      const apiClient = APIClient.getInstance('http://localhost:3000');
      const loginResponse: LoginResponse = await apiClient.login(username, password);
      if (loginResponse.error) {
        return thunkApi.rejectWithValue(loginResponse);
      } else {
        return thunkApi.fulfillWithValue(loginResponse);
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  });

const initialState: AuthState = {
  authenticated: false,
  token: '',
};

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(loginUser.fulfilled, (state, action) => {
    const { token } = action.payload;
    state.authenticated = true;
    state.token = token as string;
  });
  builder.addCase(loginUser.rejected, (state, action: any) => {
    // Show the message
    state.authenticated = false;
    state.error = action.payload;
  });
  builder.addCase(loginUser.pending, (state) => {
    state.authenticated = false;
    state.error = undefined;
    state.token = '';
  });
});
