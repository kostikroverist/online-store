import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full max-w-[1280px] mx-auto px-4">
          <Header />
          <Outlet />
          <footer>footer</footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
