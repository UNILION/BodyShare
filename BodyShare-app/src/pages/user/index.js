import Header from "components/layout/Header";
import { Outlet } from "react-router-dom";

const User = function () {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default User;