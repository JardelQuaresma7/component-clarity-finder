import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { CategorySection, FeaturedProducts } from "@/components/Products";
import { Button } from "@/components/UI/button";

const Home = () => {
  const navigate = useNavigate();

  const handleViewCollection = () => {
    navigate('/colecao/primavera-verao');
  };

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
          <Button 
            className="bg-pink-600 hover:bg-pink-700 text-white transition-colors"
            onClick={handleViewCollection}
          >
            Ver coleção
          </Button>
        </div>
        
        {/* Categorias em destaque */}
        <CategorySection />
        
        {/* Produtos em Destaque */}
        <FeaturedProducts />
      </div>
    </Layout>
  );
};

export default Home;
