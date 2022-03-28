import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userInformation";
import AmountSlice from "./useAmount";
import BirthdaySlice from "./userBirthday"
export const store = configureStore({
  reducer: {
    users: userReducer,
    balance: AmountSlice,
    profile:BirthdaySlice,
  },
});
