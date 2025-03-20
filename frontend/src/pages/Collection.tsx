
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { useQuery } from '@tanstack/react-query';
import { ProductCard } from "@/components/Products";
import { Separator } from "@/components/UI/separator";
import { getCollectionProducts } from "@/services/productService";
import { Button } from "@/components/UI/button";

const Collection = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['collection', collectionId],
    queryFn: () => getCollectionProducts(collectionId || ''),
    enabled: !!collectionId,
  });

  const products = data?.data || [];
  
  // Mapear coleções para títulos amigáveis
  const getCollectionTitle = () => {
    switch(collectionId) {
      case 'primavera-verao':
        return 'Coleção Primavera/Verão';
      case 'outono-inverno':
        return 'Coleção Outono/Inverno';
      case 'dia-das-maes':
        return 'Especial Dia das Mães';
      case 'dia-dos-namorados':
        return 'Especial Dia dos Namorados';
      default:
        return `Coleção ${collectionId?.replace(/-/g, ' ')}`;
    }
  };

  return (
    <Layout title={`${getCollectionTitle()} | Use Deluxxe`}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">{getCollectionTitle()}</h1>
          <p className="text-gray-600 mt-2">
            Descubra peças exclusivas da nossa coleção especial
          </p>
          <Separator className="my-4" />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-4 h-80 animate-pulse"></div>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-4">Não foi possível carregar os produtos</h2>
            <p className="text-gray-600 mb-6">
              Ocorreu um erro ao carregar os produtos desta coleção.
            </p>
            <Button onClick={() => window.location.reload()}>
              Tentar novamente
            </Button>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id || product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h2>
            <p className="text-gray-600">
              Não há produtos disponíveis nesta coleção no momento.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Collection;
