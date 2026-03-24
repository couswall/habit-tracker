'use client';

import {useEffect} from 'react';
import {Provider} from 'react-redux';

import {restoreSession} from '@/features/auth/presentation/store/auth.thunks';
import {store} from '@/store/store';

export default function StoreProvider({children}: {children: React.ReactNode}) {
  useEffect(() => {
    store.dispatch(restoreSession());
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
