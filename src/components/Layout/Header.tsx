
import { useState } from 'react';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleMobileMenu: () => void;
}

const Header = ({ toggleMobileMenu }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className="text-center lg:text-left">
            <Link to="/" className="text-2xl font-bold text-pink-600">
              Use Deluxxe
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors">
              Início
            </Link>
            <Link to="/produtos" className="text-gray-700 hover:text-pink-600 transition-colors">
              Produtos
            </Link>
            <Link to="/categorias" className="text-gray-700 hover:text-pink-600 transition-colors">
              Categorias
            </Link>
            <Link to="/sobre" className="text-gray-700 hover:text-pink-600 transition-colors">
              Sobre
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-pink-600 transition-colors">
              Contato
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-pink-600 transition-colors focus:outline-none"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/conta" className="text-gray-700 hover:text-pink-600 transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/carrinho" className="text-gray-700 hover:text-pink-600 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 transition-all duration-300">
            <form className="flex items-center">
              <input
                type="text"
                placeholder="O que você está procurando?"
                className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
              <button 
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded-r hover:bg-pink-700 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
