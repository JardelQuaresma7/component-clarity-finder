
// src/data/mockData.ts

export interface ProductProps {
  id: number;
  name: string;
  slug: string;
  price: number;
  discount: number;
  images: string[];
  colors?: { name: string; code: string }[];
  sizes?: string[];
  rating?: number;
  reviewCount?: number;
  description?: string;
  shortDescription?: string;
  category?: { name: string; slug: string };
  material?: string;
  composition?: string;
  care?: string;
  sku?: string;
  sizeChart?: { size: string; bust: number; waist: number; hip: number; length: number }[];
  reviews?: { id: number; name: string; title: string; comment: string; rating: number; date: string }[];
  isNew?: boolean;
  isFavorite?: boolean;
}

export const newArrivals: ProductProps[] = [
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
    description: 'Cropped confeccionado em malha de alta qualidade, perfeito para o dia a dia. Estampa exclusiva de rosas, proporcionando um look casual e elegante ao mesmo tempo.'
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
    description: 'Conjunto confeccionado em malha premium, composto por blusa e calça. Confortável e versátil, ideal para diversas ocasiões.'
  },
  {
    id: 3,
    name: 'Blusa Basic',
    slug: 'blusa-basic',
    price: 79.90,
    discount: 0,
    images: ['/placeholder.svg', '/placeholder.svg'],
    colors: [
      { name: 'Preto', code: '#000000' },
      { name: 'Branco', code: '#FFFFFF' },
      { name: 'Cinza', code: '#808080' }
    ],
    isNew: true,
    isFavorite: false,
    sizes: ['P', 'M', 'G'],
    category: { name: 'Blusas', slug: 'blusas' },
    shortDescription: 'Blusa básica para diversas ocasiões',
    description: 'Blusa básica confeccionada em algodão macio, perfeita para compor looks do dia a dia com conforto e estilo.'
  },
  {
    id: 4,
    name: 'Macaquinho Franja',
    slug: 'macaquinho-franja',
    price: 179.90,
    discount: 0,
    images: ['/placeholder.svg', '/placeholder.svg'],
    colors: [
      { name: 'Preto', code: '#000000' }
    ],
    isNew: true,
    isFavorite: false,
    sizes: ['P', 'M', 'G'],
    category: { name: 'Macacões', slug: 'macacoes' },
    shortDescription: 'Macaquinho com detalhes em franja',
    description: 'Macaquinho confeccionado em tecido leve com detalhes em franja, perfeito para eventos e ocasiões especiais.'
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
    description: 'Vestido longo confeccionado em tecido fluido com estampa floral, ideal para ocasiões especiais e eventos formais.'
  }
];

export const featuredProducts: ProductProps[] = [
  {
    id: 6,
    name: 'Vestido Midi Elegance',
    slug: 'vestido-midi-elegance',
    price: 259.90,
    discount: 0,
    images: ['/placeholder.svg', '/placeholder.svg'],
    colors: [
      { name: 'Vermelho', code: '#FF0000' },
      { name: 'Preto', code: '#000000' }
    ],
    isNew: false,
    isFavorite: false,
    sizes: ['P', 'M', 'G'],
    category: { name: 'Vestidos', slug: 'vestidos' },
    shortDescription: 'Vestido midi elegante para ocasiões especiais',
    description: 'Vestido midi confeccionado em tecido premium, ideal para eventos formais. Design elegante que valoriza a silhueta.'
  },
  {
    id: 7,
    name: 'Conjunto Two Pieces',
    slug: 'conjunto-two-pieces',
    price: 189.90,
    discount: 0,
    images: ['/placeholder.svg', '/placeholder.svg'],
    colors: [
      { name: 'Bege', code: '#F5F5DC' },
      { name: 'Preto', code: '#000000' }
    ],
    isNew: false,
    isFavorite: false,
    sizes: ['P', 'M', 'G'],
    category: { name: 'Conjuntos', slug: 'conjuntos' },
    shortDescription: 'Conjunto de duas peças moderno e versátil',
    description: 'Conjunto de duas peças composto por top e saia, confeccionado em tecido de alta qualidade. Versátil e moderno.'
  },
  {
    id: 8,
    name: 'Jaqueta Jeans Oversized',
    slug: 'jaqueta-jeans-oversized',
    price: 299.90,
    discount: 20,
    images: ['/placeholder.svg', '/placeholder.svg'],
    colors: [
      { name: 'Azul', code: '#0000FF' }
    ],
    isNew: false,
    isFavorite: false,
    sizes: ['P', 'M', 'G'],
    category: { name: 'Jaquetas', slug: 'jaquetas' },
    shortDescription: 'Jaqueta jeans no estilo oversized',
    description: 'Jaqueta jeans no estilo oversized, confeccionada em denim premium. Peça versátil que complementa diversos looks.'
  },
  {
    id: 9,
    name: 'Calça Wide Leg',
    slug: 'calca-wide-leg',
    price: 159.90,
    discount: 0,
    images: ['/placeholder.svg', '/placeholder.svg'],
    colors: [
      { name: 'Preto', code: '#000000' },
      { name: 'Bege', code: '#F5F5DC' }
    ],
    isNew: true,
    isFavorite: false,
    sizes: ['P', 'M', 'G'],
    category: { name: 'Calças', slug: 'calcas' },
    shortDescription: 'Calça estilo wide leg de cintura alta',
    description: 'Calça estilo wide leg de cintura alta, confeccionada em tecido fluido que proporciona conforto e elegância.'
  }
];

