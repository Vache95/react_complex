import { createAsyncThunk } from "@reduxjs/toolkit";

import { postOrder } from "features/Order/services/orderServices";





export const OrderThunk = createAsyncThunk("orderThunk", async (data, { rejectWithValue }) => {
  return postOrder(data)
    .then((res) => {
      return res.data;
    })
    .catch(error => rejectWithValue(error.response.data));
});