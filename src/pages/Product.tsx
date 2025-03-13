
import { useParams } from 'react-router-dom';
import Layout from "@/components/Layout/Layout";
import { useState } from 'react';
import { Product as ProductType } from '@/types/Product';

const Product = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  
  // Mock data do produto
  const product: ProductType = {
    id: id || '1',
    name: `Produto ${id}`,
    price: 99.90,
    description: 'Descrição detalhada do produto. Este é um exemplo de texto para o produto selecionado. Aqui entrarão todas as informações relevantes sobre o produto, como material, tamanho, cor, etc.',
    sizes: ['P', 'M', 'G', 'GG'],
    details: [
      'Material de alta qualidade',
      'Feito no Brasil',
      'Entrega em todo o país',
      'Garantia de 30 dias'
    ]
  };

  return (
    <Layout title={`${product.name} | Use Deluxxe`}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagem do produto */}
          <div className="bg-gray-200 aspect-square rounded-lg"></div>
          
          {/* Informações do produto */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-pink-600 font-semibold mb-4">R$ {product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
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
            
            <button className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors mb-4">
              Adicionar ao carrinho
            </button>
            
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="font-medium mb-2">Detalhes</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
