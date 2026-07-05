import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Agendamento from "./pages/Agendamento";
import Confirmacao from "./pages/Confirmacao";

function App() {
  return (
    <BrowserRouter>
      {/* Menu de navegação temporário, só para testar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-white border-b-4 border-primary-dark">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-dark text-white">
            ♥
          </span>
          <span className="font-display text-xl font-semibold text-neutral-800">
            Studio Mayra Batistela
          </span>
        </div>

        <div className="flex gap-8">
          <Link
            to="/"
            className="text-neutral-700 hover:text-primary-dark transition"
          >
            Início
          </Link>
          <Link
            to="/sobre"
            className="text-neutral-700 hover:text-primary-dark transition"
          >
            Sobre
          </Link>
          <Link
            to="/servicos"
            className="text-neutral-700 hover:text-primary-dark transition"
          >
            Serviços
          </Link>
          <Link
            to="/agendar"
            className="text-neutral-700 hover:text-primary-dark transition"
          >
            Agendar
          </Link>
        </div>

        <Link
          to="/agendar"
          className="bg-primary-dark text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition"
        >
          Agendar horário
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/agendar" element={<Agendamento />} />
        <Route path="/agendar/confirmacao" element={<Confirmacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
