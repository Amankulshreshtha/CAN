import {createSlice} from '@reduxjs/toolkit';

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    portfolio: null,
  },
  reducers: {
    PortfolioData: (state, action) => {
      state.portfolio = action.payload;
    },
  },
});

export const {PortfolioData} = portfolioSlice.actions;

export default portfolioSlice.reducer;
