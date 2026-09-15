import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import mayra from "../assets/mayra.png";
import MayraSobre from "../assets/MayraSobre.png";

import CardServico from "../components/CardServico";
import { useServicos } from "../hooks/UseServicos";

function Home() {
  const { servicos, carregando } = useServicos();

  // Pega só os 4 primeiros serviços pra mostrar em destaque na home
  const servicosDestaque = servicos.slice(0, 4);

  return (
    <main className="overflow-x-hidden bg-[#111111] text-white">
      {/* HERO */}
      <section className="relative border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-20">
            {/* Texto principal do hero */}
            <div className="order-2 max-w-xl lg:order-1">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#EEBBBB]" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#EEBBBB]">
                  Studio Mayra Batistela
                </span>
              </div>

              <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-[72px]">
                Beleza que
                <span className="block italic font-normal text-[#EEBBBB]">
                  respeita você.
                </span>
              </h1>

              <p className="mt-7 max-w-md text-[15px] leading-7 text-neutral-400">
                Estética facial e cuidados personalizados para valorizar sua
                beleza natural com técnica, delicadeza e atenção aos detalhes.
              </p>

              {/* Botões de ação */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/agendar"
                  className="group inline-flex items-center justify-center gap-4 bg-[#EEBBBB] px-7 py-4 text-sm font-medium text-[#111111] rounded-full transition-all duration-300 hover:bg-[#e8aaaa]"
                >
                  Agendar horário
                  <FaArrowRight
                    size={11}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/servicos"
                  className="inline-flex items-center justify-center border border-white/15 px-7 py-4 text-sm text-neutral-300 rounded-full transition-all duration-300 hover:border-[#EEBBBB]/50 hover:text-[#EEBBBB]"
                >
                  Conhecer tratamentos
                </Link>
              </div>
            </div>

            {/* Foto de destaque */}
            <div className="order-1 lg:order-2">
              <div className="relative ml-auto max-w-[620px]">
                <div className="absolute -right-5 -top-5 h-full w-full border border-white/[0.08]" />
                <div className="relative h-[500px] overflow-hidden sm:h-[600px] lg:h-[650px]">
                  <img
                    src={mayra}
                    alt="Mayra Batistela"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="absolute bottom-0 left-0 bg-[#111111] px-6 py-5 sm:px-8">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#EEBBBB]">
                    Estética & beleza
                  </p>
                  <p className="mt-1 text-sm text-neutral-300">
                    Studio Mayra Batistela
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA DE CONFIANÇA */}
      <section className="border-b border-white/[0.08] bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-white/[0.08] px-6 py-7 lg:border-b-0 lg:border-r">
            <span className="block text-xs uppercase tracking-[0.2em] text-neutral-500">
              Atendimento
            </span>
            <strong className="mt-2 block font-display text-xl font-normal">
              Personalizado
            </strong>
          </div>

          <div className="border-b border-white/[0.08] px-6 py-7 lg:border-b-0 lg:border-r">
            <span className="block text-xs uppercase tracking-[0.2em] text-neutral-500">
              Experiência
            </span>
            <strong className="mt-2 block font-display text-xl font-normal">
              Técnica & cuidado
            </strong>
          </div>

          <div className="px-6 py-7 lg:border-r lg:border-white/[0.08]">
            <span className="block text-xs uppercase tracking-[0.2em] text-neutral-500">
              Procedimentos
            </span>
            <strong className="mt-2 block font-display text-xl font-normal">
              +8 serviços
            </strong>
          </div>

          <div className="px-6 py-7">
            <span className="block text-xs uppercase tracking-[0.2em] text-neutral-500">
              Resultado
            </span>
            <strong className="mt-2 block font-display text-xl font-normal">
              Beleza natural
            </strong>
          </div>
        </div>
      </section>

      {/* CATEGORIAS EM DESTAQUE */}
      <section className="bg-[#111111]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mb-16 max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#EEBBBB]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#EEBBBB]">
                Tratamentos
              </span>
            </div>

            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Cuidados pensados
              <span className="block italic font-normal text-[#EEBBBB]">
                para você.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-500">
              Procedimentos escolhidos para valorizar sua beleza, respeitando
              suas características e suas necessidades.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Categoria: Estética Facial */}
            <Link
              to="/servicos"
              className="group relative min-h-[460px] overflow-hidden border border-white/[0.08] bg-[#151515]"
            >
              <div className="absolute inset-0">
                <img
                  src={MayraSobre}
                  alt="Estética facial"
                  className="h-full w-full object-cover object-top opacity-70 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#EEBBBB]">
                  01
                </span>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                  Estética Facial
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-300">
                  Cuidados para pele, revitalização e valorização da beleza
                  natural.
                </p>
                <span className="mt-6 inline-flex items-center gap-3 bg-[#EEBBBB] px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#111111] rounded-full transition-all duration-300 group-hover:bg-[#e8aaaa]">
                  Conhecer tratamentos
                  <FaArrowRight size={10} />
                </span>
              </div>
            </Link>

            {/* Categoria: Sobrancelhas */}
            <Link
              to="/servicos"
              className="group relative min-h-[460px] overflow-hidden border border-white/[0.08] bg-[#151515]"
            >
              <div className="absolute inset-0">
                <img
                  src={mayra}
                  alt="Design de sobrancelhas"
                  className="h-full w-full object-cover object-top opacity-65 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#EEBBBB]">
                  02
                </span>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                  Sobrancelhas
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-300">
                  Design personalizado para harmonizar o olhar e respeitar seus
                  traços.
                </p>
                <span className="mt-6 inline-flex items-center gap-3 bg-[#EEBBBB] px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#111111] rounded-full transition-all duration-300 group-hover:bg-[#e8aaaa]">
                  Conhecer tratamentos
                  <FaArrowRight size={10} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIÇOS EM DESTAQUE */}
      <section className="border-y border-white/[0.08] bg-[#0d0d0d]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#EEBBBB]">
                Escolhas do studio
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Procedimentos em destaque
              </h2>
            </div>

            <Link
              to="/servicos"
              className="group flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-[#EEBBBB]"
            >
              Ver todos os serviços
              <FaArrowRight
                size={11}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {carregando ? (
            <div className="py-20 text-center text-sm text-neutral-500">
              Carregando serviços...
            </div>
          ) : (
            <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {servicosDestaque.map((servico) => (
                <div key={servico.id} className="h-full">
                  <CardServico servico={servico} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SOBRE A MAYRA */}
      <section className="bg-[#111111]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:gap-24 lg:px-16 lg:py-32">
          {/* Fotos */}
          <div className="relative min-h-[550px]">
            <div className="absolute left-0 top-0 h-[78%] w-[70%] overflow-hidden">
              <img
                src={mayra}
                alt="Mayra Batistela"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[52%] w-[52%] overflow-hidden border-[10px] border-[#111111]">
              <img
                src={MayraSobre}
                alt="Studio Mayra Batistela"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="absolute left-4 top-4 h-[78%] w-[70%] border border-white/15" />
          </div>

          {/* Texto de apresentação */}
          <div className="max-w-xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#EEBBBB]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#EEBBBB]">
                Sobre o studio
              </span>
            </div>

            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Prazer,
              <span className="block italic font-normal text-[#EEBBBB]">
                sou a Mayra.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-300">
              Sou esteticista e designer de sobrancelhas, apaixonada por realçar
              a beleza natural de cada mulher.
            </p>

            <p className="mt-5 text-sm leading-7 text-neutral-500">
              Acredito que cada pessoa possui características únicas. Por isso,
              meu trabalho é baseado em um atendimento cuidadoso, personalizado
              e atento aos detalhes.
            </p>

            <div className="mt-9 border-t border-white/[0.08] pt-7">
              <div className="grid grid-cols-2">
                <div>
                  <span className="font-display text-2xl text-[#EEBBBB]">
                    Beleza
                  </span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    Natural
                  </p>
                </div>

                <div className="border-l border-white/[0.08] pl-6">
                  <span className="font-display text-2xl text-[#EEBBBB]">
                    Cuidado
                  </span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    Personalizado
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/sobre"
              className="group mt-9 inline-flex items-center gap-4 border-b border-[#EEBBBB] pb-2 text-sm text-white transition-colors hover:text-[#EEBBBB]"
            >
              Conhecer minha história
              <FaArrowRight
                size={11}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="border-y border-white/[0.08] bg-[#0d0d0d]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#EEBBBB]">
                Uma experiência diferente
              </span>
              <h2 className="mt-4 max-w-md font-display text-4xl leading-tight sm:text-5xl">
                Cuidar de você também é prioridade.
              </h2>
            </div>

            <div className="grid gap-0 sm:grid-cols-2">
              <div className="border-b border-white/[0.08] py-7 sm:border-r sm:pr-10">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Atendimento
                </span>
                <h3 className="mt-3 font-display text-2xl font-normal">
                  Próximo e individual
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  Cada atendimento é realizado com atenção às suas necessidades
                  e expectativas.
                </p>
              </div>

              <div className="border-b border-white/[0.08] py-7 sm:pl-10">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Cuidado
                </span>
                <h3 className="mt-3 font-display text-2xl font-normal">
                  Em cada detalhe
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  Um ambiente pensado para proporcionar conforto, tranquilidade
                  e confiança.
                </p>
              </div>

              <div className="py-7 sm:border-r sm:pr-10">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Técnica
                </span>
                <h3 className="mt-3 font-display text-2xl font-normal">
                  Procedimentos personalizados
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  Técnicas escolhidas de acordo com cada pessoa, buscando
                  resultados naturais.
                </p>
              </div>

              <div className="py-7 sm:pl-10">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Resultado
                </span>
                <h3 className="mt-3 font-display text-2xl font-normal">
                  Você se reconhece
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  O objetivo não é transformar quem você é, mas valorizar aquilo
                  que já existe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESSAO FINAL */}
      <section className="bg-[#111111]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center sm:px-10 lg:py-36">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#EEBBBB]">
            Studio Mayra Batistela
          </span>

          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Seu momento de
            <span className="block italic font-normal text-[#EEBBBB]">
              cuidado começa aqui.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-neutral-500">
            Escolha o procedimento ideal para você e agende seu horário de forma
            simples e rápida.
          </p>

          <Link
            to="/agendar"
            className="group mt-9 inline-flex items-center gap-4 bg-[#EEBBBB] px-8 py-4 text-sm font-medium text-[#111111] rounded-full transition-all duration-300 hover:bg-[#e8aaaa]"
          >
            Agendar horário
            <FaArrowRight
              size={11}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
