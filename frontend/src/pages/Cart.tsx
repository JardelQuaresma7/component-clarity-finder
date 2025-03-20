
import { useState } from 'react';
import Layout from "@/components/Layout/Layout";
import { Separator } from "@/components/UI/separator";
import { Button } from "@/components/UI/button";
import { Trash, Plus, Minus } from 'lucide-react';

// Simulação de carrinho - seria substituído por uma integração real
const mockCartItems = [
  {
    id: '1',
    name: 'Vestido Floral',
    price: 129.90,
    quantity: 1,
    size: 'M',
    color: 'Azul',
    image: 'https://placehold.co/300x400/pink/white?text=Vestido+Floral'
  },
  {
    id: '2',
    name: 'Blusa Básica',
    price: 59.90,
    quantity: 2,
    size: 'P',
    color: 'Branco',
    image: 'https://placehold.co/300x400/gray/white?text=Blusa+Básica'
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(mockCartItems);
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 299 ? 0 : 19.90;
  const total = subtotal + shipping;

  return (
    <Layout title="Carrinho | Use Deluxxe">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Seu Carrinho</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-6 border-b">
                  <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Tamanho: {item.size} | Cor: {item.color}
                    </p>
                    <p className="font-medium text-pink-600">R$ {item.price.toFixed(2)}</p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 border-r"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 border-l"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span>{shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Finalizar Compra
                </Button>
                <Button variant="outline" className="w-full">
                  Continuar Comprando
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-gray-600">
                <p className="mb-2">Métodos de pagamento:</p>
                <div className="flex gap-2">
                  <span className="bg-gray-200 px-2 py-1 rounded">Pix</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Cartão</span>
                  <span className="bg-gray-200 px-2 py-1 rounded">Boleto</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">Seu carrinho está vazio</h2>
            <p className="text-gray-600 mb-6">Adicione produtos ao seu carrinho para continuar</p>
            <Button className="bg-pink-600 hover:bg-pink-700">
              Voltar às compras
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
