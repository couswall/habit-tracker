import type {IAuthRepository} from '@/features/auth/domain/auth.repository';

import {AuthApiRepository} from '@/features/auth/infrastructure/repositories/auth.api.repository';

export const authRepository: IAuthRepository = new AuthApiRepository();
