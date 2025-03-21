
export interface ProductFormData {
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  stock: number;
  category: {
    name: string;
    slug: string;
  };
  sku: string;
  isNewArrival: boolean;
  isFavorite: boolean;
  images: string[];
  sizes: string[];
  colors: Array<{ name: string; code: string }>;
}
