import {createSlice} from '@reduxjs/toolkit';

import {login, logout, restoreSession} from '@/features/auth/presentation/store/auth.thunks';

interface AuthState {
  token: string | null;
  isLoading: boolean;
  isRehydrating: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  isLoading: false,
  isRehydrating: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Login failed';
      })
      .addCase(restoreSession.fulfilled, (state, action) => {
        state.isRehydrating = false;
        state.token = action.payload;
      })
      .addCase(restoreSession.rejected, (state) => {
        state.isRehydrating = false;
        state.token = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
      })
      .addCase(logout.rejected, (state) => {
        state.token = null;
      });
  },
});

export default authSlice.reducer;
