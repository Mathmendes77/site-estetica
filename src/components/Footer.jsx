import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { servicos } from "../data/Servicos";

function Footer() {
  const categorias = [...new Set(servicos.map((s) => s.categoria))];

  return (
    <footer className="fixed bottom-0 left-0 w-full h-64 z-0 bg-white text-primary-dark border-t-4 border-primary-dark px-8 py-6 flex flex-col">
      <div className="max-w-6xl mx-auto w-full grid gap-8 md:grid-cols-3 flex-1 content-center">
        {/* Procedimentos */}
        <div>
          <h4 className="font-display text-2xl font-semibold mb-4">
            Procedimentos
          </h4>
          <ul className="space-y-2">
            {categorias.map((categoria) => (
              <li key={categoria}>
                <Link
                  to="/servicos"
                  className="text-base hover:opacity-70 transition"
                >
                  {categoria}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Horário de funcionamento */}
        <div>
          <h4 className="font-display text-2xl font-semibold mb-4">
            Horário de funcionamento
          </h4>
          <p className="text-base">Segunda a Sábado</p>
          <p className="text-base">09:00 às 18:00</p>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-display text-2xl font-semibold mb-4">
            Contato
          </h4>

          <p className="flex items-center gap-2 text-base mb-1">
            <FaWhatsapp className="text-primary-dark" size={18} />
            (15) 99186-7827
          </p>

          <p className="flex items-center gap-2 text-base mb-1">
            <FaInstagram className="text-primary-dark" size={18} />
            <a href="https://www.instagram.com/studiomayrabatistela/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">@studiomayrabatistela</a>
          </p>

          <p className="flex items-center gap-2 text-base">
            <FaMapMarkerAlt className="text-primary-dark" size={18} />
            Porto Feliz - SP
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full border-t border-primary-dark/30 pt-3">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Studio Mayra Batistela. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;