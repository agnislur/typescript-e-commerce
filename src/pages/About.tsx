import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center">Welcome to Our Store</h1>
      <p className="text-center mt-4">
        Discover our wide range of products and enjoy great deals every day!
      </p>
      
      <div className="mt-8 flex justify-center space-x-4">
        <Link to="/products" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Shop Now
        </Link>
        <Link to="/cart" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default Home;
