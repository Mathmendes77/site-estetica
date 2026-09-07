import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Agendamento from "./pages/Agendamento";
import Confirmacao from "./pages/Confirmacao";
import Footer from "./components/Footer";

function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  const linkClasses =
    "text-neutral-700 pb-1 border-b-2 border-transparent hover:border-primary-dark transition";

  return (
    <BrowserRouter>
      {/* Header fixo */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-primary-dark">
        <div className="flex items-center justify-between px-6 md:px-8 py-4">
          <div className="flex items-center gap-2">
            <span className="font-script text-4xl text-primary-dark leading-none -mt-2">
              Studio MB
            </span>
          </div>

          {/* Links — só desktop */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className={linkClasses}>Início</Link>
            <Link to="/sobre" className={linkClasses}>Sobre</Link>
            <Link to="/servicos" className={linkClasses}>Serviços</Link>
            <Link to="/agendar" className={linkClasses}>Agendar</Link>
          </div>

          {/* CTA — só desktop */}
          <Link
            to="/agendar"
            className="hidden md:inline-block bg-primary-dark text-neutral-800 px-5 py-2 rounded-full font-medium hover:opacity-80 transition"
          >
            Agendar horário
          </Link>

          {/* Botão hambúrguer — só mobile */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden text-primary-dark text-2xl"
            aria-label="Abrir menu"
          >
            {menuAberto ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu dropdown — só mobile, quando aberto */}
        {menuAberto && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-2 bg-white border-t border-primary-dark/20">
            <Link to="/" className={linkClasses} onClick={() => setMenuAberto(false)}>
              Início
            </Link>
            <Link to="/sobre" className={linkClasses} onClick={() => setMenuAberto(false)}>
              Sobre
            </Link>
            <Link to="/servicos" className={linkClasses} onClick={() => setMenuAberto(false)}>
              Serviços
            </Link>
            <Link to="/agendar" className={linkClasses} onClick={() => setMenuAberto(false)}>
              Agendar
            </Link>
            <Link
              to="/agendar"
              onClick={() => setMenuAberto(false)}
              className="bg-primary-dark text-neutral-800 px-5 py-2.5 rounded-full font-medium text-center hover:opacity-80 transition"
            >
              Agendar horário
            </Link>
          </div>
        )}
      </nav>

      {/* Conteúdo das páginas */}
      <div className="relative z-10 bg-white mb-64">
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