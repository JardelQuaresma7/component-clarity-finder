
import { Link } from 'react-router-dom';
import { Product } from '@/types/Product';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 bg-gray-200"></div>
      <div className="p-4">
        <h3 className="font-medium mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="font-bold text-lg mb-3">R$ {product.price.toFixed(2)}</p>
        <Link to={`/produto/${product.id}`}>
          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded transition-colors">
            Ver produto
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
