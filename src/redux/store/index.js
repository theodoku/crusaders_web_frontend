import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../userSlice";

const store = configureStore({
    reducers: {
        user: userSlice,
    },
});

export default store;