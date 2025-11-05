import { Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] via-[#0369a1] to-[#0891b2] text-white px-4 pt-24 pb-16">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 rounded-full mb-8 animate-pulse">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold text-sm md:text-base">APENAS 5 VAGAS DISPONÍVEIS ESTE MÊS</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transforme Pessoas Interessadas em{" "}
          <span className="text-cyan-300">Agendamentos</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-cyan-50">
          Secretária virtual com IA humanizada que agenda consultas 24/7. 
          Aumente seus agendamentos em até <span className="text-cyan-300 font-bold">30%</span> sem gastar horas no WhatsApp.
        </p>
        
        <a 
          href="https://wa.me/5531990638328?text=Ol%C3%A1!%20Quero%20conhecer%20a%20demonstra%C3%A7%C3%A3o%20gratuita%20da%20LS%20Conecta"
          className="inline-block bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 SOLICITAR DEMONSTRAÇÃO GRATUITA
        </a>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-cyan-300 mb-2">+30%</div>
            <div className="text-cyan-100">Mais Consultas</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-300 mb-2">15.000+</div>
            <div className="text-cyan-100">Mensagens/Mês</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-300 mb-2">24/7</div>
            <div className="text-cyan-100">Atendimento</div>
          </div>
        </div>
      </div>
    </section>
  );
};
