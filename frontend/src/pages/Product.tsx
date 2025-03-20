
import { useParams } from 'react-router-dom';
import Layout from "@/components/Layout/Layout";
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProductBySlug } from '@/services/productService';
import { useToast } from '@/components/UI/use-toast';

const Product = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const { toast } = useToast();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductBySlug(id || ''),
    enabled: !!id,
  });

  const product = data?.data;

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selecione um tamanho",
        description: "Por favor, selecione um tamanho antes de adicionar ao carrinho",
        variant: "destructive",
      });
      return;
    }

    if (product?.colors?.length && !selectedColor) {
      toast({
        title: "Selecione uma cor",
        description: "Por favor, selecione uma cor antes de adicionar ao carrinho",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  if (isLoading) {
    return (
      <Layout title="Carregando...">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-24 bg-gray-200 rounded mb-4"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout title="Produto não encontrado">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Produto não encontrado</h1>
            <p className="mb-4">Desculpe, não conseguimos encontrar o produto que você está procurando.</p>
            <a href="/" className="text-pink-600 hover:underline">Voltar para a página inicial</a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${product.name} | Use Deluxxe`}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagem do produto */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            {product.images && product.images.length > 0 ? (
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="bg-gray-200 aspect-square rounded-lg"></div>
            )}
          </div>
          
          {/* Informações do produto */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {product.discount > 0 ? (
              <div className="mb-4">
                <span className="text-xl text-pink-600 font-semibold mr-2">
                  R$ {((product.price * (100 - product.discount)) / 100).toFixed(2)}
                </span>
                <span className="text-gray-500 line-through">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <p className="text-xl text-pink-600 font-semibold mb-4">
                R$ {product.price.toFixed(2)}
              </p>
            )}
            
            <p className="text-gray-600 mb-6">{product.description || product.shortDescription}</p>
            
            {/* Cores */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Cor</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button 
                      key={color.name}
                      className={`w-8 h-8 rounded-full border-2 focus:outline-none ${
                        selectedColor === color.name 
                          ? 'border-pink-500' 
                          : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.code }}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Tamanhos */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Tamanho</h3>
                <div className="flex gap-2">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      className={`w-10 h-10 border rounded flex items-center justify-center focus:outline-none ${
                        selectedSize === size 
                          ? 'border-pink-500 bg-pink-50 text-pink-700' 
                          : 'border-gray-300 hover:border-pink-500'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <button 
              className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors mb-4"
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
            >
              {product.stock > 0 ? 'Adicionar ao carrinho' : 'Produto esgotado'}
            </button>
            
            {/* Detalhes adicionais */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="font-medium mb-2">Detalhes</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {product.material && <li>Material: {product.material}</li>}
                {product.composition && <li>Composição: {product.composition}</li>}
                {product.care && <li>Cuidados: {product.care}</li>}
                <li>SKU: {product.sku}</li>
                <li>Disponibilidade: {product.stock > 0 ? `${product.stock} em estoque` : 'Esgotado'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
