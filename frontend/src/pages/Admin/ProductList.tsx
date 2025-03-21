
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/productService";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/UI/table";
import { useNavigate } from "react-router-dom";
import { Trash, Pencil, Plus } from "lucide-react";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", page, searchTerm],
    queryFn: () => getProducts({ page, search: searchTerm, limit: 10 }),
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // O termo de busca já está sendo aplicado via hook de useQuery
  };

  const handleEdit = (id: string) => {
    navigate(`/admin/produtos/editar/${id}`);
  };

  const handleDelete = (id: string) => {
    // Aqui implementariamos a lógica de exclusão
    console.log("Deletando produto:", id);
  };

  return (
    <Layout title="Gerenciar Produtos | Use Deluxxe">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Gerenciar Produtos</h1>
          <Button 
            onClick={() => navigate("/admin/produtos/novo")}
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="mr-2 h-4 w-4" /> Novo Produto
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <form onSubmit={handleSearch} className="flex gap-2 mb-6">
            <Input
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">Buscar</Button>
          </form>

          {isLoading ? (
            <div className="text-center py-8">Carregando produtos...</div>
          ) : isError ? (
            <div className="text-center py-8 text-red-500">
              Erro ao carregar produtos. Tente novamente.
            </div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Imagem</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Preço</TableHead>
                    <TableHead>Estoque</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.data.map((product: any) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        {product.images && product.images[0] ? (
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                            Sem imagem
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>{product.category?.name}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(product.id)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDelete(product.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {data?.data.length === 0 && (
                <div className="text-center py-8">
                  Nenhum produto encontrado.
                </div>
              )}

              {data?.pagination && (
                <div className="flex justify-between items-center mt-6">
                  <div>
                    Mostrando página {data.pagination.page} de{" "}
                    {data.pagination.pages}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      disabled={data.pagination.page === 1}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                    >
                      Anterior
                    </Button>
                    <Button
                      variant="outline"
                      disabled={data.pagination.page >= data.pagination.pages}
                      onClick={() =>
                        setPage((p) => Math.min(data.pagination.pages, p + 1))
                      }
                    >
                      Próxima
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;
