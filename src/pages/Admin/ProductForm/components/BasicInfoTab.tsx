
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { ProductFormData } from "../types";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface BasicInfoTabProps {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
}

const BasicInfoTab = ({ register, errors }: BasicInfoTabProps) => {
  return (
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
  );
};

export default BasicInfoTab;
