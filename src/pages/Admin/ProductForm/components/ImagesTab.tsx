
import { useState } from "react";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import { UseFormSetValue } from "react-hook-form";
import { ProductFormData } from "../types";

interface ImagesTabProps {
  imageUrls: string[];
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
  setValue: UseFormSetValue<ProductFormData>;
}

const ImagesTab = ({ imageUrls, setImageUrls, setValue }: ImagesTabProps) => {
  const [newImageUrl, setNewImageUrl] = useState("");

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

  return (
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
  );
};

export default ImagesTab;
