import {AxiosError} from 'axios';

import type {AuthToken, LoginCredentials, RegisterData} from '@/features/auth/domain/auth.entity';
import type {IAuthRepository} from '@/features/auth/domain/auth.repository';
import {httpClient} from '@/shared/api/httpClient';

const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
} as const;

export const isAxiosErrorWithDetail = (err: unknown): err is AxiosError<{detail: string}> => {
  return err instanceof AxiosError && typeof err.response?.data?.detail === 'string';
};

export class AuthApiRepository implements IAuthRepository {
  async login(credentials: LoginCredentials): Promise<AuthToken> {
    try {
      const {data} = await httpClient.post<{access_token: string}>(
        AUTH_ENDPOINTS.LOGIN,
        credentials
      );
      return {accessToken: data.access_token};
    } catch (err) {
      if (isAxiosErrorWithDetail(err)) {
        throw new Error(err.response?.data?.detail ?? 'Login failed');
      }
      throw new Error('Login failed');
    }
  }

  async register(data: RegisterData): Promise<void> {
    try {
      const body = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
      };
      await httpClient.post(AUTH_ENDPOINTS.REGISTER, body);
    } catch (err) {
      if (isAxiosErrorWithDetail(err)) {
        throw new Error(err.response?.data?.detail ?? 'Register failed');
      }
      throw new Error('Register failed');
    }
  }
}
