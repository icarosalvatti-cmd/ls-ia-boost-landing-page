import logo from "@/assets/logo-ls-conecta.png";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#1e3a8a] to-[#0891b2] shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <img 
          src={logo} 
          alt="LS Conecta" 
          className="h-24 md:h-32"
        />
      </div>
    </header>
  );
};
