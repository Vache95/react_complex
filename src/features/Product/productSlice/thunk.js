import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProducts } from "features/Product/services/productsServices";





export const ProductThunk = createAsyncThunk("productThunk", async (params, { rejectWithValue }) => {
  return getProducts(params)
    .then((res) => {
      return res.data;
    })
    .catch(error => rejectWithValue(error.response.data));
});