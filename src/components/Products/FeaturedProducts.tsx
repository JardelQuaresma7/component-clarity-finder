
import ProductCard from './ProductCard';

const mockProducts = [
  { id: '1', name: 'Vestido Floral', description: 'Vestido florido para o verão', price: 99.90 },
  { id: '2', name: 'Blusa Básica', description: 'Blusa básica de algodão', price: 59.90 },
  { id: '3', name: 'Calça Jeans', description: 'Calça jeans de alta qualidade', price: 129.90 },
  { id: '4', name: 'Saia Midi', description: 'Saia midi elegante', price: 89.90 },
];

const FeaturedProducts = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Produtos em Destaque</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;