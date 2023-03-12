import { configureStore } from '@reduxjs/toolkit';
import callsSlice from './calls/slice';
import dateFilterSlice from './dateFilter/slice';
import popupSlice from './popup/slice';

export const store = configureStore({
  reducer: {
    popup: popupSlice,
    calls: callsSlice,
    dateFilter: dateFilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
