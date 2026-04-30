// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ShopSphere</h1>
        
        <div className="flex gap-6 text-lg">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}
          >
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;