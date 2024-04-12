import { configureStore } from '@reduxjs/toolkit'

import order from 'features/Order/orderSlice/orderSlice'
import product from 'features/Product/productSlice/productSlice'
import review from 'features/Reviews/reviewSlice/reviewSlice'

export const store = configureStore({
  reducer: {
    order,
    product,
    review
  },
})