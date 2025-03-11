
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre a Use Deluxxe</h3>
            <p className="text-gray-300 mb-4">
              Loja online especializada em moda feminina com peças exclusivas e tendências atuais.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/categorias" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/como-comprar" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Como comprar
                </Link>
              </li>
              <li>
                <Link to="/envio" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Envio e entrega
                </Link>
              </li>
              <li>
                <Link to="/trocas" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Trocas e devoluções
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Perguntas frequentes
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidade" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-pink-400 mt-1" />
                <span className="text-gray-300">Rua Exemplo, 123, Centro<br />São Paulo - SP, 01234-567</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-pink-400" />
                <span className="text-gray-300">(11) 9876-5432</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-pink-400" />
                <a href="mailto:contato@usedeluxxe.com.br" className="text-gray-300 hover:text-pink-400 transition-colors">
                  contato@usedeluxxe.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Use Deluxxe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
