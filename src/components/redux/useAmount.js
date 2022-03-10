import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: "idle",
    balance: []
  },
  reducers: {
    usersLoading(state, action) {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    usersReceived(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.balance = action.payload.slice(0,200);
      }
    }
  }
});

// Destructure and export the plain action creators
export const { usersLoading, usersReceived } = profileSlice.actions;

// Define a thunk that dispatches those action creators
export const fetchprofile = () => async (dispatch) => {
  dispatch(usersLoading(null));
  const response = await axios.get("http://localhost:9000/balance");
  dispatch(usersReceived(await response.data));
};

export default profileSlice.reducer;