import { configureStore } from "@reduxjs/toolkit";
import totalReducer from "./totalSlice";

const appStore = configureStore({
    reducer: {
        total: totalReducer,
    },
});

export default appStore;