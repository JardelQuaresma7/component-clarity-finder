export interface ProductFormData {
  name: string;
  price: number;
  description: string;
  status: 'active' | 'inactive';
  sizes: string[];
  images: File[];
  category: string;
  sku: string;
  stock: number;
  isNewArrival: boolean;
  isFavorite: boolean;
}
