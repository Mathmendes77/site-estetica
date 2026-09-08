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
    "text-neutral-700 hover:text-primary-dark font-medium text-sm tracking-wide transition-all duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-dark hover:after:w-full after:transition-all";

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* Header Fixo com Efeito de Vidro e Transição Suave */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-md shadow-sm py-2.5 border-b border-neutral-100" 
            : "bg-white/70 backdrop-blur-sm py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
          
          {/* Logo em Imagem */}
          <Link to="/" className="flex items-center gap-3 group py-0.5">
            <img 
              src={logoStudio} 
              alt="Studio Mayra Batistela" 
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Links — Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={linkClasses}>Início</Link>
            <Link to="/sobre" className={linkClasses}>Sobre</Link>
            <Link to="/servicos" className={linkClasses}>Serviços</Link>
            <Link to="/agendar" className={linkClasses}>Agendar</Link>
          </nav>

          {/* CTA Desktop com Botão Maior */}
          <div className="hidden md:block">
            <Link
              to="/agendar"
              className="bg-primary-dark hover:opacity-90 text-white text-base font-medium px-7 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              Agendar horário
            </Link>
          </div>

          {/* Botão Hambúrguer — Mobile */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden text-primary-dark text-2xl transition z-50 p-2"
            aria-label="Menu"
          >
            {menuAberto ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Mobile Fullscreen Otimizado sem necessidade de scroll */}
        <div 
          className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center py-16 px-6 transition-all duration-300 md:hidden ${
            menuAberto 
              ? "opacity-100 pointer-events-auto translate-y-0" 
              : "opacity-0 pointer-events-none -translate-y-4"
          }`}
        >
          {/* Botão de Fechar absoluto no topo direito */}
          <button 
            onClick={() => setMenuAberto(false)}
            className="absolute top-5 right-6 text-primary-dark text-2xl p-2"
            aria-label="Fechar menu"
          >
            <FaTimes />
          </button>

          <div className="flex flex-col items-center gap-5 text-center">
            <Link 
              to="/" 
              className="font-display text-xl text-neutral-800 hover:text-primary-dark transition"
              onClick={() => setMenuAberto(false)}
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className="font-display text-xl text-neutral-800 hover:text-primary-dark transition"
              onClick={() => setMenuAberto(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/servicos" 
              className="font-display text-xl text-neutral-800 hover:text-primary-dark transition"
              onClick={() => setMenuAberto(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/agendar" 
              className="font-display text-xl text-neutral-800 hover:text-primary-dark transition"
              onClick={() => setMenuAberto(false)}
            >
              Agendar
            </Link>
          </div>

          <div className="w-36 h-[1px] bg-neutral-200 my-6" />

          <Link
            to="/agendar"
            onClick={() => setMenuAberto(false)}
            className="bg-primary-dark text-white px-8 py-3 rounded-full font-medium text-sm shadow-md transition w-full max-w-xs text-center"
          >
            Agendar horário
          </Link>
        </div>
      </header>

      {/* Conteúdo das páginas */}
      <div className="relative z-10 bg-white">
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