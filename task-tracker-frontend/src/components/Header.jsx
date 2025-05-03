import React from "react";
import { useAuth } from "../context/useAuth"; 
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="flex justify-between items-center bg-gray-100 px-6 py-4 shadow">
      <div className="text-lg font-bold">Task Tracker</div>
      <div className="flex items-center gap-4">
        <span className="font-medium">{user?.name}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
