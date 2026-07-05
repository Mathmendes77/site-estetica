import { Link } from "react-router-dom";
import mayra from "../assets/mayra.png";

function Home() {
  return (
    <main className="pt-24">
      {/* Hero */}

      <section className="px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Coluna do texto */}
        <div>
          <span className="inline-block text-sm font-medium text-primary-dark bg-secondary px-4 py-1.5 rounded-full mb-5">
            Estética com cuidado, precisão e Carinho.
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-neutral-800 leading-tight">
            A estética que você precisa
          </h1>
          <p className="mt-5 text-muted text-lg">
            Agende seu horário em poucos minutos e venha se sentir cuidada.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/agendar"
              className="bg-primary-dark text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Agendar horário
            </Link>
            <Link
              to="/servicos"
              className="border border-neutral-300 px-8 py-3 rounded-full font-medium hover:border-primary-dark transition"
            >
              Ver serviços
            </Link>
          </div>
        </div>

        {/* Coluna da foto */}
        <div className="relative">
          <img
            src={mayra}
            alt="Ambiente do Studio Mayra Batistela"
            className="rounded-3xl w-full h-[420px] object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Serviços em destaque */}
      <section className="px-6 py-16 bg-secondary/40">
        <h2 className="font-display text-3xl text-center font-semibold mb-10">
          Serviços em destaque
        </h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {servicosDestaque.map((servico) => (
            <div
              key={servico.nome}
              className="bg-white rounded-2xl p-6 shadow-sm border border-secondary"
            >
              <h3 className="font-semibold text-lg">{servico.nome}</h3>
              <p className="text-muted text-sm mt-2">{servico.descricao}</p>
              <p className="mt-4 font-medium text-primary">
                {servico.duracao} • valor {servico.preco}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const servicosDestaque = [
  {
    nome: "Hydra Gloss",
    descricao: "hidratação profunda a longo prazo, rejuvenescendo os labios",
    duracao: "1 hr",
    preco: "a consultar",
  },
  {
    nome: "Design de sobrancelhas",
    descricao: "Mapeamento facial para valorizar seu formato de rosto.",
    duracao: "45min",
    preco: "a consultar",
  },
  {
    nome: "Microagulhamento",
    descricao:
      "redução de cicatrizes, rugas, linhas de expressão e melhorando a textura e firmeza da pele.",
    duracao: "2h",
    preco: "a consultar",
  },
];

export default Home;
