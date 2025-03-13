
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout title="Página não encontrada | Use Deluxxe">
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-pink-600">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Página não encontrada</p>
          <a href="/" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Voltar para a página inicial
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
