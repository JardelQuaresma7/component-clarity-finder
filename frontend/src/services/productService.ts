
import api from './api';

export const getProducts = async (params = {}) => {
  try {
    const response = await api.get('/api/products', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return { data: [], success: false, error: 'Failed to fetch products' };
  }
};

export const getProductBySlug = async (slug: string) => {
  try {
    const response = await api.get(`/api/products/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${slug}:`, error);
    return { data: null, success: false, error: 'Failed to fetch product' };
  }
};

export const getFeaturedProducts = async () => {
  try {
    const response = await api.get('/api/products/featured');
    return response.data;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return { data: [], success: false, error: 'Failed to fetch featured products' };
  }
};

export const getNewArrivals = async () => {
  try {
    const response = await api.get('/api/products/new-arrivals');
    return response.data;
  } catch (error) {
    console.error('Error fetching new arrivals:', error);
    return { data: [], success: false, error: 'Failed to fetch new arrivals' };
  }
};
