import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

interface MobileMenuSidebarProps {
  isOpen: boolean;
  closeMobileMenu: () => void;
}

const MobileMenuSidebar: React.FC<MobileMenuSidebarProps> = ({ isOpen, closeMobileMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg p-4 z-50">
      <div className="flex justify-end">
        <FaTimes className="cursor-pointer text-xl" onClick={closeMobileMenu} />
      </div>
      <ul className="mt-8 space-y-6">
        <li><Link to="/" className="text-lg" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/about" className="text-lg" onClick={closeMobileMenu}>About Us</Link></li>
        <li><Link to="/shop" className="text-lg" onClick={closeMobileMenu}>Shop</Link></li>
        <li><Link to="/contact" className="text-lg" onClick={closeMobileMenu}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default MobileMenuSidebar;
