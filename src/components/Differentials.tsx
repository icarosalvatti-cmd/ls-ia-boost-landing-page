import { CheckCircle2 } from "lucide-react";

export const Differentials = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Por Que a LS Conecta é Diferente?
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">
          Na LS Conecta, unimos tecnologia e estratégia de vendas. Não entregamos apenas bots — criamos secretárias inteligentes que agendam consultas por você.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="flex gap-4 items-start bg-cyan-50 p-6 rounded-lg">
            <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Personalização completa</h3>
              <p className="text-gray-700">Cada secretária é configurada com linguagem humanizada, com a cara da sua clínica</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-cyan-50 p-6 rounded-lg">
            <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Mais agendamentos</h3>
              <p className="text-gray-700">Sistema otimizado para converter mais interessados em consultas confirmadas</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-cyan-50 p-6 rounded-lg">
            <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Maior comparecimento</h3>
              <p className="text-gray-700">Confirmações automáticas que reduzem drasticamente as faltas</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-cyan-50 p-6 rounded-lg">
            <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Economia de tempo</h3>
              <p className="text-gray-700">Pare de perder horas no WhatsApp com atendimento manual</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-cyan-50 p-6 rounded-lg md:col-span-2">
            <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Experiência premium</h3>
              <p className="text-gray-700">Seus pacientes terão uma experiência real de atendimento de alto nível</p>
            </div>
          </div>
        </div>
        
        <blockquote className="text-center text-2xl md:text-3xl font-semibold text-gray-800 italic">
          "Não é automação. É uma secretária de verdade que nunca tira folga."
        </blockquote>
      </div>
    </section>
  );
};
