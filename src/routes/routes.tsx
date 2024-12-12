import { AreaClientePage } from "@/pages/AreaCliente";
import { Login } from "@/pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "@/pages/NotFound";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to={"/area-cliente"} />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/area-cliente" element={<AreaClientePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
