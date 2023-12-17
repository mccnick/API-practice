import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-3 flex justify-around">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) =>
          isActive ? 'bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        }
      >
        Create
      </NavLink>
      <NavLink
        to="/read"
        className={({ isActive }) =>
          isActive ? 'bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        }
      >
        Read
      </NavLink>
      <NavLink
        to="/update"
        className={({ isActive }) =>
          isActive ? 'bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        }
      >
        Update
      </NavLink>
      <NavLink
        to="/delete"
        className={({ isActive }) =>
          isActive ? 'bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        }
      >
        Delete
      </NavLink>
      <NavLink
        to="/developer"
        className={({ isActive }) =>
          isActive ? 'bg-blue-400 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        }
      >
        Developer
      </NavLink>
    </nav>
  );
};

export default Navbar;
