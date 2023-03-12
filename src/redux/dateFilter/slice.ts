import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DateFilterState } from './types';

const initialState: DateFilterState = {
  dateStart: '',
  dateEnd: '',
};

export const dateFilterSlice = createSlice({
  name: 'dateFilter',
  initialState,
  reducers: {
    setDateStart: (state, action: PayloadAction<any>) => {
      state.dateStart = action.payload;
    },
    setDateEnd: (state, action: PayloadAction<any>) => {
      state.dateEnd = action.payload;
    },
  },
});

export const { setDateStart, setDateEnd } = dateFilterSlice.actions;

export default dateFilterSlice.reducer;
