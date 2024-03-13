import {createSlice} from '@reduxjs/toolkit';

export const authSliceRducer = createSlice({
  name: 'calendar',
  initialState: {
    calendar: null,
  },
  reducers: {
    calendarData: (state, action) => {
      state.calendar = action.payload;
    },
  },
});

export const {calendarData} = authSliceRducer.actions;

export default authSliceRducer.reducer;
