import React from "react";
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
        <Label htmlFor="category">Categoria</Label>
        <select
          id="category"
          {...register("category", { required: "Categoria é obrigatória" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Selecione uma categoria</option>
          <option value="camisetas">Camisetas</option>
          <option value="calcas">Calças</option>
          <option value="acessorios">Acessórios</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>

      <div className="space-y-2 md:col-span-2">
        <div className="flex gap-4">
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
      </div>
    </div>
  );
};

export default BasicInfoTab;
