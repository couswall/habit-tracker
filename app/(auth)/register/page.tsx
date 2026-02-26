'use client';

import {useState} from 'react';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import PasswordInput from '@/components/molecules/PasswordInput';
import {useForm, useWatch} from 'react-hook-form';
import {
  RegisterFormValues,
  registerSchema,
} from '@/features/auth/presentation/validation/register.schema';
import {zodResolver} from '@hookform/resolvers/zod';
import AuthLayout from '@/features/auth/presentation/components/AuthLayout';
import SocialLogin from '@/features/auth/presentation/components/SocialLogin';
import {ROUTES} from '@/shared/constants/routes';

export default function RegisterPage() {
  const [generalError, setGeneralError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: {errors, isSubmitting, isValid},
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange', // Validate on change so button disables/enables properly
  });

  const passwordValue = useWatch({
    control,
    name: 'password',
    defaultValue: '',
  });

  const getPasswordStrength = (pass: string) => {
    if (!pass) return {score: 0, label: '', color: 'bg-transparent'};
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score += 1;
    if (/[0-9!@#$%^&*]/.test(pass)) score += 1;

    if (score === 1)
      return {score: 1, label: 'Weak', color: 'bg-red-500', textClass: 'text-red-500'};
    if (score === 2)
      return {score: 2, label: 'Medium', color: 'bg-yellow-500', textClass: 'text-yellow-500'};
    if (score >= 3)
      return {score: 3, label: 'Strong', color: 'bg-green-500', textClass: 'text-green-500'};
    return {score: 0, label: '', color: 'bg-transparent', textClass: ''};
  };

  const strength = getPasswordStrength(passwordValue);

  const onSubmit = async () => {
    setGeneralError(null);
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
      subtitle="Start building better habits today."
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerLinkHref={ROUTES.LOGIN}
      generalError={generalError}
    >
      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          {/* First Name (Now correctly mapped to "name" in schema) */}
          <Input
            id="name"
            type="text"
            label="First Name"
            placeholder="John"
            autoComplete="given-name"
            error={errors.name?.message}
            {...register('name')}
          />

          {/* Last Name */}
          <Input
            id="lastName"
            type="text"
            label="Last Name"
            placeholder="Doe"
            autoComplete="family-name"
            error={errors.lastName?.message}
            {...register('lastName')}
          />
        </div>

        {/* Email */}
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          autoComplete="email"
          error={errors.email?.message}
          {...register('email')}
        />

        {/* Password */}
        <div>
          <PasswordInput
            id="password"
            label="Password"
            placeholder="••••••••"
            autoComplete="new-password"
            error={errors.password?.message}
            {...register('password')}
          />
          {/* Password Strength Indicator */}
          <div className="mt-2 h-4 flex items-center justify-between gap-2">
            {passwordValue ? (
              <>
                <div className="flex gap-1 flex-1">
                  {[1, 2, 3].map((level) => (
                    <div
                      key={level}
                      className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                        strength.score >= level ? strength.color : 'bg-border-light'
                      }`}
                    />
                  ))}
                </div>
                <span
                  className={`text-[10px] uppercase tracking-wider font-bold w-14 text-right ${strength.textClass}`}
                >
                  {strength.label}
                </span>
              </>
            ) : null}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="pt-1">
          <label className="flex items-start gap-3 group cursor-pointer relative">
            <div className="mt-0.5 relative flex items-center justify-center">
              <input type="checkbox" className="peer sr-only" {...register('terms')} />
              <div className="w-5 h-5 rounded border-2 border-border-light bg-background/50 peer-checked:bg-primary peer-checked:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/50 peer-checked:[&>svg]:opacity-100 transition-all flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white opacity-0 transition-opacity"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed">
              I agree to the{' '}
              <Link
                href="#"
                className="text-primary hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Terms
              </Link>{' '}
              and{' '}
              <Link
                href="#"
                className="text-primary hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Privacy Policy
              </Link>
            </div>
          </label>
          {errors.terms && (
            <p className="mt-1.5 ml-8 text-xs text-red-400">{errors.terms.message}</p>
          )}
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
                Creating Account...
              </div>
            ) : (
              'Create Account'
            )}
          </Button>
        </div>
      </form>

      <SocialLogin label="Sign up with Google" />
    </AuthLayout>
  );
}
