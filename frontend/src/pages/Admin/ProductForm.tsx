
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "@/services/productService";
import Layout from "@/components/Layout/Layout";
import { Input } from "@/components/UI/input";
import { Textarea } from "@/components/UI/textarea";
import { Button } from "@/components/UI/button";
import { Label } from "@/components/UI/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";

interface ProductFormData {
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  stock: number;
  category: {
    name: string;
    slug: string;
  };
  sku: string;
  isNewArrival: boolean;
  isFavorite: boolean;
  images: string[];
  sizes: string[];
  colors: Array<{ name: string; code: string }>;
}

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState("");
  
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<ProductFormData>();

  // Buscar produto se estiver em modo de edição
  const { data: productData, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductBySlug(id || ""),
    enabled: isEditMode,
  });

  useEffect(() => {
    if (productData?.data && isEditMode) {
      const product = productData.data;
      
      // Preencher formulário com dados do produto
      reset({
        name: product.name,
        price: product.price,
        description: product.description,
        shortDescription: product.shortDescription,
        stock: product.stock,
        category: product.category,
        sku: product.sku,
        isNewArrival: product.isNewArrival,
        isFavorite: product.isFavorite,
        images: product.images || [],
        sizes: product.sizes || [],
        colors: product.colors || [],
      });
      
      setImageUrls(product.images || []);
    }
  }, [productData, isEditMode, reset]);

  const addImage = () => {
    if (newImageUrl && !imageUrls.includes(newImageUrl)) {
      const updatedImages = [...imageUrls, newImageUrl];
      setImageUrls(updatedImages);
      setValue("images", updatedImages);
      setNewImageUrl("");
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = imageUrls.filter((_, i) => i !== index);
    setImageUrls(updatedImages);
    setValue("images", updatedImages);
  };

  const onSubmit = (data: ProductFormData) => {
    console.log("Dados do formulário:", data);
    // Aqui implementariamos a chamada à API para criar/editar o produto
    
    // Após salvar, redirecionamos para a lista de produtos
    navigate("/admin/produtos");
  };

  if (isLoading && isEditMode) {
    return (
      <Layout title="Carregando Produto | Use Deluxxe">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Carregando dados do produto...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${isEditMode ? 'Editar' : 'Novo'} Produto | Use Deluxxe`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {isEditMode ? "Editar Produto" : "Novo Produto"}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow p-6">
          <Tabs defaultValue="basic">
            <TabsList className="mb-6">
              <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
              <TabsTrigger value="description">Descrições</TabsTrigger>
              <TabsTrigger value="images">Imagens</TabsTrigger>
              <TabsTrigger value="variations">Variações</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do Produto</Label>
                  <Input
                    id="name"
                    {...register("name", { required: "Nome é obrigatório" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sku">SKU</Label>
                  <Input
                    id="sku"
                    {...register("sku", { required: "SKU é obrigatório" })}
                  />
                  {errors.sku && (
                    <p className="text-red-500 text-sm">{errors.sku.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Preço (R$)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    {...register("price", {
                      required: "Preço é obrigatório",
                      min: { value: 0, message: "Preço deve ser positivo" },
                    })}
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm">{errors.price.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stock">Estoque</Label>
                  <Input
                    id="stock"
                    type="number"
                    {...register("stock", {
                      required: "Estoque é obrigatório",
                      min: { value: 0, message: "Estoque deve ser positivo" },
                    })}
                  />
                  {errors.stock && (
                    <p className="text-red-500 text-sm">{errors.stock.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category.name">Nome da Categoria</Label>
                  <Input
                    id="category.name"
                    {...register("category.name", {
                      required: "Categoria é obrigatória",
                    })}
                  />
                  {errors.category?.name && (
                    <p className="text-red-500 text-sm">{errors.category.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category.slug">Slug da Categoria</Label>
                  <Input
                    id="category.slug"
                    {...register("category.slug", {
                      required: "Slug é obrigatório",
                    })}
                  />
                  {errors.category?.slug && (
                    <p className="text-red-500 text-sm">{errors.category.slug.message}</p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isNewArrival"
                    {...register("isNewArrival")}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="isNewArrival">Novidade</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isFavorite"
                    {...register("isFavorite")}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="isFavorite">Destaque</Label>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="description" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="shortDescription">Descrição Curta</Label>
                <Textarea
                  id="shortDescription"
                  {...register("shortDescription")}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição Completa</Label>
                <Textarea
                  id="description"
                  {...register("description")}
                  rows={10}
                />
              </div>
            </TabsContent>

            <TabsContent value="images" className="space-y-4">
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="URL da imagem"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="button" onClick={addImage}>
                    Adicionar
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {imageUrls.map((url, index) => (
                    <div key={index} className="relative">
                      <img
                        src={url}
                        alt={`Produto ${index + 1}`}
                        className="w-full h-32 object-cover rounded"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://placehold.co/300x400/gray/white?text=Erro+na+Imagem";
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="variations" className="space-y-4">
              <div className="space-y-4">
                <Label>Tamanhos disponíveis</Label>
                <div className="flex flex-wrap gap-2">
                  {["P", "M", "G", "GG"].map((size) => (
                    <label key={size} className="flex items-center space-x-2 border rounded p-2">
                      <input
                        type="checkbox"
                        value={size}
                        {...register("sizes")}
                        className="rounded border-gray-300"
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between mt-8 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/produtos")}
            >
              Cancelar
            </Button>
            <Button type="submit">
              {isEditMode ? "Atualizar Produto" : "Criar Produto"}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ProductForm;
