import { Link } from "react-router-dom";
import { servicos } from "../data/servicos";

function Servicos() {
  // Agrupa os serviços por categoria automaticamente
  const categorias = [...new Set(servicos.map((s) => s.categoria))];

  return (
    <main className="pt-28 pb-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-neutral-800">
          Nossos serviços
        </h1>
        <p className="mt-3 text-muted">
          Escolha o serviço ideal para você e agende em poucos minutos.
        </p>
      </div>

      {categorias.map((categoria) => (
        <section key={categoria} className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-primary-dark mb-5">
            {categoria}
          </h2>

          <div className="space-y-4">
            {servicos
              .filter((s) => s.categoria === categoria)
              .map((servico) => (
                <div
                  key={servico.id}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white border border-secondary rounded-2xl p-5 shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{servico.nome}</h3>
                    <p className="text-muted text-sm mt-1">
                      {servico.descricao}
                    </p>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {servico.duracao} • {servico.preco}
                    </p>
                  </div>

                  <Link
                    to="/agendar"
                    className="bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium text-center hover:opacity-90 transition whitespace-nowrap"
                  >
                    Agendar
                  </Link>
                </div>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Servicos;
