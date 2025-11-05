import { AlertTriangle, Clock, Calendar } from "lucide-react";

export const Problems = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Você Está Perdendo Dinheiro Todos os Dias
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          E nem percebe. Veja os problemas que estão impedindo sua clínica de crescer:
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-red-50 p-8 rounded-lg border-2 border-red-200">
            <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Perdendo Leads Todos os Dias</h3>
            <p className="text-gray-700">
              Pessoas interessadas somem porque a resposta demora. Enquanto você não responde, elas já marcaram com seu concorrente.
            </p>
          </div>
          
          <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200">
            <Clock className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Tempo Desperdiçado no WhatsApp</h3>
            <p className="text-gray-700">
              Horas por dia respondendo as mesmas perguntas, tirando dúvidas e tentando encaixar horários na agenda.
            </p>
          </div>
          
          <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-200">
            <Calendar className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Agenda com Buracos</h3>
            <p className="text-gray-700">
              Faltas, cancelamentos de última hora e pacientes que não confirmam. Seu tempo e dinheiro indo embora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
