import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DateState } from './types';

const initialState: DateState = {
  dateStart: '',
  dateEnd: '',
};

export const dateSlice = createSlice({
  name: 'date',
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

export const { setDateStart, setDateEnd } = dateSlice.actions;

export default dateSlice.reducer;
