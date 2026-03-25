import EmptyHabitsState from '@/features/habits/presentation/components/EmptyHabitsState';

export default function DashboardPage() {
  const userName = 'Alex';

  return (
    <div className="min-h-screen bg-background text-text-primary px-6 flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-sm">
        <EmptyHabitsState userName={userName} />

        <div className="mt-8 text-center">
          <p className="text-[10px] font-bold tracking-[0.2em] text-text-muted uppercase opacity-70">
            Consistency is the key to mastery
          </p>
        </div>
      </div>
    </div>
  );
}
