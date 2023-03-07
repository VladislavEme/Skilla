import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DateState {
  activeDate: number;
  activeCallType: number;
  isOpen: boolean;
  isOpenCallType: boolean;
}

const initialState: DateState = {
  activeDate: 0,
  activeCallType: 0,
  isOpen: false,
  isOpenCallType: false,
};

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setActiveDate: (state, action: PayloadAction<number>) => {
      state.activeDate = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setActiveCallType: (state, action: PayloadAction<number>) => {
      state.activeCallType = action.payload;
    },
    setIsOpenCallType: (state, action: PayloadAction<boolean>) => {
      state.isOpenCallType = action.payload;
    },
  },
});

export const { setActiveDate, setIsOpen, setIsOpenCallType, setActiveCallType } = dateSlice.actions;

export default dateSlice.reducer;
