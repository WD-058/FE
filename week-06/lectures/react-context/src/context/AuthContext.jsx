import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      username: "",
      password: "",
      email: "",
    }
  );
  const [token, setToken] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [theme, setTheme] = useState("light");

  const checkAuth = (user) => {
    if (user) {
      setIsAuth(true);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isAuth,
        setIsAuth,
        theme,
        setTheme,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
