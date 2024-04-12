import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState.js';
import { ReviewThunk } from "./thunk.js";

export const review = createSlice({
  name: 'review',
  initialState,
  selectors: {
    selectReview: (state) => state,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ReviewThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(ReviewThunk.fulfilled, (state,{payload}) => {
        state.loading = false;
        state.reviews = payload
      })
      .addCase(ReviewThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { selectReview } = review.selectors;

export const { } = review.actions;

export default review.reducer;