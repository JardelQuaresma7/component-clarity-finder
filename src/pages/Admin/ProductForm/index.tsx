import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ProductFormData } from './types';
import BasicInfoTab from './components/BasicInfoTab';
import VariationsTab from './components/VariationsTab';
import ImagesTab from './components/ImagesTab';
import DescriptionTab from './components/DescriptionTab';
import { Label } from '@/components/UI/label';

const ProductForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ProductFormData>({
    defaultValues: {
      name: '',
      price: 0,
      description: '',
      status: 'active',
      sizes: [],
      images: [],
      category: '',
      sku: '',
      stock: 0,
      isNewArrival: false,
      isFavorite: false,
    },
  });

  const onSubmit = (data: ProductFormData) => {
    console.log('Form data:', data);
    navigate('/produtos');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Novo Produto</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <BasicInfoTab register={register} errors={errors} />
        
        <div>
          <Label>Descrição</Label>
          <DescriptionTab register={register} />
        </div>
        
        <div>
          <Label>Variações</Label>
          <VariationsTab register={register} />
        </div>
        
        <div>
          <Label>Imagens do Produto</Label>
          <ImagesTab setValue={setValue} />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/produtos')}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Salvar Produto
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
