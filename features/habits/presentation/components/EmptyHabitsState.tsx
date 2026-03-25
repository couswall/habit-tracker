import React from 'react';
import Button from '@/components/atoms/Button';
import Link from 'next/link';

interface EmptyHabitsStateProps {
  userName: string;
}

export default function EmptyHabitsState({userName}: Readonly<EmptyHabitsStateProps>) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-8 shadow-2xl w-full max-w-sm mx-auto transform transition-all animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Icon Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)]">
          <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 2.05v9.37h6.05L9 22.05v-9.37H2.95L13 2.05z" />
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Welcome, {userName} 👋</h2>
        <p className="text-primary font-medium mb-5">Let’s start building your first habit.</p>
        <p className="text-sm text-text-secondary leading-relaxed">
          You don’t have any habits yet. Create one to start tracking your progress and build
          consistency.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center space-y-6">
        <Button variant="primary">
          <div className="flex items-center justify-center gap-2">
            <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-primary">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={4}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            Create your first habit
          </div>
        </Button>
        <Link
          href="#"
          className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
        >
          Explore sample habits
        </Link>
      </div>
    </div>
  );
}
