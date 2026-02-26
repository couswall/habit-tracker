import {z} from 'zod';

const nameSchema = z
  .string()
  .trim()
  .min(2, {message: 'Must be at least 2 characters'})
  .max(50, {message: 'Must be at most 50 characters'})
  .regex(/^[\p{L}\s'-]+$/u, {
    message: 'Name contains invalid characters',
  });

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .max(100)
  .pipe(
    z.email({
      message: 'Invalid email address',
    })
  );

const passwordSchema = z
  .string()
  .min(8, {message: 'Password must be at least 8 characters'})
  .max(128, {message: 'Password must be at most 128 characters'})
  .refine((val) => /[A-Z]/.test(val), {
    message: 'Must contain at least one uppercase letter',
  })
  .refine((val) => /[a-z]/.test(val), {
    message: 'Must contain at least one lowercase letter',
  })
  .refine((val) => /[0-9]/.test(val), {
    message: 'Must contain at least one number',
  });

export const registerSchema = z.object({
  name: nameSchema,

  lastName: z
    .string()
    .trim()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be at most 50 characters')
    .regex(/^[\p{L}\s'-]+$/u, {
      message: 'Name contains invalid characters',
    }),

  email: emailSchema,

  password: passwordSchema,

  terms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the Terms and Privacy Policy',
  }),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
