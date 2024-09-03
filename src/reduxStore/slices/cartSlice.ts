import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean; // Add isOpen to manage cart sidebar visibility
  
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
  isOpen: false, // Initialize as closed
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem('cart');
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen; // Toggle visibility
    },
  },
});

export const { addToCart, removeFromCart, clearCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
