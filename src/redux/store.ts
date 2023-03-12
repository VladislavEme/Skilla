import { configureStore } from '@reduxjs/toolkit';
import callsSlice from './calls/slice';
import dateSlice from './date/slice';
import popupSlice from './popup/slice';

export const store = configureStore({
  reducer: {
    popup: popupSlice,
    calls: callsSlice,
    date: dateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
