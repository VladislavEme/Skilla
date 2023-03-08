import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CallsState } from './types';

const initialState: CallsState = {
  calls: [],
};

export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    fetchCalls: (state, action: PayloadAction<any>) => {
      state.calls = action.payload;
    },
  },
});

export const { fetchCalls } = callsSlice.actions;

export default callsSlice.reducer;
