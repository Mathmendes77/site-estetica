import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Agendamento from "./pages/Agendamento";
import Confirmacao from "./pages/Confirmacao";
import Footer from "./components/Footer";
import logoStudio from "./assets/LogoStudio.png";

// Componente para rolar ao topo quando mudar de página
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para detectar scroll e dar dinamismo ao header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses =
    "text-neutral-300 hover:text-[#EEBBBB] font-medium text-sm tracking-wide transition-all duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EEBBBB] hover:after:w-full after:transition-all";

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* Header Fixo */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-neutral-950/95 backdrop-blur-md shadow-lg py-3 border-b border-neutral-900" 
            : "bg-neutral-950/90 backdrop-blur-sm py-4 border-b border-neutral-900/50"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
          
          {/* Logo em Imagem com Cor Rosa */}
          <Link to="/" className="flex items-center gap-3 group py-0.5">
            <img 
              src={logoStudio} 
              alt="Studio Mayra Batistela" 
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105" 
              style={{ filter: "drop-shadow(0 0 10px rgba(238, 187, 187, 0.4))" }}
            />
          </Link>

          {/* Links — Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={linkClasses}>Início</Link>
            <Link to="/sobre" className={linkClasses}>Sobre</Link>
            <Link to="/servicos" className={linkClasses}>Serviços</Link>
            <Link to="/agendar" className={linkClasses}>Agendar</Link>
          </nav>

          {/* sessao final Desktop */}
          <div className="hidden md:block">
            <Link
              to="/agendar"
              className="bg-[#EEBBBB] hover:bg-[#e8aaaa] text-neutral-950 text-base font-semibold px-7 py-3 rounded-full shadow-[0_0_20px_rgba(238,187,187,0.15)] hover:shadow-[0_0_25px_rgba(238,187,187,0.3)] transition-all duration-200"
            >
              Agendar horário
            </Link>
          </div>

          {/* Botão para o menu celular */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden text-[#EEBBBB] text-2xl transition z-50 p-2"
            aria-label="Menu"
          >
            {menuAberto ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu para o celular com a logo abaixo do header */}
        <div 
          className={`absolute top-full left-0 w-full bg-neutral-950/98 backdrop-blur-xl border-b border-neutral-900 shadow-xl transition-all duration-300 overflow-hidden md:hidden ${
            menuAberto 
              ? "max-h-96 opacity-100 py-6" 
              : "max-h-0 opacity-0 py-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-5 text-center px-6">
            <Link 
              to="/" 
              className="font-medium text-lg text-neutral-200 hover:text-[#EEBBBB] transition"
              onClick={() => setMenuAberto(false)}
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className="font-medium text-lg text-neutral-200 hover:text-[#EEBBBB] transition"
              onClick={() => setMenuAberto(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/servicos" 
              className="font-medium text-lg text-neutral-200 hover:text-[#EEBBBB] transition"
              onClick={() => setMenuAberto(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/agendar" 
              className="font-medium text-lg text-neutral-200 hover:text-[#EEBBBB] transition"
              onClick={() => setMenuAberto(false)}
            >
              Agendar
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo das páginas */}
      <div className="relative z-10 bg-neutral-950 text-neutral-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/agendar" element={<Agendamento />} />
          <Route path="/agendar/confirmacao" element={<Confirmacao />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;