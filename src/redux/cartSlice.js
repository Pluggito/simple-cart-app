import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalCount++;
    },

    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.totalCount -= existingItem.count;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    updateQuality: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        const difference = quantity - existingItem.count;
        existingItem.count = quantity; // ✅ Update the actual count
        state.totalCount += difference;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuality } =
  cartSlice.actions;
export default cartSlice.reducer;
