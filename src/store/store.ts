import { configureStore } from '@reduxjs/toolkit';
import { appointmentApi } from './appointmentApi';
import { contactApi } from './contactApi';

export const store = configureStore({
  reducer: {
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(appointmentApi.middleware)
      .concat(contactApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
