import { CheckCircle } from "lucide-react";
import heroAiImage from "@/assets/hero-ai-assistant.jpg";
import doctorSuccessImage from "@/assets/doctor-success.jpg";
import aiNetworkImage from "@/assets/ai-network.jpg";

export const Technology = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Atendimento Inteligente 24/7
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Nossa IA conversa naturalmente com seus pacientes, agendando consultas automaticamente 
              enquanto você foca no que realmente importa: cuidar das pessoas.
            </p>
            <ul className="space-y-4">
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
          <div className="flex justify-center">
            <img 
              src={heroAiImage} 
              alt="IA de atendimento médico no smartphone" 
              className="rounded-lg shadow-2xl w-full max-w-md"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center order-2 md:order-1">
            <img 
              src={doctorSuccessImage} 
              alt="Médico satisfeito com agendamentos automatizados" 
              className="rounded-lg shadow-2xl w-full max-w-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Mais Tempo para o que Realmente Importa
            </h2>
            <p className="text-lg text-gray-700">
              Pare de perder horas gerenciando agendamentos manualmente. Deixe nossa IA cuidar disso enquanto você cresce seu negócio.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white p-8 md:p-12 rounded-2xl shadow-2xl grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tecnologia de Ponta que Realmente Funciona
            </h2>
            <p className="text-lg text-cyan-100">
              Nossa inteligência artificial é treinada especificamente para a área da saúde, entendendo as necessidades dos pacientes e agendando com precisão.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={aiNetworkImage} 
              alt="Rede neural de inteligência artificial" 
              className="rounded-lg shadow-xl w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