export const products: ProductProps[] = [
  ...newArrivals,
  ...featuredProducts,
  {
    id: 10,
    name: 'Saia Midi Plissada',
    slug: 'saia-midi-plissada',
    price: 129.90,
    discount: 0,
    images: ['/placeholder.svg', '/placeholder.svg'],
    colors: [
      { name: 'Preto', code: '#000000' },
      { name: 'Bege', code: '#F5F5DC' },
      { name: 'Azul Marinho', code: '#000080' }
    ],
    sizes: ['P', 'M', 'G'],
    category: { name: 'Saias', slug: 'saias' },
    shortDescription: 'Saia midi plissada elegante',
    description: 'Saia midi plissada confeccionada em tecido leve e fluido, perfeita para looks elegantes e sofisticados.'
  },
  {
    id: 11,
    name: 'Blazer Alfaiataria',
    slug: 'blazer-alfaiataria',
    price: 299.90,
    discount: 0,
    images: ['/placeholder.svg', '/placeholder.svg'],
    colors: [
      { name: 'Preto', code: '#000000' },
      { name: 'Branco', code: '#FFFFFF' }
    ],
    sizes: ['P', 'M', 'G'],
    category: { name: 'Blazers', slug: 'blazers' },
    shortDescription: 'Blazer em alfaiataria clássica',
    description: 'Blazer em alfaiataria clássica, confeccionado em tecido premium que proporciona caimento perfeito e elegância atemporal.'
  }
];

export const relatedProducts: ProductProps[] = [
  products[1],
  products[3],
  products[5],
  products[7]
];

export const collections = [
  {
    id: 1,
    title: 'Vestidos',
    href: '/categoria/vestidos',
    imageSrc: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'Blusas',
    href: '/categoria/blusas',
    imageSrc: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'Conjuntos',
    href: '/categoria/conjuntos',
    imageSrc: '/placeholder.svg'
  },
  {
    id: 4,
    title: 'Saias',
    href: '/categoria/saias',
    imageSrc: '/placeholder.svg'
  }
];

// Detalhamento completo de um produto para a página de detalhes
export const productDetail: ProductProps = {
  id: 5,
  name: 'Vestido Longo Flores',
  slug: 'vestido-longo-flores',
  price: 299.90,
  discount: 15,
  images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
  colors: [
    { name: 'Azul', code: '#00008B' },
    { name: 'Preto', code: '#000000' }
  ],
  sizes: ['P', 'M', 'G', 'GG'],
  rating: 4.5,
  reviewCount: 12,
  category: { name: 'Vestidos', slug: 'vestidos' },
  material: 'Poliéster',
  composition: '95% Poliéster, 5% Elastano',
  care: 'Lavar à mão. Não usar alvejante. Não secar em tambor. Secar na horizontal. Não passar a ferro. Não lavar a seco.',
  sku: 'VLF-123456',
  shortDescription: 'Vestido longo estampado com flores',
  description: 'Vestido longo confeccionado em tecido fluido com estampa floral, ideal para ocasiões especiais e eventos formais. Apresenta decote V, mangas longas e fenda lateral que proporciona maior conforto e elegância.',
  isNew: false,
  isFavorite: true,
  sizeChart: [
    { size: 'P', bust: 86, waist: 66, hip: 94, length: 140 },
    { size: 'M', bust: 90, waist: 70, hip: 98, length: 142 },
    { size: 'G', bust: 94, waist: 74, hip: 102, length: 144 },
    { size: 'GG', bust: 98, waist: 78, hip: 106, length: 146 }
  ],
  reviews: [
    { id: 1, name: 'Ana Silva', title: 'Amei o vestido!', comment: 'Vestido lindo, tecido de ótima qualidade e caimento perfeito. Recomendo!', rating: 5, date: '2023-03-15' },
    { id: 2, name: 'Maria Oliveira', title: 'Bom custo-benefício', comment: 'Gostei do vestido, mas achei o tecido um pouco fino. No geral é bonito e vale o preço.', rating: 4, date: '2023-02-28' },
    { id: 3, name: 'Juliana Santos', title: 'Estampa linda', comment: 'A estampa é ainda mais bonita pessoalmente! Amei o vestido, só achei um pouco comprido.', rating: 4.5, date: '2023-02-10' }
  ]
};
