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

// export function ItemReducer(state:Item [], action:{type:string, payload:Item}){
//     switch(action.type){
//         case 'ADD_ITEM':
//             return [...state, action.payload];
//         case 'UPDATE_ITEM':
//             return state.map((item: Item) =>
//                 item.id === action.payload.id ?
//                     {...item, item_name : action.payload.item_name, price : action.payload.price, quantity : action.payload.quantity }
//                     : item
//             );
//         case 'DELETE_ITEM':
//             return state.slice(0,-1);
//
//     }
// }