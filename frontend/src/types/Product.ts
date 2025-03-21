
export interface Product {
  id: string;
  _id?: string;
  name: string;
  slug: string;
  price: number;
  discount: number;
  images: string[];
  colors: Array<{
    name: string;
    code: string;
  }>;
  sizes: string[];
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  category: {
    name: string;
    slug: string;
  };
  material?: string;
  composition?: string;
  care?: string;
  sku: string;
  sizeChart?: Array<{
    size: string;
    bust: number;
    waist: number;
    hip: number;
    length: number;
  }>;
  reviews?: string[];
  isNewArrival: boolean;
  isFavorite: boolean;
  stock: number;
}
