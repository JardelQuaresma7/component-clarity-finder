
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold text-pink-600">Menu</h2>
        <button 
          onClick={onClose}
          className="text-gray-700 focus:outline-none"
          aria-label="Fechar menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link 
              to="/" 
              className="block py-2 text-lg text-gray-700 hover:text-pink-600 transition-colors"
              onClick={onClose}
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              to="/produtos" 
              className="block py-2 text-lg text-gray-700 hover:text-pink-600 transition-colors"
              onClick={onClose}
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link 
              to="/categorias" 
              className="block py-2 text-lg text-gray-700 hover:text-pink-600 transition-colors"
              onClick={onClose}
            >
              Categorias
            </Link>
          </li>
          <li>
            <Link 
              to="/sobre" 
              className="block py-2 text-lg text-gray-700 hover:text-pink-600 transition-colors"
              onClick={onClose}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="/contato" 
              className="block py-2 text-lg text-gray-700 hover:text-pink-600 transition-colors"
              onClick={onClose}
            >
              Contato
            </Link>
          </li>
          <li>
            <Link 
              to="/conta" 
              className="block py-2 text-lg text-gray-700 hover:text-pink-600 transition-colors"
              onClick={onClose}
            >
              Minha Conta
            </Link>
          </li>
          <li>
            <Link 
              to="/carrinho" 
              className="block py-2 text-lg text-gray-700 hover:text-pink-600 transition-colors"
              onClick={onClose}
            >
              Carrinho
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
