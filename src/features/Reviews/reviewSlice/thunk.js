import { createAsyncThunk } from "@reduxjs/toolkit";

import { getReviews } from "features/Reviews/services/reviewsServices";




export const ReviewThunk = createAsyncThunk("reviewThunk", async (_, { rejectWithValue }) => {
  return getReviews()
    .then((res) => {
      return res.data;
    })
    .catch(error => rejectWithValue(error.response.data));
});