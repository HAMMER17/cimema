import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './cart/reduser';
import gameReduser from './cart/reduser2'

export const store = configureStore({
  reducer: {
    cart: cartReduser,
    game: gameReduser,
  }
})