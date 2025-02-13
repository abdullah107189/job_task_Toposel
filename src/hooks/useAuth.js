import { useEffect, useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      const newToken = localStorage.getItem("token");
      if (!newToken) {
        window.location.reload(); // ✅ যদি token না থাকে, তাহলে পেজ রিলোড হবে
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return { token, setToken };
};

export default useAuth;
