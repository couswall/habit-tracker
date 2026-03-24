import {createAsyncThunk} from '@reduxjs/toolkit';

import {LoginUseCase} from '@/features/auth/application/use-cases/login.use-case';
import type {LoginCredentials} from '@/features/auth/domain/auth.entity';
import {authRepository} from '@/features/auth/infrastructure/repositories';

export const login = createAsyncThunk<string, LoginCredentials, {rejectValue: string}>(
  'auth/login',
  async (credentials, {rejectWithValue}) => {
    try {
      const useCase = new LoginUseCase(authRepository);
      const token = await useCase.execute(credentials);
      return token.accessToken;
    } catch (err) {
      if (err instanceof Error) return rejectWithValue(err.message);
      return rejectWithValue('Login failed');
    }
  }
);
