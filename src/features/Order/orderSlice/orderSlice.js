import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState.js';
import { OrderThunk } from "./thunk.js";

export const order = createSlice({
  name: 'order',
  initialState,
  selectors: {
    selectOrder: (state) => state,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(OrderThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(OrderThunk.fulfilled, (state,{payload}) => {
        state.loading = false;
        state.order = payload
      })
      .addCase(OrderThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { selectOrder } = order.selectors;

export const { } = order.actions;

export default order.reducer;