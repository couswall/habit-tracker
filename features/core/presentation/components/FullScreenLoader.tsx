import React from 'react';

export default function FullScreenLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6 animate-in fade-in duration-500">
      {/* Top Section / Logo */}
      <div className="flex flex-col items-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface border border-white/5 shadow-lg mb-6">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-inner">
            <svg
              className="w-6 h-6 text-background"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={4}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">HabitTracker</h1>
      </div>

      {/* Middle Section / Spinner */}
      <div className="flex justify-center mb-16">
        <div className="w-16 h-16 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
      </div>

      {/* Bottom Section / Messages */}
      <div className="flex flex-col items-center">
        <p className="text-sm font-medium text-text-primary mb-3">
          Getting everything ready for you...
        </p>
        <p className="text-[10px] font-bold tracking-[0.2em] text-text-muted uppercase opacity-70">
          Syncing your streaks
        </p>
      </div>
    </div>
  );
}
