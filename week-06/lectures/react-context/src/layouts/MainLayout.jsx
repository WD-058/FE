import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function MainLayout() {
  return (
    <div>
      <h1>Main Layout</h1>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default MainLayout;
