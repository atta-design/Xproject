import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const AmountSlice = createSlice({
  name: "amount",
  initialState: {
    loading: "idle",
    balance: [],
  },
  reducers: {
    usersLoading(state) {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    usersReceived(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.balance = action.payload.slice(0, 200);
      }
    },
  },
});

export const { usersLoading, usersReceived } = AmountSlice.actions;

export const fetchProfile = () => async (dispatch) => {
  dispatch(usersLoading(null));
  const response = await axios.get("http://localhost:9000/balance");
  dispatch(usersReceived(await response.data));
};

export default AmountSlice.reducer;
