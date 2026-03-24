import {combineReducers, configureStore} from '@reduxjs/toolkit';

import authReducer from '@/features/auth/presentation/store/auth.slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
