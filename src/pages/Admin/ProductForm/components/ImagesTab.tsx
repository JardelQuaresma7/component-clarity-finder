import React, { useState } from "react";
import { Input } from "../../../../components/UI/input";
import { Button } from "../../../../components/UI/button";
import { UseFormSetValue } from "react-hook-form";
import { ProductFormData } from "../types";

interface ImagesTabProps {
  setValue: UseFormSetValue<ProductFormData>;
}

const ImagesTab = ({ setValue }: ImagesTabProps) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 0) {
      // Criar URLs de preview para as imagens selecionadas
      const newPreviewUrls = selectedFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
      
      // Atualizar a lista de arquivos
      const updatedFiles = [...files, ...selectedFiles];
      setFiles(updatedFiles);
      setValue("images", updatedFiles);
    }
  };

  const removeImage = (index: number) => {
    // Remover preview
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
    
    // Remover arquivo
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    setValue("images", updatedFiles);
  };

  // Limpar URLs de preview quando o componente for desmontado
  React.useEffect(() => {
    return () => {
      previewUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="flex-1"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {previewUrls.map((url, index) => (
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
