
import { useState } from 'react';
import { X, Check, Mail } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

interface NewsletterPopupProps {
  onClose: () => void;
}

const NewsletterPopup = ({ onClose }: NewsletterPopupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Sucesso!",
        description: "Obrigado por se inscrever em nossa newsletter!",
      });
      
      // Fecha o popup após 3 segundos de mostrar a mensagem de sucesso
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-6">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Fique por dentro!</h2>
                <p className="text-gray-600">
                  Assine nossa newsletter e receba ofertas exclusivas, novidades e descontos especiais.
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>
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
            </>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Obrigado por se inscrever!
              </h3>
              <p className="text-gray-600">
                Você receberá nossas novidades no e-mail informado.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
