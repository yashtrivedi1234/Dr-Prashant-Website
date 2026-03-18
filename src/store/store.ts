import { configureStore } from '@reduxjs/toolkit';
import { appointmentApi } from './appointmentApi';

export const store = configureStore({
  reducer: {
    [appointmentApi.reducerPath]: appointmentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appointmentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
