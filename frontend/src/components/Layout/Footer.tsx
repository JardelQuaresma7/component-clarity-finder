
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Sobre a Loja */}
          <div>
            <div className="mb-4">
              <Link to="/">
                <span className="text-2xl font-bold cursor-pointer">Use Deluxxe</span>
              </Link>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Moda feminina com estilo e qualidade. Roupas exclusivas para todos os momentos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/usedeluxxe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-700"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/usedeluxxe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-700"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/novidades" className="text-gray-600 hover:text-pink-700 text-sm">
                  Novidades
                </Link>
              </li>
              <li>
                <Link to="/categoria/vestidos" className="text-gray-600 hover:text-pink-700 text-sm">
                  Vestidos
                </Link>
              </li>
              <li>
                <Link to="/categoria/blusas" className="text-gray-600 hover:text-pink-700 text-sm">
                  Blusas
                </Link>
              </li>
              <li>
                <Link to="/categoria/saias" className="text-gray-600 hover:text-pink-700 text-sm">
                  Saias
                </Link>
              </li>
              <li>
                <Link to="/categoria/calcas" className="text-gray-600 hover:text-pink-700 text-sm">
                  Calças
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Informações */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-600 hover:text-pink-700 text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-gray-600 hover:text-pink-700 text-sm">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-e-condicoes" className="text-gray-600 hover:text-pink-700 text-sm">
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link to="/trocas-e-devolucoes" className="text-gray-600 hover:text-pink-700 text-sm">
                  Trocas e Devoluções
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Fique por dentro</h3>
            <p className="text-gray-600 text-sm mb-4">
              Cadastre-se para receber novidades, lançamentos e ofertas exclusivas.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mb-4">
              <div className="flex">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu e-mail"
                    className="py-2 pl-10 pr-4 block w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Enviar
                </button>
              </div>
            </form>
            {subscribed && (
              <p className="text-green-600 text-sm">Obrigado! Você foi inscrito com sucesso.</p>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Use Deluxxe - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
