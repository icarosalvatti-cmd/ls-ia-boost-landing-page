import { Sparkles, CheckCircle2, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full mb-8">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">VAGAS LIMITADAS - APENAS 5 POR MÊS</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
          Pronto para Automatizar Seus Agendamentos?
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          Faça como as clínicas que já aumentaram seus agendamentos em +30%
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-12 text-left">
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Demonstração gratuita sem compromisso</span>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Configuração personalizada para sua clínica</span>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Suporte exclusivo durante toda implementação</span>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">Resultados visíveis em 30 dias</span>
          </div>
        </div>
        
        <a 
          href="https://wa.me/5531990638328?text=Ol%C3%A1!%20Quero%20conhecer%20a%20demonstra%C3%A7%C3%A3o%20gratuita%20da%20LS%20Conecta"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg mb-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          SOLICITAR DEMONSTRAÇÃO GRATUITA AGORA
        </a>
        
        <div className="border-t border-gray-300 pt-8">
          <p className="text-gray-700 mb-2">Atendimento Imediato via WhatsApp:</p>
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-cyan-600 mb-4">
            <Phone className="w-6 h-6" />
            (31) 9 9063-8328
          </div>
          <a 
            href="https://instagram.com/lsconecta.ia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-600 hover:text-cyan-700 font-semibold"
          >
            @lsconecta.ia
          </a>
        </div>
        
        <p className="text-sm text-gray-500 mt-8">
          🔒 Seus dados estão seguros. Não compartilhamos informações com terceiros.
        </p>
      </div>
    </section>
  );
};
