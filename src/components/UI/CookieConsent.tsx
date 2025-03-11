
import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const hasAccepted = localStorage.getItem('cookie-consent-accepted');
    
    if (!hasAccepted) {
      // Mostrar o banner após um pequeno delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>
            Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa{' '}
            <a href="/politica-privacidade" className="text-pink-400 hover:text-pink-300 underline">
              Política de Privacidade
            </a>.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={acceptCookies}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
