import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa'; // Import icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center mb-4 lg:mb-0">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 lg:mb-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaFacebookF size={24} />
          </a>
          {/* <a href="https://shopee.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaShopee size={24} />
          </a> */}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaTiktok size={24} />
          </a>
          {/* Add more social media links here if needed */}
        </div>

        {/* Contact and Location */}
        <div className="text-center lg:text-right">
          <p className="text-sm mb-2">Contact Us: contact@example.com</p>
          <p className="text-sm mb-2">1234 Street Name, City, Country</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
