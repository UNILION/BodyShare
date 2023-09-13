import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = function () {
  return (
    <>
      <Header />

      <Outlet />

      <NavBar />
    </>
  );
};

export default Layout;