import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../reducers/CustomerSlice.ts";
import ItemSlice from "../reducers/ItemSlice.ts";

export const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        item: ItemSlice
    }
})
