import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaCertificate,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";

import mayra from "../assets/mayra.png";
import MayraSobre from "../assets/MayraSobre.png";

import { useServicos } from "../hooks/UseServicos";
import CardServico from "../components/CardServico";

function Home() {
  const { servicos, carregando } = useServicos();

  // Pega apenas os 4 primeiros serviços para exibir como destaque na página inicial
  const servicosDestaque = servicos.slice(0, 4);

  return (
    <main className="overflow-x-hidden bg-neutral-950 text-white">

      {/* =========================================================
          SEÇÃO PRINCIPAL (HERO): Apresentação e foto de destaque
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-8 md:pb-24 md:pt-24 lg:px-12 lg:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            {/* Coluna da Esquerda: Textos, Chamada para Ação e Estatísticas */}
            <div className="relative z-10 order-2 lg:order-1">

              {/* Identificação da Marca */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#EEBBBB]" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-[#EEBBBB]">
                  Studio Mayra Batistela
                </span>
              </div>

              {/* Título Principal */}
              <h1 className="max-w-2xl font-display text-5xl leading-[0.98] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Sua beleza,
                <span className="mt-2 block font-normal italic text-[#EEBBBB]">
                  do seu jeito.
                </span>
              </h1>

              {/* Descrição Curta */}
              <p className="mt-7 max-w-lg text-sm leading-7 text-neutral-400 sm:text-base">
                Estética e cuidados personalizados para valorizar sua beleza
                natural e transformar seu momento de cuidado em uma experiência
                única.
              </p>

              {/* Botões de Ação (Agendar e Ver Serviços) */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/agendar"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#EEBBBB] px-7 py-4 text-sm font-semibold text-neutral-950 shadow-[0_12px_35px_rgba(238,187,187,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e8aaaa]"
                >
                  Agendar horário
                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/servicos"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-7 py-4 text-sm text-neutral-300 transition-all duration-300 hover:border-[#EEBBBB]/60 hover:text-[#EEBBBB]"
                >
                  Conhecer serviços
                </Link>
              </div>

              {/* Números e Estatísticas Rápidas */}
              <div className="mt-11 grid max-w-[470px] grid-cols-3 border-y border-neutral-800 py-5">
                <div>
                  <strong className="font-display text-2xl text-white">
                    +8
                  </strong>
                  <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                    Procedimentos
                  </span>
                </div>

                <div className="border-l border-neutral-800 pl-5">
                  <strong className="font-display text-2xl text-white">
                    100%
                  </strong>
                  <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                    Personalizado
                  </span>
                </div>

                <div className="border-l border-neutral-800 pl-5">
                  <strong className="font-display text-2xl text-white">
                    5.0
                  </strong>
                  <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                    Experiência
                  </span>
                </div>
              </div>

            </div>

            {/* Coluna da Direita: Foto de Destaque com Molduras e Detalhes */}
            <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative w-full max-w-[500px]">

                {/* Linha decorativa lateral */}
                <div className="absolute -left-5 top-16 z-20 h-16 w-px bg-[#EEBBBB]/70 sm:-left-7" />

                {/* Moldura externa decorativa */}
                <div
                  className="
                    absolute
                    -right-4
                    -top-4
                    h-full
                    w-full
                    rounded-[220px_220px_28px_28px]
                    border
                    border-neutral-800
                    sm:-right-5
                    sm:-top-5
                  "
                />

                {/* Detalhe de linha superior */}
                <div className="absolute right-10 top-7 z-20 h-px w-12 bg-[#EEBBBB]/70" />

                {/* Container da Imagem com bordas arredondadas estilo arco */}
                <div
                  className="
                    relative
                    z-10
                    overflow-hidden
                    rounded-[220px_220px_28px_28px]
                    bg-neutral-900
                  "
                >
                  <img
                    src={mayra}
                    alt="Mayra Batistela"
                    className="
                      h-[500px]
                      w-full
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      hover:scale-[1.015]
                      sm:h-[600px]
                      lg:h-[650px]
                    "
                  />
                </div>

                {/* Assinatura ou selo posicionado na parte inferior da foto */}
                <div className="absolute -bottom-5 left-8 z-20 bg-neutral-950 px-5 py-3">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#EEBBBB]">
                    Estética & beleza
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO DE INTRODUÇÃO: Missão e proposta do Studio
      ========================================================== */}
      <section className="bg-[#111111]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-28">
          <div className="mx-auto mb-6 h-px w-12 bg-[#EEBBBB]" />

          <span className="text-[10px] uppercase tracking-[0.35em] text-[#EEBBBB]">
            Beleza • cuidado • naturalidade
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            Mais que estética.
            <span className="block font-normal italic text-[#EEBBBB]">
              Um momento para você.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-500 md:text-base">
            Cada atendimento é pensado para proporcionar conforto, segurança e
            resultados que respeitam a sua individualidade.
          </p>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO DE DIFERENCIAIS: Os 3 pilares principais
      ========================================================== */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-12">
          <div className="grid md:grid-cols-3">

            {/* Pilar 1: Atendimento */}
            <div className="border-b border-neutral-800 py-9 md:border-b-0 md:pr-10">
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[10px] tracking-[0.2em] text-[#EEBBBB]">
                  01
                </span>
                <span className="h-px w-8 bg-neutral-800" />
              </div>

              <div className="mb-5 flex h-10 w-10 items-center justify-center border border-neutral-800">
                <FaHandsHelping
                  className="text-[#EEBBBB]"
                  size={15}
                />
              </div>

              <h3 className="font-display text-2xl">
                Atendimento
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-500">
                Um atendimento próximo, acolhedor e pensado especialmente para
                você.
              </p>
            </div>

            {/* Pilar 2: Experiência */}
            <div className="border-b border-neutral-800 py-9 md:border-b-0 md:border-l md:px-10">
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[10px] tracking-[0.2em] text-[#EEBBBB]">
                  02
                </span>
                <span className="h-px w-8 bg-neutral-800" />
              </div>

              <div className="mb-5 flex h-10 w-10 items-center justify-center border border-neutral-800">
                <FaCertificate
                  className="text-[#EEBBBB]"
                  size={15}
                />
              </div>

              <h3 className="font-display text-2xl">
                Experiência
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-500">
                Técnicas e produtos escolhidos de acordo com cada necessidade.
              </p>
            </div>

            {/* Pilar 3: Naturalidade */}
            <div className="py-9 md:border-l md:border-neutral-800 md:pl-10">
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[10px] tracking-[0.2em] text-[#EEBBBB]">
                  03
                </span>
                <span className="h-px w-8 bg-neutral-800" />
              </div>

              <div className="mb-5 flex h-10 w-10 items-center justify-center border border-neutral-800">
                <FaLeaf
                  className="text-[#EEBBBB]"
                  size={15}
                />
              </div>

              <h3 className="font-display text-2xl">
                Naturalidade
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-500">
                Valorizamos sua beleza sem perder a sua essência.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO DE SERVIÇOS: Exibição dos cards de destaque
      ========================================================== */}
      <section className="bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12">

          {/* Cabeçalho da Seção com Título e Link para ver todos */}
          <div className="mb-14 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#EEBBBB]" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#EEBBBB]">
                  Especialidades
                </span>
              </div>

              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                Nossos serviços
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-500">
                Procedimentos realizados com cuidado, técnica e atenção aos
                detalhes.
              </p>
            </div>

            <Link
              to="/servicos"
              className="group inline-flex items-center gap-3 text-sm text-neutral-300 transition-colors duration-300 hover:text-[#EEBBBB]"
            >
              Ver todos os serviços
              <FaArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Renderização condicional (Carregando ou Exibindo os Cards) */}
          {carregando ? (
            <div className="py-16 text-center">
              <p className="text-sm text-neutral-500">
                Carregando serviços...
              </p>
            </div>
          ) : (
            <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {servicosDestaque.map((servico) => (
                <div
                  key={servico.id}
                  className="group h-full"
                >
                  <div className="h-full transition-transform duration-300 group-hover:-translate-y-1 [&>*]:h-full">
                    <CardServico
                      servico={servico}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* =========================================================
          SEÇÃO SOBRE A MAYRA: História e valores da profissional
      ========================================================== */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Coluna da Esquerda: Composição de Imagens */}
            <div className="relative min-h-[520px] sm:min-h-[600px]">
              
              {/* Imagem Principal */}
              <div className="absolute left-0 top-0 h-[78%] w-[68%] overflow-hidden bg-neutral-900">
                <img
                  src={mayra}
                  alt="Mayra Batistela"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.015]"
                />
              </div>

              {/* Moldura Estilizada da Imagem Principal */}
              <div className="absolute left-4 top-4 h-[78%] w-[68%] border border-neutral-700" />

              {/* Segunda Imagem (Sobreposição) */}
              <div className="absolute bottom-0 right-0 h-[55%] w-[52%] overflow-hidden border-8 border-neutral-950 bg-neutral-900">
                <img
                  src={MayraSobre}
                  alt="Studio Mayra Batistela"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.015]"
                />
              </div>

              {/* Linha e marca d'água decorativas de fundo */}
              <div className="absolute bottom-[48%] left-[64%] hidden h-px w-20 bg-[#EEBBBB] sm:block" />
              <span className="absolute bottom-5 left-0 font-display text-7xl text-[#EEBBBB]/5 sm:text-8xl">
                MB
              </span>

            </div>

            {/* Coluna da Direita: Textos descritivos e valores */}
            <div className="max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#EEBBBB]" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#EEBBBB]">
                  Sobre o studio
                </span>
              </div>

              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                Prazer,
                <span className="mt-1 block font-normal italic text-[#EEBBBB]">
                  sou a Mayra.
                </span>
              </h2>

              <p className="mt-7 text-base leading-7 text-neutral-300 md:text-lg">
                Sou esteticista e designer de sobrancelhas, apaixonada por
                realçar a beleza natural de cada mulher.
              </p>

              <p className="mt-5 leading-7 text-neutral-500">
                Acredito que cuidar da aparência também é uma forma de cuidar
                de si. Por isso, cada atendimento é pensado para ser leve,
                acolhedor e especial.
              </p>

              {/* Bloco de Valores (Beleza Natural & Cuidado Personalizado) */}
              <div className="mt-9 grid grid-cols-2 border-t border-neutral-800 pt-7">
                <div>
                  <span className="font-display text-2xl text-[#EEBBBB]">
                    Beleza
                  </span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                    Natural
                  </p>
                </div>

                <div className="border-l border-neutral-800 pl-6">
                  <span className="font-display text-2xl text-[#EEBBBB]">
                    Cuidado
                  </span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                    Personalizado
                  </p>
                </div>
              </div>

              {/* Botão para página de história */}
              <Link
                to="/sobre"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#EEBBBB] px-7 py-4 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e8aaaa]"
              >
                Conhecer minha história
                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO DE CHAMADA FINAL PARA AÇÃO (CTA)
      ========================================================== */}
      <section className="border-t border-neutral-900 bg-[#111111]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-36">

          {/* Detalhe de linha decorativa superior */}
          <div className="mx-auto mb-7 h-px w-12 bg-[#EEBBBB]" />

          <span className="text-[10px] uppercase tracking-[0.32em] text-[#EEBBBB]">
            Seu momento começa aqui
          </span>

          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            Reserve um tempo
            <span className="mt-1 block font-normal italic text-[#EEBBBB]">
              para você.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
            Permita-se desacelerar, cuidar de si e viver uma experiência
            especial no Studio Mayra Batistela.
          </p>

          <Link
            to="/agendar"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#EEBBBB] px-9 py-4 text-sm font-semibold text-neutral-950 shadow-[0_12px_35px_rgba(238,187,187,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e8aaaa]"
          >
            Agendar meu horário
            <FaArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Home;