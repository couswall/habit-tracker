'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

import {useAppSelector} from '@/store/hooks';
import {ROUTES} from '@/shared/constants/routes';

export default function PrivateLayout({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const {token, isRehydrating} = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isRehydrating && !token) {
      router.replace(ROUTES.LOGIN);
    }
  }, [token, isRehydrating, router]);

  if (isRehydrating) return null;
  if (!token) return null;

  return <>{children}</>;
}
