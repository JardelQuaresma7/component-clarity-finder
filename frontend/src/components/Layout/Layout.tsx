
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import NewsletterPopup from '../UI/NewsletterPopup';
import CookieConsent from '../UI/CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'Use Deluxxe - Moda Feminina' }: LayoutProps) {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já viu o popup da newsletter
    const hasSeenNewsletter = localStorage.getItem('newsletter-seen');

    if (!hasSeenNewsletter) {
      const timer = setTimeout(() => {
        setShowNewsletter(true);
      }, 5000); // Mostrar popup após 5 segundos

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Atualizar o título da página quando o componente montar ou o título mudar
    document.title = title;
    
    // Você pode adicionar as meta tags dinamicamente se necessário
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Loja online de roupas femininas com peças exclusivas e tendências da moda');
    }
  }, [title]);

  const closeNewsletter = () => {
    setShowNewsletter(false);
    localStorage.setItem('newsletter-seen', 'true');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleMobileMenu={toggleMobileMenu} />

      {isMobileMenuOpen && (
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      )}

      <div className="test-icon">
        <Search className="h-6 w-6 text-pink-700" />
      </div>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <Footer />

      {showNewsletter && <NewsletterPopup onClose={closeNewsletter} />}
      <CookieConsent />
    </div>
  );
}
