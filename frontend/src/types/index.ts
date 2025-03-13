// Common TypeScript interfaces and types used across the application

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string[];
    sizes?: string[];
    category: string;
  }
  