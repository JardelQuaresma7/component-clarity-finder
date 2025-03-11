
import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

interface NewsletterPopupProps {
  onClose: () => void;
}

const NewsletterPopup = ({ onClose }: NewsletterPopupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Erro",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Sucesso!",
        description: "Obrigado por se inscrever em nossa newsletter!",
      });
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 md:p-8">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Fique por dentro!</h2>
          <p className="text-gray-600">
            Assine nossa newsletter e receba ofertas exclusivas, novidades e descontos especiais.
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-pink-600 text-white font-medium py-3 rounded-md hover:bg-pink-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Cadastrando...' : 'Quero receber novidades'}
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          Ao se inscrever, você concorda com nossa política de privacidade. 
          Não enviamos spam.
        </p>
      </div>
    </div>
  );
};

export default NewsletterPopup;
