
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '@/services/productService';
import { Button } from '@/components/UI/button';

const FeaturedProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: getFeaturedProducts
  });

  const products = data?.data || [];

  if (isLoading) {
    return (
      <div className="py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Produtos em Destaque</h2>
        <div className="flex justify-center">
          <p>Carregando produtos em destaque...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Produtos em Destaque</h2>
        <div className="flex justify-center flex-col items-center">
          <p className="mb-4">Não foi possível carregar os produtos em destaque.</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Tentar novamente
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Produtos em Destaque</h2>
      {products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/categoria/destaques">
              <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                Ver todos os destaques
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <p>Nenhum produto em destaque no momento.</p>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
