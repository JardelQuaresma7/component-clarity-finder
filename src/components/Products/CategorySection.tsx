
import { Link } from 'react-router-dom';

interface CategorySectionProps {
  categories?: string[];
}

const CategorySection = ({ categories = ['Vestidos', 'Blusas', 'Calças'] }: CategorySectionProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Categorias em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category} className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{category}</h3>
            <Link to={`/categoria/${category.toLowerCase()}`} className="text-pink-600 hover:text-pink-700 underline">
              Ver produtos
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;