import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import profileSlice from "./useAmount"
export const store = configureStore({
    reducer: {
      
      users: userReducer,
      balance:profileSlice
    }
  });