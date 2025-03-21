import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../components/UI/AdminLayout';
import Dashboard from '../pages/Admin/Dashboard';
import ProductList from '../pages/Admin/ProductList';
import ProductForm from '../pages/Admin/ProductForm';
import NotFound from '../pages/NotFound';

function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      } />
      <Route path="/produtos" element={
        <AdminLayout>
          <ProductList />
        </AdminLayout>
      } />
      <Route path="/produtos/novo" element={
        <AdminLayout>
          <ProductForm />
        </AdminLayout>
      } />
      <Route path="/produtos/editar/:id" element={
        <AdminLayout>
          <ProductForm />
        </AdminLayout>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdminApp;