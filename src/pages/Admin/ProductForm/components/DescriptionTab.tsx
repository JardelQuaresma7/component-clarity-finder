import React from "react";
import { Textarea } from "../../../../components/UI/textarea";
import { Label } from "../../../../components/UI/label";
import { ProductFormData } from "../types";
import { UseFormRegister } from "react-hook-form";

interface DescriptionTabProps {
  register: UseFormRegister<ProductFormData>;
}

const DescriptionTab = ({ register }: DescriptionTabProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="description">Descrição do Produto</Label>
        <Textarea
          id="description"
          {...register("description")}
          rows={10}
          placeholder="Descreva os detalhes do produto..."
        />
      </div>
    </div>
  );
};

export default DescriptionTab;
