import FixedNav from "@/components/molecules/FixedNav";
import Footer from "@/components/molecules/Footer";
import Header from "@/components/molecules/Header";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const isLogged = localStorage.getItem("user-token");

  return isLogged ? (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <FixedNav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default ProtectedRoute;
