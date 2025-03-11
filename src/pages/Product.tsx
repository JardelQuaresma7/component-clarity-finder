
import { useParams } from 'react-router-dom';
import Layout from "@/components/Layout/Layout";

const Product = () => {
  const { id } = useParams();

  return (
    <Layout title={`Produto ${id} | Use Deluxxe`}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagem do produto */}
          <div className="bg-gray-200 aspect-square rounded-lg"></div>
          
          {/* Informações do produto */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Produto {id}</h1>
            <p className="text-xl text-pink-600 font-semibold mb-4">R$ 99,90</p>
            <p className="text-gray-600 mb-6">
              Descrição detalhada do produto. Este é um exemplo de texto para o produto selecionado.
              Aqui entrarão todas as informações relevantes sobre o produto, como material, tamanho, cor, etc.
            </p>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Tamanho</h3>
              <div className="flex gap-2">
                {['P', 'M', 'G', 'GG'].map(size => (
                  <button 
                    key={size}
                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-pink-500 focus:border-pink-500 focus:outline-none"
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
                <li>Material de alta qualidade</li>
                <li>Feito no Brasil</li>
                <li>Entrega em todo o país</li>
                <li>Garantia de 30 dias</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
