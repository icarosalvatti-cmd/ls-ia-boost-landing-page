import { CheckCircle } from "lucide-react";

export const Technology = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
            Atendimento Inteligente 24/7
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Nossa IA conversa naturalmente com seus pacientes, agendando consultas automaticamente 
            enquanto você foca no que realmente importa: cuidar das pessoas.
          </p>
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Respostas instantâneas em qualquer horário</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Linguagem humanizada e personalizada</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Integração perfeita com WhatsApp</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white p-12 rounded-2xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tecnologia de Ponta que Realmente Funciona
          </h2>
          <p className="text-lg text-cyan-100">
            Nossa inteligência artificial é treinada especificamente para a área da saúde, entendendo as necessidades dos pacientes e agendando com precisão.
          </p>
        </div>
      </div>
    </section>
  );
};
