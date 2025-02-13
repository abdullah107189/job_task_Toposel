import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        console.log("Login successful");
        // Redirect to protected page
      } else {
        const errorData = await response.json();
        console.error(
          "Login failed:",
          errorData.message || "Invalid credentials"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-4 bg-white m-10 shadow-lg rounded-lg grid grid-cols-2 gap-5"
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
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="col-span-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
