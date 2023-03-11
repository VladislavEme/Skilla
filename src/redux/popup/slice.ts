import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PopupState } from './types';

const initialState: PopupState = {
  activeDate: 0,
  activeCallType: 0,
  activeWorkers: 0,
  activeCalls: 0,
  activeSources: 0,
  activeEstimates: 0,
  activeErrors: 0,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setActiveDate: (state, action: PayloadAction<number>) => {
      state.activeDate = action.payload;
    },
    setActiveCallType: (state, action: PayloadAction<number>) => {
      state.activeCallType = action.payload;
    },
    setActiveWorkers: (state, action: PayloadAction<number>) => {
      state.activeWorkers = action.payload;
    },
    setActiveCalls: (state, action: PayloadAction<number>) => {
      state.activeCalls = action.payload;
    },
    setActiveSources: (state, action: PayloadAction<number>) => {
      state.activeSources = action.payload;
    },
    setActiveEstimates: (state, action: PayloadAction<number>) => {
      state.activeEstimates = action.payload;
    },
    setActiveErrors: (state, action: PayloadAction<number>) => {
      state.activeErrors = action.payload;
    },
  },
});

export const {
  setActiveDate,
  setActiveCallType,
  setActiveWorkers,
  setActiveCalls,
  setActiveSources,
  setActiveEstimates,
  setActiveErrors,
} = popupSlice.actions;

export default popupSlice.reducer;
