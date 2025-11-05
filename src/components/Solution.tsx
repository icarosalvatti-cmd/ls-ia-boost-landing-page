import { Bot, Smartphone, Link, UserCheck, TrendingUp, Target } from "lucide-react";

export const Solution = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          A Solução: Secretária Virtual com IA Humanizada
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          Não é um robô comum. É uma secretária inteligente que trabalha 24/7 para você.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Bot className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Secretária Virtual com IA</h3>
            <p className="text-gray-700">
              Atendimento humanizado 24/7 que conversa como uma pessoa real, tira dúvidas e agenda consultas automaticamente.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Smartphone className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Automação WhatsApp</h3>
            <p className="text-gray-700">
              Integração completa com WhatsApp Business. Responde instantaneamente e nunca perde um lead.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Link className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Integração com CRM</h3>
            <p className="text-gray-700">
              Conecta com seu sistema de agendamento e CRM, mantendo tudo sincronizado e organizado.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <UserCheck className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Atendimento Personalizado</h3>
            <p className="text-gray-700">
              Cada secretária é configurada com a linguagem da sua clínica. Seus pacientes vão adorar!
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Fluxos de Vendas Otimizados</h3>
            <p className="text-gray-700">
              Consultoria estratégica para criar fluxos que convertem mais e reduzem faltas.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Target className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Mais Conversões</h3>
            <p className="text-gray-700">
              Estratégias comprovadas para transformar interessados em pacientes confirmados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
