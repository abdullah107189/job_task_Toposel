import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 py-2 text-xl flex gap-5 justify-center sticky top-0">
      <NavLink
        className={({ isActive }) =>
          ` hover:bg-white py-1 px-4 rounded-md ${
            isActive ? "bg-white font-bold" : "bg-white/50"
          }`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          ` hover:bg-white py-1 px-4 rounded-md ${
            isActive ? "bg-white font-bold" : "bg-white/50"
          }`
        }
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          ` hover:bg-white py-1 px-4 rounded-md ${
            isActive ? "bg-white font-bold" : "bg-white/50"
          }`
        }
        to="/reg"
      >
        Register
      </NavLink>
    </nav>
  );
};

export default Navbar;
