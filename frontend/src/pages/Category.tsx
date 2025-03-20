import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Layout from "@/components/Layout/Layout";
import { ProductCard } from "@/components/Products";
import { Separator } from "@/components/UI/separator";
import { getProducts } from "@/services/productService";
import { useQuery } from '@tanstack/react-query';

interface CategoryParams {
  category?: string;
  subcategory?: string;
  [key: string]: string | undefined;
}

const Category = () => {
  const { category, subcategory } = useParams<CategoryParams>();
  const location = useLocation();
  const [filters, setFilters] = useState({
    sizes: [],
    colors: [],
    priceRange: { min: 0, max: 500 }
  });

  const isNewArrivals = location.pathname === '/novidades';
  const isOutlet = location.pathname === '/outlet';

  let title = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
  if (subcategory) {
    title += ` - ${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}`;
  }
  if (isNewArrivals) {
    title = 'Novidades';
  }
  if (isOutlet) {
    title = 'Outlet';
  }

  const { data, isLoading } = useQuery({
    queryKey: ['products', category, subcategory, isNewArrivals, isOutlet],
    queryFn: () => {
      const params: Record<string, any> = {};
      
      if (category) params.category = category;
      if (subcategory) params.subcategory = subcategory;
      if (isNewArrivals) params.new = true;
      if (isOutlet) params.discount = true;
      
      return getProducts(params);
    }
  });

  const products = data?.data || [];

  return (
    <Layout title={`${title} | Use Deluxxe`}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-600 mt-2">
            {products.length} {products.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>
          <Separator className="my-4" />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-4 h-80 animate-pulse"></div>
            ))}
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
              Tente outros filtros ou categorias para encontrar o que você está procurando.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Category;
