import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reduxStore/slices/cartSlice';
import productImage1 from '../assets/home1.jpg';
import productImage2 from '../assets/home1.jpg';
import productImage3 from '../assets/home1.jpg';

const products = [
  { id: 1, name: 'Product 1', price: '$20', image: productImage1 },
  { id: 2, name: 'Product 2', price: '$25', image: productImage2 },
  { id: 3, name: 'Product 3', price: '$30', image: productImage3 },
  { id: 4, name: 'Product 1', price: '$20', image: productImage1 },
  { id: 5, name: 'Product 2', price: '$25', image: productImage2 },
  { id: 6, name: 'Product 3', price: '$30', image: productImage3 },
  { id: 7, name: 'Product 1', price: '$20', image: productImage1 },
  { id: 8, name: 'Product 2', price: '$25', image: productImage2 },
];

const Shop: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: { id: number; name: string; price: string; image: string }) => {
    const cartItem = { ...product, quantity: 1 }; // Add quantity property
    dispatch(addToCart(cartItem));
  };

  const handleBuyNow = (productId: number) => {
    console.log(`Product ${productId} purchased.`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold mb-2 dark:text-white">{product.name}</h2>
            <p className="text-lg font-bold mb-4 dark:text-gray-300">{product.price}</p>
            <div className="flex justify-between">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Masukkan Cart
              </button>
              <button
                onClick={() => handleBuyNow(product.id)}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
