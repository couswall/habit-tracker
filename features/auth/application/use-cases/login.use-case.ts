import type {AuthToken, LoginCredentials} from '@/features/auth/domain/auth.entity';
import type {IAuthRepository} from '@/features/auth/domain/auth.repository';

export class LoginUseCase {
  constructor(private readonly repository: IAuthRepository) {}

  execute(credentials: LoginCredentials): Promise<AuthToken> {
    return this.repository.login(credentials);
  }
}
