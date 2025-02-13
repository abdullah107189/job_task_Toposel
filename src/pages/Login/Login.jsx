import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { tokenContext } from "../../provider/TokenProvider";

const Login = () => {
  const { setToken } = useContext(tokenContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length <= 5) {
      return toast.error("At least password 6 letter must");
    }
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:4545/login-user?email=${formData?.email}&pass=${formData?.password}`
      );
      if (data.status === true) {
        toast.success("Login Successful");
        localStorage.setItem("token", data?.token);
        setToken(true);
        navigate("/");
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(data?.message);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white m-10 shadow-lg rounded-lg grid grid-cols-2 gap-5"
    >
      <h2 className="text-2xl font-bold mb-4 text-center col-span-2">Login</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className="col-span-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};

export default Login;
