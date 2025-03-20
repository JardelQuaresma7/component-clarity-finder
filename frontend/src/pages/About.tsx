import Layout from "@/components/Layout/Layout";
import { Separator } from "@/components/UI/separator";

const About = () => {
  return (
    <Layout title="Sobre Nós | Use Deluxxe">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Sobre a Use Deluxxe</h1>
        <Separator className="my-8" />
        
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-pink lg:prose-lg mx-auto">
            <p className="text-lg">
              Fundada em 2018, a Use Deluxxe nasceu da paixão por moda e do desejo de oferecer peças 
              exclusivas e de qualidade para mulheres que valorizam estilo, conforto e elegância.
            </p>
            
            <h2>Nossa Missão</h2>
            <p>
              Nossa missão é proporcionar experiências de moda que inspirem confiança e celebrem a 
              individualidade de cada mulher, através de peças cuidadosamente selecionadas que combinam 
              tendências contemporâneas e qualidade duradoura.
            </p>
            
            <h2>Nossos Valores</h2>
            <ul>
              <li><strong>Qualidade:</strong> Selecionamos materiais premium e supervisionamos cada etapa da produção.</li>
              <li><strong>Sustentabilidade:</strong> Comprometidos com práticas de produção responsáveis e embalagens ecológicas.</li>
              <li><strong>Inclusão:</strong> Celebramos a diversidade e trabalhamos para atender mulheres de todos os tipos de corpo.</li>
              <li><strong>Atendimento:</strong> Oferecemos uma experiência de compra personalizada e acolhedora.</li>
            </ul>
            
            <div className="my-8 bg-pink-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
              <p>
                A Use Deluxxe começou como um pequeno ateliê em São Paulo, fundado por duas amigas 
                apaixonadas por moda. Com o tempo, a marca ganhou reconhecimento por suas peças 
                exclusivas e atenção aos detalhes.
              </p>
              <p className="mt-2">
                Hoje, somos uma empresa em crescimento, com presença online e física, mas mantemos 
                a essência que nos trouxe até aqui: o compromisso com a qualidade e o desejo de fazer 
                parte da história de cada cliente.
              </p>
            </div>
            
            <h2>Nosso Compromisso</h2>
            <p>
              Estamos comprometidos em oferecer peças que não apenas sigam tendências, mas que também 
              sejam versáteis e duradouras. Acreditamos que a moda pode ser consciente sem perder a 
              essência do estilo.
            </p>
            
            <h2>Equipe</h2>
            <p>
              Nossa equipe é formada por profissionais apaixonados por moda e dedicados a proporcionar 
              a melhor experiência para nossas clientes, desde o desenvolvimento das coleções até o 
              atendimento pós-venda.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Entre em contato conosco</h3>
            <p className="text-lg text-gray-600 mb-6">
              Estamos sempre à disposição para ouvir suas sugestões, dúvidas ou feedback
            </p>
            <a 
              href="mailto:contato@usedeIuxxe.com.br" 
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md inline-block transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;