import Layout from "@/components/Layout/Layout";
import { Separator } from "@/components/UI/separator";

const TermsConditions = () => {
  return (
    <Layout title="Termos e Condições | Use Deluxxe">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Termos e Condições</h1>
        <p className="text-center text-gray-600 mb-6">Última atualização: 01 de Novembro de 2023</p>
        <Separator className="my-8" />
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p>
              Bem-vindo aos Termos e Condições da Use Deluxxe. Por favor, leia atentamente estes termos antes de usar nosso site.
            </p>
            
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site Use Deluxxe, você concorda em cumprir e estar sujeito a estes Termos e Condições.
              Se você não concordar com qualquer parte destes termos, não poderá acessar ou utilizar nosso site e serviços.
            </p>
            
            <h2>2. Alterações aos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor imediatamente após
              sua publicação no site. Seu uso continuado do site após tais alterações constitui sua aceitação dos novos termos.
            </p>
            
            <h2>3. Conta de Usuário</h2>
            <p>
              Ao criar uma conta em nosso site, você é responsável por manter a confidencialidade de sua conta e senha,
              bem como por restringir o acesso ao seu computador. Você concorda em aceitar responsabilidade por todas as
              atividades que ocorram em sua conta.
            </p>
            
            <h2>4. Precisão de Informações</h2>
            <p>
              Nos esforçamos para apresentar informações precisas sobre nossos produtos, incluindo cores, medidas e disponibilidade.
              No entanto, não podemos garantir que todas as informações estejam livres de erros. Reservamo-nos o direito de corrigir
              qualquer erro, imprecisão ou omissão.
            </p>
            
            <h2>5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponível no site Use Deluxxe, incluindo textos, gráficos, logotipos, imagens, bem como a compilação
              destes, é propriedade da Use Deluxxe e protegido por leis de direitos autorais e propriedade intelectual.
            </p>
            
            <h2>6. Política de Privacidade</h2>
            <p>
              Sua privacidade é importante para nós. Nossa Política de Privacidade descreve como coletamos, usamos e protegemos
              suas informações pessoais. Ao usar nosso site, você concorda com nossa Política de Privacidade.
            </p>
            
            <h2>7. Limitações de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância a Use Deluxxe, seus diretores, funcionários ou agentes serão responsáveis por quaisquer
              danos diretos, indiretos, incidentais, consequenciais, especiais ou exemplares decorrentes do uso do site.
            </p>
            
            <h2>8. Lei Aplicável</h2>
            <p>
              Estes Termos e Condições são regidos e interpretados de acordo com as leis do Brasil, e qualquer disputa relacionada
              a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
            </p>
            
            <h2>9. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos e Condições, entre em contato conosco através do e-mail:
              juridico@usedeIuxxe.com.br.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;