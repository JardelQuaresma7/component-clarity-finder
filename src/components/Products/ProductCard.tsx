import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, description, imageUrl } = product;
  
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 bg-gray-200">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-2">{name}</h3>
        <p className="text-gray-600 mb-2 line-clamp-2">{description}</p>
        <p className="font-bold text-lg mb-3">R$ {price.toFixed(2)}</p>
        <div className="flex space-x-2">
          <Link 
            to={`/produto/${id}`} 
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded text-center transition-colors"
          >
            Ver detalhes
          </Link>
          <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded transition-colors">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;