import { servicos } from "../data/Servicos";
import CardServico from "../components/CardServico";

function Servicos() {
  const categorias = [...new Set(servicos.map((s) => s.categoria))];

  return (
    <main className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-neutral-800">
          Nossos serviços
        </h1>
        <p className="mt-3 text-neutral-600 font-light">
          Escolha o serviço ideal para você e agende em poucos minutos.
        </p>
      </div>

      {categorias.map((categoria) => {
        const servicosDaCategoria = servicos.filter(
          (s) => s.categoria === categoria
        );

        return (
          <section key={categoria} className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-dark text-center mb-8">
              {categoria}
            </h2>

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
  );
}

export default Servicos;