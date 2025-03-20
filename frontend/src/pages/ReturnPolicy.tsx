import Layout from "@/components/Layout/Layout";
import { Separator } from "@/components/UI/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/UI/accordion";

const ReturnPolicy = () => {
  return (
    <Layout title="Política de Trocas e Devoluções | Use Deluxxe">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Política de Trocas e Devoluções</h1>
        <p className="text-center text-gray-600 mb-6">Última atualização: 01 de Novembro de 2023</p>
        <Separator className="my-8" />
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p>
              A Use Deluxxe se preocupa com a sua satisfação. Por isso, desenvolvemos uma política 
              de trocas e devoluções clara e transparente para garantir que você tenha a melhor 
              experiência possível com nossos produtos.
            </p>
            
            <h2>Prazos para Troca e Devolução</h2>
            <ul>
              <li><strong>Arrependimento:</strong> 7 dias corridos após o recebimento</li>
              <li><strong>Defeito de fabricação:</strong> 30 dias corridos após o recebimento</li>
              <li><strong>Trocas de tamanho/cor:</strong> 15 dias corridos após o recebimento</li>
            </ul>
            
            <div className="my-8 p-6 bg-pink-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Como Solicitar uma Troca ou Devolução</h3>
              <ol>
                <li>Acesse sua conta no site Use Deluxxe</li>
                <li>Vá para "Meus Pedidos" e selecione o pedido em questão</li>
                <li>Clique em "Solicitar Troca/Devolução"</li>
                <li>Siga as instruções para embalar e enviar o produto</li>
                <li>Aguarde a análise de nossa equipe (prazo máximo de 5 dias úteis)</li>
              </ol>
            </div>
            
            <h2>Condições para Troca e Devolução</h2>
            <p>
              Para que possamos aceitar a troca ou devolução, o produto deve:
            </p>
            <ul>
              <li>Estar em perfeito estado, sem sinais de uso</li>
              <li>Estar com a etiqueta original</li>
              <li>Estar acompanhado da nota fiscal</li>
              <li>Estar na embalagem original ou em embalagem adequada</li>
            </ul>
            
            <h2>Perguntas Frequentes</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>Quem paga o frete de devolução?</AccordionTrigger>
              <AccordionContent>
                Em caso de arrependimento, o cliente é responsável pelo frete de devolução. 
                Em caso de defeito de fabricação, a Use Deluxxe arca com os custos de envio.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Como recebo meu reembolso?</AccordionTrigger>
              <AccordionContent>
                O reembolso é realizado na mesma forma de pagamento utilizada na compra. 
                Para cartões de crédito, o prazo para estorno pode levar até 2 faturas, 
                conforme a política da operadora. Para demais formas de pagamento, o 
                reembolso é processado em até 10 dias úteis.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Posso trocar um produto em promoção?</AccordionTrigger>
              <AccordionContent>
                Sim, produtos em promoção seguem a mesma política de troca. No entanto, 
                caso o produto não esteja mais disponível no mesmo preço promocional, 
                será considerado o valor efetivamente pago pelo cliente.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>O que acontece se o produto que quero não estiver mais disponível?</AccordionTrigger>
              <AccordionContent>
                Caso o produto desejado para troca não esteja mais disponível, oferecemos 
                as seguintes opções: escolha de outro produto de valor equivalente, 
                crédito para compras futuras ou reembolso do valor pago.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Posso trocar um presente?</AccordionTrigger>
              <AccordionContent>
                Sim, aceitamos trocas de presentes. Caso você não tenha a nota fiscal, 
                entre em contato com nosso atendimento para orientações específicas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Dúvidas adicionais? Nossa equipe está pronta para ajudar.
            </p>
            <a 
              href="mailto:atendimento@usedeIuxxe.com.br" 
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md inline-block transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnPolicy;
