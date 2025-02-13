import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { tokenContext } from "../../provider/TokenProvider";

const Navbar = () => {
  const { token, setToken } = useContext(tokenContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    setToken(false);
  };
  return (
    <nav className="bg-gray-200 py-2 text-xl flex gap-5 justify-center sticky top-0">
      <NavLink
        className={({ isActive }) =>
          ` py-1 px-4 rounded-md ${
            isActive
              ? "bg-indigo-500  text-white font-semibold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
              : "bg-white/50 "
          }`
        }
        to="/"
      >
        Home
      </NavLink>
      {!token ? (
        <>
          <NavLink
            className={({ isActive }) =>
              ` py-1 px-4 rounded-md ${
                isActive
                  ? "bg-indigo-500  text-white font-semibold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  : "bg-white/50 "
              }`
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` py-1 px-4 rounded-md ${
                isActive
                  ? "bg-indigo-500  text-white font-semibold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  : "bg-white/50 "
              }`
            }
            to="/reg"
          >
            Register
          </NavLink>
        </>
      ) : (
        <button
          className="rounded-md font-semibold py-1 cursor-pointer px-4 focus:outline-none focus:shadow-outline bg-white/50 "
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
