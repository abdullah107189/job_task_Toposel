import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 py-2 text-xl flex gap-5 justify-center">
      <Link
        className="bg-white/50 hover:bg-white py-1 px-4 rounded-md"
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="bg-white/50 hover:bg-white py-1 px-4 rounded-md"
        to={"/login"}
      >
        Login
      </Link>
      <Link
        className="bg-white/50 hover:bg-white py-1 px-4 rounded-md"
        to={"/reg"}
      >
        Register
      </Link>
    </nav>
  );
};

export default Navbar;
