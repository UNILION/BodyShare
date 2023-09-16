import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Category from "./Category";

const Layout = function () {
  return (
    <>
      <Header />
      <Category />

      <Outlet />

      <NavBar />
    </>
  );
};

export default Layout;