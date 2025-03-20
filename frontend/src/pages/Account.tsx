import { useState } from 'react';
import Layout from "@/components/Layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Separator } from "@/components/UI/separator";
import { Package, User, CreditCard, Heart } from 'lucide-react';

const Account = () => {
  // Estado para armazenar dados do perfil (simulado)
  const [profile, setProfile] = useState({
    name: 'Maria Silva',
    email: 'maria.silva@exemplo.com',
    phone: '(11) 98765-4321',
  });

  // Estado para armazenar pedidos simulados
  const [orders] = useState([
    { id: '#12345', date: '15/10/2023', status: 'Entregue', total: 245.80 },
    { id: '#12346', date: '02/11/2023', status: 'Em trânsito', total: 129.90 },
  ]);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Perfil atualizado com sucesso!');
  };

  const handleLogout = () => {
    alert('Logout realizado com sucesso!');
  };

  return (
    <Layout title="Minha Conta | Use Deluxxe">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Minha Conta</h1>
        
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="orders" className="flex flex-col items-center gap-2 p-4">
              <Package className="h-5 w-5" />
              <span>Meus Pedidos</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex flex-col items-center gap-2 p-4">
              <User className="h-5 w-5" />
              <span>Perfil</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex flex-col items-center gap-2 p-4">
              <CreditCard className="h-5 w-5" />
              <span>Endereços</span>
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex flex-col items-center gap-2 p-4">
              <Heart className="h-5 w-5" />
              <span>Favoritos</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Meus Pedidos</h2>
              
              {orders.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-4 text-left">Pedido</th>
                        <th className="py-3 px-4 text-left">Data</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-left">Total</th>
                        <th className="py-3 px-4 text-left">Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-t">
                          <td className="py-4 px-4">{order.id}</td>
                          <td className="py-4 px-4">{order.date}</td>
                          <td className="py-4 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === 'Entregue' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">R$ {order.total.toFixed(2)}</td>
                          <td className="py-4 px-4">
                            <Button variant="outline" size="sm">
                              Detalhes
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-600">Você ainda não realizou nenhum pedido.</p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="profile">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Meus Dados</h2>
              
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nome completo</label>
                    <Input 
                      id="name" 
                      value={profile.name} 
                      onChange={(e) => setProfile({...profile, name: e.target.value})} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={profile.email} 
                      onChange={(e) => setProfile({...profile, email: e.target.value})} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
                    <Input 
                      id="phone" 
                      value={profile.phone} 
                      onChange={(e) => setProfile({...profile, phone: e.target.value})} 
                    />
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Alterar senha</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="current-password" className="text-sm font-medium">Senha atual</label>
                      <Input id="current-password" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="new-password" className="text-sm font-medium">Nova senha</label>
                      <Input id="new-password" type="password" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button type="submit" className="bg-pink-600 hover:bg-pink-700">
                    Salvar alterações
                  </Button>
                  <Button type="button" variant="outline" onClick={handleLogout}>
                    Sair da conta
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>
          
          <TabsContent value="addresses">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Meus Endereços</h2>
                <Button className="bg-pink-600 hover:bg-pink-700">
                  Adicionar Endereço
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 relative">
                  <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Principal
                  </div>
                  <h3 className="font-medium">Casa</h3>
                  <p className="text-gray-600">Maria Silva</p>
                  <p className="text-gray-600">Rua das Flores, 123</p>
                  <p className="text-gray-600">Jardim Primavera - São Paulo/SP</p>
                  <p className="text-gray-600">CEP: 01234-567</p>
                  
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm">Editar</Button>
                    <Button variant="outline" size="sm">Remover</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Trabalho</h3>
                  <p className="text-gray-600">Maria Silva</p>
                  <p className="text-gray-600">Av. Paulista, 1000</p>
                  <p className="text-gray-600">Bela Vista - São Paulo/SP</p>
                  <p className="text-gray-600">CEP: 01310-100</p>
                  
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm">Editar</Button>
                    <Button variant="outline" size="sm">Remover</Button>
                    <Button variant="outline" size="sm">Tornar principal</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="wishlist">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Meus Favoritos</h2>
              <p className="text-gray-600">Acesse todos os seus produtos favoritos.</p>
              <Button className="mt-4 bg-pink-600 hover:bg-pink-700">
                Ver todos os favoritos
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Account;
