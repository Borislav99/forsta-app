// imports
import { Header } from "../components";
import { logo } from "../utils/forstaLogo";
// react router
import { Outlet } from "react-router-dom";
// component
const SharedLayout = () => {
  // jsx
  return (
    <>
      <Header logo={logo} text="forsta logo" />
      <Outlet />
    </>
  );
};
// exports
export default SharedLayout;
