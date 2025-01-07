import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navigation() {
  const { theme, setTheme } = useAuth();
  const handleClick = () => setTheme(prev => prev === "light" ? "dark" : "light");
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
