export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          O Que Nossos Clientes Dizem
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-6 italic">
              "Depois da automação da LS Conecta, nossas consultas praticamente dobraram. A secretária de IA é tão natural que os pacientes nem percebem que é automatizado."
            </p>
            <div className="border-t pt-4">
              <p className="font-bold text-gray-900">Dra. Janaina</p>
              <p className="text-gray-600">Clínica Studio Sênior</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-6 italic">
              "O suporte da equipe é impecável. Hoje não preciso me preocupar com agendamentos e posso dedicar mais tempo aos tratamentos."
            </p>
            <div className="border-t pt-4">
              <p className="font-bold text-gray-900">Dra. Gabriela</p>
              <p className="text-gray-600">Fisioterapeuta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
