import type {RegisterData} from '@/features/auth/domain/auth.entity';
import type {IAuthRepository} from '@/features/auth/domain/auth.repository';

export class RegisterUseCase {
  constructor(private readonly repository: IAuthRepository) {}

  execute(data: RegisterData): Promise<void> {
    return this.repository.register(data);
  }
}
