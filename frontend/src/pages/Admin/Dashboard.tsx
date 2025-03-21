
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/UI/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Painel Administrativo | Use Deluxxe">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Painel Administrativo</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Produtos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Gerenciar produtos da loja</p>
              <Button 
                onClick={() => navigate('/admin/produtos')}
                className="w-full"
              >
                Gerenciar Produtos
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Pedidos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Visualizar e gerenciar pedidos</p>
              <Button 
                onClick={() => navigate('/admin/pedidos')}
                className="w-full"
                variant="outline"
              >
                Ver Pedidos
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Coleções</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Gerenciar coleções da loja</p>
              <Button 
                onClick={() => navigate('/admin/colecoes')}
                className="w-full"
                variant="outline"
              >
                Gerenciar Coleções
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
