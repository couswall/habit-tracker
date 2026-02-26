import React from 'react';
import Link from 'next/link';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
  generalError?: string | null;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
  generalError,
}: Readonly<AuthLayoutProps>) {
  return (
    <div className="bg-background text-text-primary min-h-screen flex flex-col px-6">
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6 shadow-[0_0_20px_rgba(93,173,226,0.2)]">
            <svg
              className="w-9 h-9 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">{title}</h1>
          <p className="text-text-secondary text-sm font-medium">{subtitle}</p>
        </div>

        {/* Card */}
        <div className="bg-surface border border-border rounded-2xl p-8 shadow-2xl mb-8 transform transition-all animate-in fade-in slide-in-from-bottom-4 duration-500">
          {generalError && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="text-sm font-medium text-red-500 text-center">{generalError}</p>
            </div>
          )}

          {children}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-text-muted">
          {footerText}{' '}
          <Link href={footerLinkHref} className="text-primary font-bold hover:underline">
            {footerLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
}
