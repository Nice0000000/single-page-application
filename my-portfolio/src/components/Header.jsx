import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = "text-blue-500 font-bold border-b-2 border-blue-500 pb-1";
  const normalStyle = "text-gray-600 hover:text-blue-400 transition-colors pb-1";

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-gray-800">Портфоліо</div>
        <nav className="space-x-6 text-lg">
          <NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Про мене</NavLink>
          <NavLink to="/my-city" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Моє місто</NavLink>
          <NavLink to="/my-future" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Мій розвиток</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;