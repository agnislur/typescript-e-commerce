import React, { useState, useEffect } from 'react';

// Import images directly
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.png';

// Example images for the new sections
import skincareImage1 from '../assets/home1.jpg';

const images = [home1, home2, home3];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`relative ${darkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle Button */}
      <button
        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow-lg"
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Image Slider */}
      <div className="relative h-screen overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Home ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 p-4 bg-black bg-opacity-40 dark:bg-gray-900 dark:bg-opacity-70">
          <h1 className="text-3xl font-bold text-white dark:text-gray-300 mb-4">Welcome to Our Store!</h1>
          <p className="text-lg text-white dark:text-gray-300">Explore our amazing products and take advantage of our special promotions.</p>
        </div>
      </div>
      
      {/* Penawaran Section */}
      <section id="penawaran" className="py-16 bg-gray-100 ">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Special Offers</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-xl font-semibold mb-4">Exclusive Deals</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover our exclusive deals and discounts available only for a limited time. Don't miss out on the opportunity to save on your favorite products.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img src={skincareImage1} alt="Special Offers" className="w-full h-64 object-cover rounded-lg mb-4"/>
            </div>
          </div>
        </div>
      </section>

      {/* Kenapa Skincare Section */}
      <section id="kenapa-skincare" className="py-16 bg-white ">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Why Skincare?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 p-4">
              <img src={skincareImage1} alt="Why Skincare" className="w-full h-64 object-cover rounded-lg mb-4"/>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-xl font-semibold mb-4">The Importance of Skincare</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Skincare is crucial for maintaining the health and appearance of your skin. It helps protect against environmental damage, reduces the risk of skin conditions, and can enhance your overall appearance. Regular skincare can also boost confidence and provide a sense of self-care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Skincare Section */}
      <section id="benefit-skincare" className="py-16 bg-gray-100 ">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Benefits of Skincare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200  p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Healthy Skin</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Regular skincare helps to maintain healthy skin by providing essential nutrients and hydration, which can prevent dryness, flakiness, and other skin issues.
              </p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Anti-Aging</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Proper skincare routines can slow down the aging process by reducing the appearance of fine lines, wrinkles, and age spots, helping you maintain a youthful appearance.
              </p>
            </div>
            <div className="bg-gray-200  p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Even Skin Tone</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Skincare products can help even out skin tone by addressing issues like pigmentation, redness, and uneven texture, leading to a smoother and more uniform complexion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
