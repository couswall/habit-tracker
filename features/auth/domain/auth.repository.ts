import type {AuthToken, LoginCredentials, RegisterData} from '@/features/auth/domain/auth.entity';

export interface IAuthRepository {
  login(credentials: LoginCredentials): Promise<AuthToken>;
  register(data: RegisterData): Promise<void>;
  refresh(): Promise<AuthToken>;
  logout(): Promise<void>;
}
