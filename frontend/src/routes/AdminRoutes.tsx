
import { Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/Admin/Dashboard";
import ProductList from "@/pages/Admin/ProductList";
import ProductForm from "@/pages/Admin/ProductForm";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/produtos" element={<ProductList />} />
      <Route path="/produtos/novo" element={<ProductForm />} />
      <Route path="/produtos/editar/:id" element={<ProductForm />} />
    </Routes>
  );
};

export default AdminRoutes;
