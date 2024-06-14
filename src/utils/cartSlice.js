import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],    
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload, 1);
        },
        clearCart: (state, action) => {
            return { items: [] };
        },
        updateCart: (state, action) => {
            state.items.splice(action.payload.index, 1, action.payload.item);
        },

    },
});

export const { addItem, removeItem, clearCart, updateCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

