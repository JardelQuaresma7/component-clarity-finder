// src/data/products.ts
export const products = [
    {
      id: 1,
      name: 'Cropped Rosas',
      slug: 'cropped-rosas',
      price: 99.90,
      discount: 0,
      images: ['/placeholder.svg', '/placeholder.svg'],
      colors: [
        { name: 'Rosa', code: '#FFC0CB' },
        { name: 'Branco', code: '#FFFFFF' }
      ],
      isNew: true,
      isFavorite: false,
      sizes: ['P', 'M', 'G'],
      category: { name: 'Blusas', slug: 'blusas' },
      shortDescription: 'Cropped em modelo tradicional com estampa de rosas',
      description: 'Cropped confeccionado em malha de alta qualidade, perfeito para o dia a dia',
      stock: 10
    },
    {
      id: 2,
      name: 'Conjunto Malha',
      slug: 'conjunto-malha',
      price: 249.90,
      discount: 0,
      images: ['/placeholder.svg', '/placeholder.svg'],
      colors: [
        { name: 'Azul', code: '#1E90FF' },
        { name: 'Verde água', code: '#7FFFD4' }
      ],
      isNew: true,
      isFavorite: false,
      sizes: ['P', 'M', 'G'],
      category: { name: 'Conjuntos', slug: 'conjuntos' },
      shortDescription: 'Conjunto em malha com blusa e calça',
      description: 'Conjunto confeccionado em malha premium, composto por blusa e calça',
      stock: 8
    },
    {
      id: 5,
      name: 'Vestido Longo Flores',
      slug: 'vestido-longo-flores',
      price: 299.90,
      discount: 15,
      images: ['/placeholder.svg', '/placeholder.svg'],
      colors: [
        { name: 'Azul', code: '#00008B' },
        { name: 'Preto', code: '#000000' }
      ],
      isNew: false,
      isFavorite: true,
      sizes: ['P', 'M', 'G'],
      category: { name: 'Vestidos', slug: 'vestidos' },
      shortDescription: 'Vestido longo estampado com flores',
      description: 'Vestido longo confeccionado em tecido fluido com estampa floral',
      stock: 5
    }
  ];
  
  export const newArrivals = products.filter(p => p.isNew);
  export const featuredProducts = products.filter(p => p.isFavorite);