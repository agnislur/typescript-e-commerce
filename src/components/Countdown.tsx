import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Countdown: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const savedTime = localStorage.getItem('promoEndTime');
    const endTime = savedTime ? parseInt(savedTime) : Date.now() + 2 * 60 * 60 * 1000; // 2 hours from now
    return endTime - Date.now();
  });

  useEffect(() => {
    if (timeLeft <= 0) {
      localStorage.removeItem('promoEndTime');
      return;
    }

    const interval = setInterval(() => {
      const savedTime = localStorage.getItem('promoEndTime');
      const endTime = savedTime ? parseInt(savedTime) : Date.now() + 2 * 60 * 60 * 1000;
      const timeLeftNow = endTime - Date.now();
      
      if (timeLeftNow <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
        localStorage.removeItem('promoEndTime');
      } else {
        setTimeLeft(timeLeftNow);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft > 0) {
      const endTime = Date.now() + timeLeft;
      localStorage.setItem('promoEndTime', endTime.toString());
    }
  }, [timeLeft]);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleClick = () => {
    navigate('/promo-product');
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-red-400 text-white p-4 z-50">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-center cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">Promo ends in:</span> {formatTime(timeLeft)}
        </div>
      </div>
    </header>
  );
};

export default Countdown;
