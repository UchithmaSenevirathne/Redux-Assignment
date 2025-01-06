import {Item} from "../models/Item.ts";
import {createSlice} from "@reduxjs/toolkit";

export const initialState : Item[] = [];

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers:{
        addItem: (state, action) =>{
            state.push(action.payload)
        },
        updateItem: (state, action) => {
            const { id, updatedItem } = action.payload;
            const itemIndex = state.findIndex(item => item.id === id);
            if (itemIndex >= 0) {
                Object.keys(updatedItem).forEach(key => {
                    state[itemIndex][key] = updatedItem[key];
                });
            }
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        },
    }
})

export const {addItem, updateItem, deleteItem} = itemSlice.actions;
export default itemSlice.reducer;