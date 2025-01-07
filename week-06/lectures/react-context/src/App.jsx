import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ProtectLayout from "./layouts/ProtectLayout";
import UserProfile from "./pages/UserProfile";
import { AuthContextProvider, useAuth } from "./context/AuthContext";
import { useEffect } from "react";

function App() {
  const { user, setUser, token, setToken, isAuth, setIsAuth, checkAuth } = useAuth();
  useEffect(() => {
   checkAuth(user);
  }, [user]);
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={<MainLayout />}
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="protected" element={<ProtectLayout />} >
              <Route index element={<UserProfile />} />
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
