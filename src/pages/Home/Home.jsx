import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaTransgender,
  FaSearch,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const token = localStorage.getItem("token");
  useAuth();

  const { data: users = [], isFetching } = useQuery({
    queryKey: ["users", searchInput],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:4545/searchUser?query=${searchInput}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    },
    enabled: !!token,
  });

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold mb-4">All User Info</h1>
      {/* input field  */}
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden my-2 w-2/3 mx-auto">
        <span className="p-2 bg-transparent">
          <FaSearch className="text-gray-500 " />
        </span>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by username or email"
          onChange={(e) => setSearchInput(e.target.value)}
          className="border-none outline-none py-2 px-4 w-full"
        />
      </div>

      {/* users content  */}
      {isFetching ? (
        <div className=" grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, idx) => {
            return (
              <div
                key={idx}
                className="animate-pulse  bg-gray-200 h-32 rounded-lg p-4 shadow-md flex flex-col justify-center"
              >
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
            );
          })}
        </div>
      ) : users.length === 0 ? (
        <div className="text-2xl text-center my-10 font-semibold">
          {!token
            ? "If you want to show user's card then Login or Register"
            : "Not Found Data"}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {users?.map((user, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg p-4 shadow-md flex flex-col justify-center"
            >
              <p className="flex items-center">
                <FaUser className="mr-2" /> {user?.username}
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" /> {user?.email}
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> {user?.country}
              </p>
              <p className="flex items-center">
                <FaBirthdayCake className="mr-2" /> {user?.dateOfBirth}
              </p>
              <p className="flex items-center">
                <FaTransgender className="mr-2" /> {user?.gender}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
