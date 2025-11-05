import logo from "@/assets/logo-ls-conecta.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1e3a8a] to-[#0891b2] shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <img 
          src={logo} 
          alt="LS Conecta" 
          className="h-12 md:h-14"
        />
      </div>
    </header>
  );
};
