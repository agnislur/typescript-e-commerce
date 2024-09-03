import React from 'react';
import  {CartItem} from '../reduxStore/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { clearCart } from '../reduxStore/slices/cartSlice';

interface CartSidebarProps {
  isOpen: boolean;
  toggleCart: () => void;
  cartItems: CartItem[];
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, cartItems }) => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-72 h-full bg-white shadow-lg p-4 z-50">
      <h2 className="text-xl font-semibold">Your Cart</h2>
      <ul className="mt-4 space-y-2">
        {cartItems.map((item) => (
          <li key={item.id} className="border-b py-2">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
            <div className="flex justify-between items-center">
              <span>{item.name}</span>
              <span>{item.quantity} x {item.price}</span>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-6 bg-gray-800 text-white py-2 px-4 w-full" onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default CartSidebar;
