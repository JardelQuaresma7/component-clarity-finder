
import { Textarea } from "@/components/UI/textarea";
import { Label } from "@/components/UI/label";
import { ProductFormData } from "../types";
import { UseFormRegister } from "react-hook-form";

interface DescriptionTabProps {
  register: UseFormRegister<ProductFormData>;
}

const DescriptionTab = ({ register }: DescriptionTabProps) => {
  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default DescriptionTab;
