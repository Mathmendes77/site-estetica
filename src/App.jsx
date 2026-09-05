import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Agendamento from "./pages/Agendamento";
import Confirmacao from "./pages/Confirmacao";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Header fixo */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-white border-b-4 border-primary-dark">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold text-neutral-800">
            Studio Mayra Batistela
          </span>
        </div>

        <div className="flex gap-8">
          <Link
            to="/"
            className="text-neutral-700 pb-1 border-b-2 border-transparent hover:border-primary-dark transition"
          >
            Início
          </Link>
          <Link
            to="/sobre"
            className="text-neutral-700 pb-1 border-b-2 border-transparent hover:border-primary-dark transition"
          >
            Sobre
          </Link>
          <Link
            to="/servicos"
            className="text-neutral-700 pb-1 border-b-2 border-transparent hover:border-primary-dark transition"
          >
            Serviços
          </Link>
          <Link
            to="/agendar"
            className="text-neutral-700 pb-1 border-b-2 border-transparent hover:border-primary-dark transition"
          >
            Agendar
          </Link>
        </div>

        <Link
          to="/agendar"
          className="bg-primary-dark text-neutral-800 px-5 py-2 rounded-full font-medium hover:opacity-80 transition"
        >
          Agendar horário
        </Link>
      </nav>

      {/* Conteúdo das páginas — fundo branco cobrindo o footer fixo, com margem no final para revelá-lo */}
      <div className="relative z-10 bg-white mb-80">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/agendar" element={<Agendamento />} />
          <Route path="/agendar/confirmacao" element={<Confirmacao />} />
        </Routes>
      </div>

      {/* Footer fixo, revelado no final do scroll */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;