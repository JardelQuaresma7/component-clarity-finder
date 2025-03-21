
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "@/services/productService";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/UI/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";

// Import components
import BasicInfoTab from "./components/BasicInfoTab";
import DescriptionTab from "./components/DescriptionTab";
import ImagesTab from "./components/ImagesTab";
import VariationsTab from "./components/VariationsTab";
import { ProductFormData } from "./types";

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  
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

            <TabsContent value="basic">
              <BasicInfoTab register={register} errors={errors} />
            </TabsContent>

            <TabsContent value="description">
              <DescriptionTab register={register} />
            </TabsContent>

            <TabsContent value="images">
              <ImagesTab 
                imageUrls={imageUrls} 
                setImageUrls={setImageUrls} 
                setValue={setValue} 
              />
            </TabsContent>

            <TabsContent value="variations">
              <VariationsTab register={register} />
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
