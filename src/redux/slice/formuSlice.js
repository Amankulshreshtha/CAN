import {createSlice} from '@reduxjs/toolkit';

export const formuSlice = createSlice({
  name: 'calendar',
  initialState: {
    calendar: null,
  },
  reducers: {
    FormData: (state, action) => {
      state.calendar = action.payload;
    },
  },
});

export const {FormData} = formuSlice.actions;

export default formuSlice.reducer;
