import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DateState {
  activeDate: number;
  isOpen: boolean;
}

const initialState: DateState = {
  activeDate: 0,
  isOpen: false,
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
  },
});

export const { setActiveDate, setIsOpen } = dateSlice.actions;

export default dateSlice.reducer;
