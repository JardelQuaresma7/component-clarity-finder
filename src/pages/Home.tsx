
import Layout from "@/components/Layout/Layout";

const Home = () => {
  return (
    <Layout title="Use Deluxxe - Moda Feminina | Página Inicial">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo à Use Deluxxe</h1>
          <p className="text-xl text-gray-600">Moda feminina com estilo e qualidade</p>
        </div>
        
        {/* Banner */}
        <div className="bg-pink-100 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-pink-800 mb-4">Coleção Primavera/Verão</h2>
          <p className="text-lg text-pink-700 mb-6">Descubra as últimas tendências da estação com peças exclusivas</p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Ver coleção
          </button>
        </div>
        
        {/* Categorias em destaque */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Categorias em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Vestidos', 'Blusas', 'Calças'].map((category) => (
              <div key={category} className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                <a href={`/categoria/${category.toLowerCase()}`} className="text-pink-600 hover:text-pink-700 underline">
                  Ver produtos
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Destaques */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Produto {item}</h3>
                  <p className="text-gray-600 mb-2">Descrição do produto</p>
                  <p className="font-bold text-lg mb-3">R$ 99,90</p>
                  <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded transition-colors">
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
