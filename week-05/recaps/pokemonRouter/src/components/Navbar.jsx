import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar justify-between bg-primary px-12 text-xl text-white">
      <ul>
        <h1>Pokemon</h1>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: "gray" }
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
