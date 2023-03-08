import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PopupState } from './types';

const initialState: PopupState = {
  activeDate: 0,
  isOpenDate: false,
  activeCallType: 0,
  isOpenCallType: false,
  activeWorkers: 0,
  isOpenWorkers: false,
  activeCalls: 0,
  isOpenCalls: false,
  activeSources: 0,
  isOpenSources: false,
  activeEstimates: 0,
  isOpenEstimates: false,
  activeErrors: 0,
  isOpenErrors: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setActiveDate: (state, action: PayloadAction<number>) => {
      state.activeDate = action.payload;
    },
    setIsOpenDate: (state, action: PayloadAction<boolean>) => {
      state.isOpenDate = action.payload;
    },
    setActiveCallType: (state, action: PayloadAction<number>) => {
      state.activeCallType = action.payload;
    },
    setIsOpenCallType: (state, action: PayloadAction<boolean>) => {
      state.isOpenCallType = action.payload;
    },
    setActiveWorkers: (state, action: PayloadAction<number>) => {
      state.activeWorkers = action.payload;
    },
    setIsOpenWorkers: (state, action: PayloadAction<boolean>) => {
      state.isOpenWorkers = action.payload;
    },
    setActiveCalls: (state, action: PayloadAction<number>) => {
      state.activeCalls = action.payload;
    },
    setIsOpenCalls: (state, action: PayloadAction<boolean>) => {
      state.isOpenCalls = action.payload;
    },
    setActiveSources: (state, action: PayloadAction<number>) => {
      state.activeSources = action.payload;
    },
    setIsOpenSources: (state, action: PayloadAction<boolean>) => {
      state.isOpenSources = action.payload;
    },
    setActiveEstimates: (state, action: PayloadAction<number>) => {
      state.activeEstimates = action.payload;
    },
    setIsOpenEstimates: (state, action: PayloadAction<boolean>) => {
      state.isOpenEstimates = action.payload;
    },
    setActiveErrors: (state, action: PayloadAction<number>) => {
      state.activeErrors = action.payload;
    },
    setIsOpenErrors: (state, action: PayloadAction<boolean>) => {
      state.isOpenErrors = action.payload;
    },
  },
});

export const {
  setActiveDate,
  setIsOpenDate,
  setIsOpenCallType,
  setActiveCallType,
  setActiveWorkers,
  setIsOpenWorkers,
  setActiveCalls,
  setIsOpenCalls,
  setActiveSources,
  setIsOpenSources,
  setActiveEstimates,
  setIsOpenEstimates,
  setActiveErrors,
  setIsOpenErrors,
} = popupSlice.actions;

export default popupSlice.reducer;
