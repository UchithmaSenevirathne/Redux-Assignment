import {Customer} from "../models/Customer.ts";
import {createSlice} from "@reduxjs/toolkit";

export const initialState : Customer[] = [];

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers:{
        addCustomer: (state, action) =>{
            state.push(action.payload)
        },
        updateCustomer: (state, action) => {
            const { email, updatedCustomer } = action.payload;
            const index = state.findIndex((customer) => customer.email === email);
            if (index !== -1) {
                Object.keys(updatedCustomer).forEach(key => {
                    state[index][key] = updatedCustomer[key];
                });
            }
        },
        deleteCustomer: (state, action) => {
            const email = action.payload;
            return state.filter((customer) => customer.email !== email);
        },
    }
})

export const {addCustomer, updateCustomer, deleteCustomer} = customerSlice.actions;
export default customerSlice.reducer;

// export function CustomerReducer(state:Customer [], action:{type:string, payload:Customer}){
//     switch(action.type){
//         case 'ADD_CUSTOMER':
//             return [...state, action.payload];
//         case 'UPDATE_CUSTOMER':
//             return state.map((customer: Customer) =>
//                 customer.email === action.payload.email ?
//                     {...customer, name : action.payload.name, email : action.payload.email, phone : action.payload.phone }
//                     : customer
//             );
//         case 'DELETE_CUSTOMER':
//             return state.slice(0,-1);
//
//     }
// }