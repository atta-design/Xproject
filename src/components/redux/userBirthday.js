import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const BirthdaySlice = createSlice({

    name: "profile",
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

export const { usersLoading, usersReceived } = BirthdaySlice.actions;

export const fetchBirthday = () => async (dispatch) => {
    dispatch(usersLoading(null));
    const response = await axios.get("http://localhost:9000/profile");
    dispatch(usersReceived(await response.data));
    // console.log(response.data)
};

export default BirthdaySlice.reducer;