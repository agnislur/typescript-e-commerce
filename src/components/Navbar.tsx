import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import CartSidebar from './CartSidebar';
import MobileMenuSidebar from './MobileMenuSidebar';
import LoginModal from './LoginModal';
import logo from '../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../reduxStore/store';
import { toggleCart } from '../reduxStore/slices/cartSlice';

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isCartOpen = useSelector((state: RootState) => state.cart.isOpen);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  const handleCartToggle = () => {
    dispatch(toggleCart()); // Toggle cart visibility via Redux
  };

  const handleDarkModeToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{ marginTop: 60 }} className={`fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent dark:bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 md:h-12 lg:h-14" />
            </Link>
          </div>
          <button
            className="lg:hidden p-4 z-50"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </button>
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="hover:text-red-400">Home</Link>
            <Link to="/about" className="hover:text-red-400">About Us</Link>
            <Link to="/shop" className="hover:text-red-400">Shop</Link>
            <Link to="/contact" className="hover:text-red-400">Contact</Link>
            <FaShoppingCart className="cursor-pointer" onClick={handleCartToggle} />
            <FaUser className="cursor-pointer" onClick={handleLoginClick} />
            
            <button
              className="text-xl"
              onClick={handleDarkModeToggle}
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
            </button>
          </div>
        </div>
      </nav>

      <CartSidebar isOpen={isCartOpen} toggleCart={handleCartToggle} cartItems={cartItems} />
      <MobileMenuSidebar isOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
      <LoginModal isOpen={showLogin} closeLoginModal={closeLoginModal} />
      
      {/* Overlay for mobile sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={closeMobileMenu} />
      )}
    </>
  );
};

export default Navbar;
