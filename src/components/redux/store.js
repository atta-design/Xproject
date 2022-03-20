import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userInformation";
import profileSlice from "./useAmount";
export const store = configureStore({
  reducer: {
    users: userReducer,
    balance: profileSlice,
  },
});
