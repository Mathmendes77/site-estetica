import mayra from "../assets/mayra.png";

function Sobre() {
  return (
    <main className="pt-28 pb-16 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <img
          src={mayra}
          alt="Mayra Batistela, esteticista e designer de sobrancelhas"
          className="rounded-3xl w-full .h-\[420px\] {
            height: 420px;
            }object-cover shadow-lg"
        />

        <div>
          <span className="inline-block text-sm font-medium text-primary-dark bg-secondary px-4 py-1.5 rounded-full mb-5">
            Porto Feliz - SP
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-neutral-800 leading-tight">
            Conheça a Mayra
          </h1>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            Especialista em sobrancelha e estética facial, a Mayra atende cada
            cliente com um olhar de cuidado que vai além da técnica. Design
            personalizado, henna, hidratação labial e tratamentos faciais
            pensados para valorizar sua beleza natural.
          </p>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Mais do que um atendimento, uma experiência de autocuidado — no
            Studio Mayra Batistela, em Porto Feliz.
          </p>
        </div>
      </div>

      {/* Especialidades */}
      <section className="mb-16">
        <h2 className="font-display text-3xl font-semibold text-center mb-10">
          Especialidades
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {especialidades.map((item) => (
            <div
              key={item.titulo}
              className="bg-white border border-secondary rounded-2xl p-6 text-center shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
              <p className="text-muted text-sm">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder para fotos de trabalhos - fase seguinte */}
      <section className="text-center bg-secondary/40 rounded-2xl p-10">
        <p className="text-muted">
          Em breve: fotos reais de trabalhos e sessões realizadas no studio.
        </p>
      </section>
    </main>
  );
}

const especialidades = [
  {
    titulo: "Design de Sobrancelhas",
    descricao: "Mapeamento facial personalizado para valorizar seu rosto.",
  },
  {
    titulo: "Henna",
    descricao: "Definição natural e duradoura para as sobrancelhas.",
  },
  {
    titulo: "Hydra Gloss",
    descricao: "Hidratação profunda para lábios macios e saudáveis.",
  },
  {
    titulo: "Estética Facial",
    descricao: "Peeling e microagulhamento para renovar a pele.",
  },
];

export default Sobre;
