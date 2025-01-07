import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-5">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
