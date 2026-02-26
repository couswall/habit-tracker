'use client';

import Link from 'next/link';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import PasswordInput from '@/components/molecules/PasswordInput';
import {useForm} from 'react-hook-form';
import {LoginFormValues, loginSchema} from '@/features/auth/presentation/validation/login.schema';
import {zodResolver} from '@hookform/resolvers/zod';
import AuthLayout from '@/features/auth/presentation/components/AuthLayout';
import SocialLogin from '@/features/auth/presentation/components/SocialLogin';
import {useState} from 'react';
import {ROUTES} from '@/shared/constants/routes';

export default function LoginPage() {
  const [generalError, setGeneralError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting, isValid},
  } = useForm<LoginFormValues>({resolver: zodResolver(loginSchema)});

  const onSubmit = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      setGeneralError('Something went wrong. Please try again.');
      throw error;
    }
  };

  return (
    <AuthLayout
      title="Habitly"
      subtitle="Build consistency. Track progress."
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerLinkHref={ROUTES.REGISTER}
      generalError={generalError}
    >
      {/* Form */}
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="hello@example.com"
          error={errors.email?.message}
          {...register('email')}
        />

        {/* Password */}
        <PasswordInput
          id="password"
          label="Password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register('password')}
        />

        {/* Forgot password */}
        <div className="flex justify-end">
          <Link
            href="#"
            className="text-xs font-medium text-text-secondary hover:text-primary transition-colors"
          >
            Forgot your password?
          </Link>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <Button type="submit" disabled={!isValid || isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Logging In...
              </div>
            ) : (
              'Log In'
            )}
          </Button>
        </div>
      </form>

      <SocialLogin label="Continue with Google" />
    </AuthLayout>
  );
}
