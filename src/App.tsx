import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countdown from './components/Countdown';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PromoProduct from './pages/PromoProduct';
import Shop from './pages/Shop'; // Import Shop page
import Footer from './components/Footer'; // Import Footer component
import About from './pages/About'

const App: React.FC = () => {
  return (
    <Router>
      <Countdown />
      <Navbar />
      <div className="pt-14"> {/* Adjust pt to account for the height of Countdown and Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promo-product" element={<PromoProduct />} />
          <Route path="/shop" element={<Shop />} /> {/* Add route for Shop */}
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
      <Footer /> {/* Add Footer component */}
    </Router>
  );
};

export default App;
