import { useServicos } from "../hooks/UseServicos";
import CardServico from "../components/CardServico";

/* Ondulação lateral decorativa, com as cores que já existem no seu    */
/* tema (secondary / primary-light). Some no mobile pra não brigar     */
/* com o scroll horizontal dos cards.                                  */
function OndaLateral({ lado = "left" }) {
  return (
    <div
      className={`hidden lg:block fixed top-0 ${lado}-0 w-40 h-full -z-10 pointer-events-none ${
        lado === "right" ? "scale-x-[-1]" : ""
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 300 900" preserveAspectRatio="none" className="w-full h-full">
        <path
          d="M60,0 C130,70 10,150 90,230 C170,310 30,390 110,470 C190,550 50,630 120,710 C180,780 80,850 140,900 L0,900 L0,0 Z"
          className="fill-secondary"
        />
        <path
          d="M30,0 C100,80 -10,160 60,240 C130,320 0,400 70,480 C140,560 10,640 80,720 C140,790 50,860 100,900 L0,900 L0,0 Z"
          className="fill-primary-light"
          opacity={0.8}
        />
      </svg>
    </div>
  );
}

function Servicos() {
  const { servicos, carregando, erro } = useServicos();
  const categorias = [...new Set(servicos.map((s) => s.categoria))];

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      <OndaLateral lado="left" />
      <OndaLateral lado="right" />

      <main className="relative pt-28 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-neutral-800">
            Nossos serviços
          </h1>
          <p className="mt-3 text-neutral-600 font-light text-lg">
            Escolha o serviço ideal para você e agende em poucos minutos.
          </p>
        </div>

        {carregando && (
          <p className="text-center text-neutral-500 py-10">Carregando serviços...</p>
        )}

        {erro && (
          <p className="text-center text-red-500 py-10">
            Não foi possível carregar os serviços. Tente novamente mais tarde.
          </p>
        )}

        {!carregando &&
          !erro &&
          categorias.map((categoria) => {
            const servicosDaCategoria = servicos.filter(
              (s) => s.categoria === categoria
            );

            return (
              <section key={categoria} className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-neutral-800">
                    {categoria}
                  </h2>
                  <span className="flex-1 h-px bg-primary-dark/30" />
                </div>

                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0">
                  {servicosDaCategoria.map((servico) => (
                    <div
                      key={servico.id}
                      className="snap-start shrink-0 w-[85%] sm:w-auto sm:shrink sm:snap-align-none"
                    >
                      <CardServico servico={servico} />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
      </main>
    </div>
  );
}

export default Servicos;