
import api from './api';

export const getProducts = async (params = {}) => {
  try {
    const response = await api.get('/api/products', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductBySlug = async (slug: string) => {
  try {
    const response = await api.get(`/api/products/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${slug}:`, error);
    throw error;
  }
};

export const getFeaturedProducts = async () => {
  try {
    const response = await api.get('/api/products/featured');
    return response.data;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    throw error;
  }
};

export const getNewArrivals = async () => {
  try {
    const response = await api.get('/api/products/new-arrivals');
    return response.data;
  } catch (error) {
    console.error('Error fetching new arrivals:', error);
    throw error;
  }
};

// Wishlist functions
export const getWishlistItems = async () => {
  try {
    // This would typically call an API endpoint that returns the user's wishlist
    // For now, we'll return mock data until the backend is ready
    // In a real application, this would be: const response = await api.get('/api/wishlist');
    const mockItems = [
      {
        id: '1',
        name: 'Vestido Floral',
        price: 129.90,
        images: ['https://placehold.co/300x400/pink/white?text=Vestido+Floral'],
        discount: 0,
        stock: 10
      },
      {
        id: '2',
        name: 'Blusa Básica',
        price: 59.90,
        images: ['https://placehold.co/300x400/gray/white?text=Blusa+Básica'],
        discount: 10,
        stock: 5
      },
      {
        id: '3',
        name: 'Calça Jeans',
        price: 149.90,
        images: ['https://placehold.co/300x400/blue/white?text=Calça+Jeans'],
        discount: 15,
        stock: 3
      }
    ];
    
    return { data: mockItems, success: true };
  } catch (error) {
    console.error('Error fetching wishlist items:', error);
    throw error;
  }
};

export const addToWishlist = async (productId: string) => {
  try {
    // In a real app: const response = await api.post('/api/wishlist', { productId });
    console.log('Product added to wishlist:', productId);
    return { success: true, message: 'Product added to wishlist' };
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    throw error;
  }
};

export const removeFromWishlist = async (productId: string) => {
  try {
    // In a real app: const response = await api.delete(`/api/wishlist/${productId}`);
    console.log('Product removed from wishlist:', productId);
    return { success: true, message: 'Product removed from wishlist' };
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    throw error;
  }
};
