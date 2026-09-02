import { servicos } from "../data/Servicos";
import CardServico from "../components/CardServico";
import CarrosselServicos from "../components/CarrosselServicos";

function Servicos() {
  const categorias = [...new Set(servicos.map((s) => s.categoria))];

  return (
    <main className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-neutral-800">
          Nossos serviços
        </h1>
        <p className="mt-3 text-muted">
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

            {servicosDaCategoria.length > 4 ? (
              <CarrosselServicos servicos={servicosDaCategoria} />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {servicosDaCategoria.map((servico) => (
                  <CardServico key={servico.id} servico={servico} />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </main>
  );
}

export default Servicos;