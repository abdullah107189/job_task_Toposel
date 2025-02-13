import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { tokenContext } from "../../provider/TokenProvider";

const Register = () => {
  const { setToken } = useContext(tokenContext);
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
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length <= 5) {
      return toast.error("At least password 6 letter must");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4545/add-user",
        formData
      );
      console.log(data);
      if (data?.token) {
        localStorage.setItem("token", data?.token);
        setToken(true);
      }
      if (data.result?.insertedId) {
        setFormData({
          username: "",
          password: "",
          fullName: "",
          gender: "",
          dateOfBirth: "",
          country: "",
          email: "",
        });
        toast.success("Register Complete 😀");
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 rounded-lg shadow-lg bg-white grid grid-cols-2 gap-5 m-10"
    >
      <h2 className="text-2xl font-bold mb-4 col-span-2 text-center ">
        Register
      </h2>

      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

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

      <div className="mb-4">
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

      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-gray-700 font-bold mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
          Gender
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
          Date of Birth
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
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter your country"
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer col-span-2 bg-indigo-500 hover:bg-indigo- 700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
