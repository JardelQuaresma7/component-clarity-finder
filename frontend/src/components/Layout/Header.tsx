
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';

interface HeaderProps {
  toggleMobileMenu: () => void;
}

interface Category {
  name: string;
  href: string;
  featured?: boolean;
  subCategories?: string[];
}

const Header = ({ toggleMobileMenu }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Categorias para o megamenu
  const categories: Category[] = [
    { name: 'Novidades', href: '/novidades', featured: true },
    { name: 'Vestidos', href: '/categoria/vestidos', subCategories: ['Midi', 'Longos', 'Festa', 'Casual'] },
    { name: 'Blusas', href: '/categoria/blusas', subCategories: ['T-shirts', 'Cropped', 'Regatas', 'Manga Longa'] },
    { name: 'Saias', href: '/categoria/saias', subCategories: ['Mini', 'Midi', 'Longa'] },
    { name: 'Calças', href: '/categoria/calcas', subCategories: ['Jeans', 'Alfaiataria', 'Leggings'] },
    { name: 'Conjuntos', href: '/categoria/conjuntos' },
    { name: 'Acessórios', href: '/categoria/acessorios' },
    { name: 'Outlet', href: '/outlet', featured: true },
  ];

  useEffect(() => {
    // Efeito de scroll para mudar o estilo do header
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulação de carrinho com itens
    setCartCount(3);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-pink-50 py-4'}`}>
      {/* Announcement bar */}
      {!isScrolled && (
        <div className="bg-pink-800 text-white py-2 text-center text-sm">
          <p>Frete grátis para compras acima de R$ 299 • 5% de desconto no PIX</p>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden flex items-center p-2"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6 text-gray-800" />
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <div className="block h-10 w-auto cursor-pointer">
                <span className="text-2xl font-bold">Use Deluxxe</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-8">
            {categories.map((category) => (
              <div key={category.name} className="relative group">
                <Link to={category.href}>
                  <span className={`inline-flex items-center text-sm font-medium hover:text-pink-700 cursor-pointer py-2 ${category.featured ? 'text-pink-700' : 'text-gray-800'}`}>
                    {category.name}
                  </span>
                </Link>
                
                {category.subCategories && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {category.subCategories.map((subCat) => (
                        <Link 
                          key={subCat} 
                          to={`${category.href}/${subCat.toLowerCase().replace(' ', '-')}`}
                        >
                          <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                            {subCat}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right section: Search, account, wishlist, cart */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="p-2 text-gray-800 hover:text-pink-700"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link to="/conta">
              <div className="p-2 text-gray-800 hover:text-pink-700 cursor-pointer">
                <User className="h-5 w-5" />
              </div>
            </Link>
            
            <Link to="/favoritos">
              <div className="p-2 text-gray-800 hover:text-pink-700 cursor-pointer">
                <Heart className="h-5 w-5" />
              </div>
            </Link>
            
            <Link to="/carrinho">
              <div className="p-2 text-gray-800 hover:text-pink-700 cursor-pointer relative">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Expanded search bar */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 z-40 transition-all duration-300">
          <div className="container mx-auto max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="O que você está procurando?"
                className="w-full py-3 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                autoFocus
              />
              <button 
                onClick={toggleSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>Pesquisas populares: Vestido festa, Conjunto verão, Cropped, Saia midi</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
