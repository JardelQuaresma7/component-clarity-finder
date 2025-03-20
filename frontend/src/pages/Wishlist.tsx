
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "@/components/Layout/Layout";
import { ProductCard } from "@/components/Products";
import { Button } from "@/components/UI/button";
import { Trash } from 'lucide-react';
import { useToast } from "@/components/UI/use-toast";
import { getWishlistItems, removeFromWishlist } from "@/services/productService";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Wishlist = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  // Fetch wishlist items using React Query
  const { data: wishlistData, isLoading, isError } = useQuery({
    queryKey: ['wishlist'],
    queryFn: getWishlistItems
  });
  
  const wishlistItems = wishlistData?.data || [];
  
  // Set up mutation for removing items
  const removeMutation = useMutation({
    mutationFn: (id: string) => removeFromWishlist(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
      toast({
        title: "Item removido",
        description: "O produto foi removido dos seus favoritos",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Não foi possível remover o produto dos favoritos",
        variant: "destructive",
      });
    }
  });
  
  const handleRemoveItem = (id: string) => {
    removeMutation.mutate(id);
  };
  
  const handleExploreProducts = () => {
    navigate('/categoria/novidades');
  };

  return (
    <Layout title="Favoritos | Use Deluxxe">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Meus Favoritos</h1>
        
        {isLoading ? (
          <div className="text-center py-12">
            <p>Carregando seus favoritos...</p>
          </div>
        ) : isError ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">Erro ao carregar favoritos</h2>
            <p className="text-gray-600 mb-6">Tente novamente mais tarde</p>
            <Button className="bg-pink-600 hover:bg-pink-700" onClick={handleExploreProducts}>
              Explorar produtos
            </Button>
          </div>
        ) : wishlistItems.length > 0 ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistItems.map(product => (
                <div key={product.id} className="relative group">
                  <ProductCard product={product} />
                  <button 
                    onClick={() => handleRemoveItem(product.id)}
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
            <Button className="bg-pink-600 hover:bg-pink-700" onClick={handleExploreProducts}>
              Explorar produtos
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;
