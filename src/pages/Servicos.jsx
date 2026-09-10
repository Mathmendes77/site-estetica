import { useServicos } from "../hooks/UseServicos";
import CardServico from "../components/CardServico";

function Servicos() {
  const { servicos, carregando, erro } = useServicos();

  // Categorias permitidas para exibição na página de serviços
  const categoriasPermitidas = [
    "Sobrancelhas",
    "Facial",
    "Estética Facial",
  ];

  // Filtra apenas as categorias que possuem serviços cadastrados correspondentes
  const categorias = categoriasPermitidas.filter((categoria) =>
    servicos.some((servico) => servico.categoria === categoria)
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-100">

      {/* =========================================================
          SEÇÃO PRINCIPAL (HERO): Título e Apresentação
      ========================================================== */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 md:pb-20 md:pt-32 lg:px-12">
          
          {/* Cabeçalho */}
          <div className="flex items-end justify-between gap-8 border-b border-neutral-900 pb-8">
            <div>
              {/* Identificação do Studio */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#EEBBBB]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#EEBBBB]">
                  Studio Mayra Batistela
                </span>
              </div>

              {/* Título Principal */}
              <h1 className="font-display text-4xl leading-none tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
                Cuidados pensados{" "}
                <span className="font-normal italic text-[#EEBBBB]">
                  para você.
                </span>
              </h1>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          SEÇÃO DE CONTEÚDO: Carregamento, Erro ou Listagem por Categoria
      ========================================================== */}
      <section className="bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12">

          {/* Feedback Visual: Estado de Carregamento */}
          {carregando && (
            <div className="flex min-h-[250px] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-5 h-px w-10 bg-[#EEBBBB]" />
                <p className="text-sm text-neutral-500">
                  Carregando serviços...
                </p>
              </div>
            </div>
          )}

          {/* Feedback Visual: Mensagem de Erro */}
          {erro && (
            <div className="flex min-h-[250px] items-center justify-center">
              <div className="max-w-md text-center">
                <div className="mx-auto mb-5 h-px w-10 bg-[#EEBBBB]" />
                <p className="text-sm leading-7 text-neutral-400">
                  Não foi possível carregar os serviços.
                  <br />
                  Tente novamente mais tarde.
                </p>
              </div>
            </div>
          )}

          {/* Renderização das Categorias e Cards */}
          {!carregando && !erro && (
            <div className="space-y-20">
              {categorias.map((categoria, index) => {
                const servicosDaCategoria = servicos.filter(
                  (servico) => servico.categoria === categoria
                );

                return (
                  <section key={categoria}>

                    {/* Cabeçalho da Categoria */}
                    <div className="mb-8 flex items-center gap-4">
                      <span className="text-[10px] tracking-[0.25em] text-[#EEBBBB]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-7 bg-neutral-800" />

                      <h2 className="font-display text-2xl text-white md:text-3xl">
                        {categoria}
                      </h2>

                      <span className="h-px flex-1 bg-neutral-800" />
                    </div>

                    {/* Grade / Carrossel de Serviços */}
                    <div
                      className="
                        flex gap-5 overflow-x-auto pb-4
                        snap-x snap-mandatory
                        scroll-smooth
                        [scrollbar-width:none]
                        [&::-webkit-scrollbar]:hidden

                        sm:grid
                        sm:grid-cols-2
                        sm:overflow-visible
                        sm:pb-0

                        lg:grid-cols-4
                      "
                    >
                      {servicosDaCategoria.map((servico) => (
                        <div
                          key={servico.id}
                          className="
                            group
                            w-[82%]
                            shrink-0
                            snap-start

                            sm:w-auto
                            sm:shrink
                          "
                        >
                          <div className="h-full transition-transform duration-200 group-hover:-translate-y-1">
                            <CardServico servico={servico} />
                          </div>
                        </div>
                      ))}
                    </div>

                  </section>
                );
              })}
            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default Servicos;