import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: "idle",
    users: [],
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
        state.users = action.payload.slice(0, 200);
      }
    },
  },
});

export const { usersLoading, usersReceived } = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  dispatch(usersLoading(null));
  const response = await axios.get("http://localhost:9000/posts");
  dispatch(usersReceived(await response.data));
};

export default usersSlice.reducer;
