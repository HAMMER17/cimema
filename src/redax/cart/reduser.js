import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCard: []
  },
  reducers: {
    setItemsInCard: (state, action) => {
      state.itemsInCard.push(action.payload)
    },
    deleteItemsFromCard: (state, action) => {
      state.itemsInCard = state.itemsInCard.filter(elem => elem.id !== action.payload)
    }
  }
})
export const { setItemsInCard, deleteItemsFromCard } = cardSlice.actions;
export default cardSlice.reducer;