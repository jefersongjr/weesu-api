import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateProductForm from './CreateProductForm';
import ListProducts from './ListProducts';
import EditProductForm from './EditProductForm';

const HomeContent: React.FC = () => {
  return (
    <Routes>
      <Route path="create-product" element={<CreateProductForm />} />
      <Route path="edit-product" element={<EditProductForm />} />
      <Route path="product-list" element={<ListProducts />} />
    </Routes>
  );
};

export default HomeContent;
