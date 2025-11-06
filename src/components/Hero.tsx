import { Sparkles } from "lucide-react";
import logo from "@/assets/logo-ls-conecta.png";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#1e3a8a] via-[#0369a1] to-[#0891b2] text-white px-4 pt-8 pb-16">
      <div className="container mx-auto text-center">
        <img
          src={logo}
          alt="LS Conecta"
          className="h-48 md:h-64 mx-auto mb-4"
        />

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          Transforme contatos em{" "}
          <span className="text-cyan-300">consultas confirmadas</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-4xl mx-auto text-cyan-50">
          Secretária com IA humanizada que agenda consultas 24 horas 7 dias por semana.
          Aumente seus agendamentos em até <span className="text-cyan-300 font-bold">30%</span> sem gastar horas no WhatsApp.
        </p>

        <a
          href="https://wa.me/5531990638328?text=Ol%C3%A1!%20Quero%20conhecer%20a%20demonstra%C3%A7%C3%A3o%20gratuita%20da%20LS%20Conecta"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg mb-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 AGENDAR DEMONSTRAÇÃO
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-cyan-300 mb-2">+30%</div>
            <div className="text-cyan-100">Mais Consultas</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-300 mb-2">+15.000</div>
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
