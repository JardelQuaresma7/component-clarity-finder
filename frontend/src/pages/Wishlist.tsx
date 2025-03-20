
import { useState } from 'react';
import Layout from "@/components/Layout/Layout";
import { ProductCard } from "@/components/Products";
import { Button } from "@/components/UI/button";
import { Trash } from 'lucide-react';

// Simulação de lista de favoritos
const mockWishlistItems = [
  {
    id: '1',
    name: 'Vestido Floral',
    price: 129.90,
    images: ['https://placehold.co/300x400/pink/white?text=Vestido+Floral'],
    discount: 0,
    stock: 10
  },
  {
    id: '2',
    name: 'Blusa Básica',
    price: 59.90,
    images: ['https://placehold.co/300x400/gray/white?text=Blusa+Básica'],
    discount: 10,
    stock: 5
  },
  {
    id: '3',
    name: 'Calça Jeans',
    price: 149.90,
    images: ['https://placehold.co/300x400/blue/white?text=Calça+Jeans'],
    discount: 15,
    stock: 3
  }
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems);
  
  const removeItem = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <Layout title="Favoritos | Use Deluxxe">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Meus Favoritos</h1>
        
        {wishlistItems.length > 0 ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistItems.map(product => (
                <div key={product.id} className="relative group">
                  <ProductCard product={product} />
                  <button 
                    onClick={() => removeItem(product.id)}
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Remover dos favoritos"
                  >
                    <Trash className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">Você ainda não adicionou favoritos</h2>
            <p className="text-gray-600 mb-6">Adicione produtos aos seus favoritos para vê-los aqui</p>
            <Button className="bg-pink-600 hover:bg-pink-700">
              Explorar produtos
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;
