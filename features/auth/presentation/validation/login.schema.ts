import {z} from 'zod';
import {emailSchema} from '@/features/auth/presentation/validation/register.schema';

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, {message: 'Password is required'}).max(128),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
