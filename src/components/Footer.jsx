import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { servicos } from "../data/Servicos";

function Footer() {
  const categorias = [...new Set(servicos.map((s) => s.categoria))];

  return (
    <footer className="relative z-20 bg-primary text-white px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto w-full grid gap-10 md:grid-cols-3 mb-10">
        {/* Procedimentos */}
        <div>
          <h4 className="font-display text-xl md:text-2xl font-semibold mb-4">
            Procedimentos
          </h4>
          <ul className="space-y-2">
            {categorias.map((categoria) => (
              <li key={categoria}>
                <Link
                  to="/servicos"
                  className="text-base text-white/90 hover:text-white transition"
                >
                  {categoria}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Horário de funcionamento */}
        <div>
          <h4 className="font-display text-xl md:text-2xl font-semibold mb-4">
            Horário de funcionamento
          </h4>
          <p className="text-base text-white/90">Segunda a Sábado</p>
          <p className="text-base text-white/90">09:00 às 18:00</p>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-display text-xl md:text-2xl font-semibold mb-4">
            Contato
          </h4>

          <p className="flex items-center gap-2 text-base text-white/90 mb-2">
            <FaWhatsapp className="text-white shrink-0" size={18} />
            (15) 99186-7827
          </p>

          <p className="flex items-center gap-2 text-base text-white/90 mb-2">
            <FaInstagram className="text-white shrink-0" size={18} />
            <a href="https://www.instagram.com/studiomayrabatistela/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition break-all">
              @studiomayrabatistela
            </a>
          </p>

          <p className="flex items-center gap-2 text-base text-white/90">
            <FaMapMarkerAlt className="text-white shrink-0" size={18} />
            Porto Feliz - SP
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full border-t border-white/30 pt-6">
        <p className="text-center text-sm text-white/80">
          © {new Date().getFullYear()} Studio Mayra Batistela. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;