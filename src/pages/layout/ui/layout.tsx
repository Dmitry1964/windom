import { Outlet } from "react-router-dom";
import Header from "src/widgets/header/ui/header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
