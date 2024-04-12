import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState.js';
import { ProductThunk } from "./thunk.js";

export const product = createSlice({
  name: 'product',
  initialState,
  selectors: {
    selectProduct: (state) => state,
  },
  reducers: {
    addProduct: (state, {payload}) => {
			state.selectProducts = {...state?.selectProducts,
        [payload?.productId]:{selectProductCost:state?.selectProducts[payload?.productId]?.selectProductCost + payload?.productPrice
         || payload?.productPrice,
         price:payload?.productPrice,
        }
        };
		},
    reduceProduct: (state, {payload}) => {
			state.selectProducts = {...state?.selectProducts,
        [payload?.productId]:{selectProductCost:state?.selectProducts[payload?.productId]?.selectProductCost - payload?.productPrice
         || 0,
         price:payload?.productPrice,
        }
        };
		},
  },
  extraReducers: (builder) => {
    builder
      .addCase(ProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(ProductThunk.fulfilled, (state,{payload}) => {
        state.loading = false;
        state.products = payload 
      })
      .addCase(ProductThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { selectProduct } = product.selectors;

export const { addProduct,reduceProduct } = product.actions;

export default product.reducer;