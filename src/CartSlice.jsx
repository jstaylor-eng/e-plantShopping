import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalCart:0
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      state.totalCart++;
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
      state.totalCart -= action.payload.quantity;
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity - 1;
      }
      state.totalCart--;
    
    },
  },
});


export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;