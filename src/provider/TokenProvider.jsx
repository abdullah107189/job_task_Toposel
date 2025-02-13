import { useEffect, useState } from "react";
import { createContext } from "react";

export const tokenContext = createContext(null);
// eslint-disable-next-line react/prop-types
const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, [token]);
  const tokenInfo = {
    token,
    setToken,
  };
  return (
    <tokenContext.Provider value={tokenInfo}>{children}</tokenContext.Provider>
  );
};

export default TokenProvider;
