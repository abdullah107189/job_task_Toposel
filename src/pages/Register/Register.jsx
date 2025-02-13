import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registration successful");
        // Redirect or show success message
      } else {
        const errorData = await response.json();
        console.error(
          "Registration failed:",
          errorData.message || "Something went wrong"
        );
        // Display error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 font-bold mb-2"
        >
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
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

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password:
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

      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-gray-700 font-bold mb-2"
        >
          Full Name:
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
          Gender:
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="dateOfBirth"
          className="block text-gray-700 font-bold mb-2"
        >
          Date of Birth:
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
          Country:
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
