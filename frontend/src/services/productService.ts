
import api from './api';

export const getProducts = async (params = {}) => {
  const response = await api.get('/api/products', { params });
  return response.data;
};

export const getProductBySlug = async (slug: string) => {
  const response = await api.get(`/api/products/${slug}`);
  return response.data;
};

export const getFeaturedProducts = async () => {
  const response = await api.get('/api/products/featured');
  return response.data;
};

export const getNewArrivals = async () => {
  const response = await api.get('/api/products/new-arrivals');
  return response.data;
};
