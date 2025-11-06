import { TrendingUp, MessageSquare, Clock } from "lucide-react";

export const Results = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-cyan-700 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Resultados Reais de Quem Usa
        </h2>
        <p className="text-center text-cyan-100 mb-16 text-lg">
          Números que falam por si
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <TrendingUp className="w-16 h-16 text-cyan-300 mx-auto mb-4" />
            <div className="text-5xl font-bold text-cyan-300 mb-2">+30%</div>
            <div className="text-xl font-semibold mb-1">Mais Consultas Agendadas</div>
            <div className="text-cyan-200">em apenas 30 dias</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <MessageSquare className="w-16 h-16 text-cyan-300 mx-auto mb-4" />
            <div className="text-5xl font-bold text-cyan-300 mb-2">+15.000</div>
            <div className="text-xl font-semibold mb-1">Mensagens Automatizadas</div>
            <div className="text-cyan-200">por mês</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <Clock className="w-16 h-16 text-cyan-300 mx-auto mb-4" />
            <div className="text-5xl font-bold text-cyan-300 mb-2">24/7</div>
            <div className="text-xl font-semibold mb-1">Atendimento Ininterrupto</div>
            <div className="text-cyan-200">sem pausas</div>
          </div>
        </div>
      </div>
    </section>
  );
};
