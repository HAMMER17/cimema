import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: 'pay',
  initialState: {
    currentPay: null,
  },
  reducers: {
    orderPay: (state, action) => {
      state.currentPay = action.payload
    }
  }
})
export const { orderPay } = orderSlice.actions;
export default orderSlice.reducer;