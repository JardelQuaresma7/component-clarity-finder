
import { Label } from "@/components/UI/label";
import { ProductFormData } from "../types";
import { UseFormRegister } from "react-hook-form";

interface VariationsTabProps {
  register: UseFormRegister<ProductFormData>;
}

const VariationsTab = ({ register }: VariationsTabProps) => {
  return (
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
  );
};

export default VariationsTab;
