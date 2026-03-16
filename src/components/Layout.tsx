import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import BreadcrumbBar from "./BreadcrumbBar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <BreadcrumbBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
