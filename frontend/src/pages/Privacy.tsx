
import Layout from "@/components/Layout/Layout";
import { Separator } from "@/components/UI/separator";

const Privacy = () => {
  return (
    <Layout title="Política de Privacidade | Use Deluxxe">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Política de Privacidade</h1>
        <p className="text-center text-gray-600 mb-6">Última atualização: 01 de Novembro de 2023</p>
        <Separator className="my-8" />
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p>
              A Use Deluxxe valoriza a privacidade de seus clientes e está comprometida em proteger suas informações pessoais.
              Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações.
            </p>
            
            <h2>1. Informações que Coletamos</h2>
            <p>
              Podemos coletar os seguintes tipos de informações pessoais:
            </p>
            <ul>
              <li>Informações de identificação pessoal (nome, endereço, e-mail, telefone)</li>
              <li>Informações de pagamento (sempre processadas de forma segura)</li>
              <li>Histórico de compras e preferências</li>
              <li>Informações de uso e navegação no site</li>
              <li>Comunicações que você envia para nós</li>
            </ul>
            
            <h2>2. Como Usamos suas Informações</h2>
            <p>
              Utilizamos as informações coletadas para:
            </p>
            <ul>
              <li>Processar suas compras e entregar produtos</li>
              <li>Gerenciar sua conta e fornecer suporte ao cliente</li>
              <li>Personalizar sua experiência de compra</li>
              <li>Enviar informações promocionais quando autorizado</li>
              <li>Melhorar nossos produtos e serviços</li>
              <li>Proteger nosso site e usuários</li>
            </ul>
            
            <h2>3. Cookies e Tecnologias Semelhantes</h2>
            <p>
              Usamos cookies e tecnologias similares para melhorar sua experiência em nosso site, 
              analisar como você usa nosso site e personalizar nosso conteúdo. Você pode configurar 
              seu navegador para recusar cookies, mas isso pode afetar sua experiência no site.
            </p>
            
            <h2>4. Compartilhamento de Informações</h2>
            <p>
              Podemos compartilhar suas informações com:
            </p>
            <ul>
              <li>Prestadores de serviços que nos auxiliam em operações comerciais</li>
              <li>Parceiros de entrega para envio de produtos</li>
              <li>Processadores de pagamento para transações seguras</li>
              <li>Autoridades, quando exigido por lei</li>
            </ul>
            <p>
              Nunca vendemos ou alugamos suas informações pessoais a terceiros.
            </p>
            
            <h2>5. Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
              informações contra acesso não autorizado, perda ou modificação. Embora nos esforcemos 
              para proteger suas informações, nenhum método de transmissão pela internet é 100% seguro.
            </p>
            
            <h2>6. Seus Direitos</h2>
            <p>
              Você tem os seguintes direitos em relação às suas informações pessoais:
            </p>
            <ul>
              <li>Direito de acesso às suas informações pessoais</li>
              <li>Direito de retificação de informações imprecisas</li>
              <li>Direito de exclusão (em determinadas circunstâncias)</li>
              <li>Direito de retirar o consentimento para marketing</li>
              <li>Direito de apresentar uma reclamação à autoridade de proteção de dados</li>
            </ul>
            
            <h2>7. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades 
              para as quais foram coletadas, incluindo obrigações legais, contábeis ou de relatórios.
            </p>
            
            <h2>8. Alterações a esta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações 
              serão publicadas em nosso site, e a data de "Última atualização" será modificada.
            </p>
            
            <h2>9. Contato</h2>
            <p>
              Se você tiver dúvidas sobre nossa Política de Privacidade ou sobre suas informações 
              pessoais, entre em contato conosco através do e-mail: privacidade@usedeIuxxe.com.br.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
