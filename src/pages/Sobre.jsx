import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import MayraSobre from "../assets/MayraSobre.png";

function Sobre() {
  const valores = [
    "Ética e total transparência em cada escolha.",
    "Compromisso genuíno com o seu bem-estar.",
    "Excelência e qualidade em cada procedimento.",
    "Respeito, carinho e acolhimento em primeiro lugar.",
  ];

  return (
    <main className="overflow-x-hidden bg-neutral-950 text-neutral-100">

      {/* =========================================================
          01 — HERO
      ========================================================== */}
      <section className="border-b border-neutral-900 bg-neutral-950">

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-32 lg:px-12 lg:pt-36">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

            {/* TEXTO */}
            <div className="order-2 lg:order-1">

              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-9 bg-[#EEBBBB]" />

                <span className="text-[10px] uppercase tracking-[0.32em] text-[#EEBBBB]">
                  Sobre o Studio
                </span>

              </div>


              <h1 className="max-w-xl font-display text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl md:text-7xl">

                Conheça

                <span className="mt-2 block font-normal italic text-[#EEBBBB]">
                  a Mayra.
                </span>

              </h1>


              <p className="mt-8 max-w-lg text-base font-light leading-8 text-neutral-400 md:text-lg">
                Esteticista, pedagoga e apaixonada por cuidar de pessoas,
                transformando o autocuidado em uma experiência leve,
                acolhedora e especial.
              </p>


              <div className="mt-9 flex items-center gap-4">

                <span className="h-px w-12 bg-neutral-800" />

                <span className="text-[9px] uppercase tracking-[0.28em] text-neutral-600">
                  Studio Mayra Batistela
                </span>

              </div>

            </div>


            {/* =====================================================
                FOTO — NOVA ESTILIZAÇÃO
            ====================================================== */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">

              <div className="relative w-full max-w-[520px]">

                {/* Moldura deslocada */}
                <div
                  className="
                    absolute
                    -bottom-5
                    -left-5
                    h-full
                    w-full
                    border
                    border-neutral-800
                  "
                />


                {/* Pequeno detalhe superior */}
                <div className="absolute -right-1 -top-5 z-20 h-px w-20 bg-[#EEBBBB]/70" />


                {/* Foto */}
                <div
                  className="
                    relative
                    z-10
                    overflow-hidden
                    rounded-t-[45%]
                    rounded-b-[18px]
                    bg-neutral-900
                  "
                >

                  <img
                    src={MayraSobre}
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

                  {/* Escurecimento extremamente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent" />

                </div>


                {/* Identificação da foto */}
                <div className="absolute bottom-5 left-5 z-20 bg-neutral-950 px-5 py-3">

                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#EEBBBB]">
                    Mayra Batistela
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          02 — HISTÓRIA + VALORES
      ========================================================== */}
      <section className="bg-[#111111]">

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            {/* TÍTULO */}
            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-8 bg-[#EEBBBB]" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#EEBBBB]">
                  Minha história
                </span>

              </div>


              <h2 className="max-w-sm font-display text-4xl leading-tight md:text-5xl">

                Cuidar sempre fez parte de

                <span className="mt-2 block font-normal italic text-[#EEBBBB]">
                  quem eu sou.
                </span>

              </h2>

            </div>


            {/* CONTEÚDO */}
            <div className="max-w-3xl">

              <div className="space-y-6 text-sm leading-8 text-neutral-400 md:text-base">

                <p>
                  Aos 35 anos, sou casada, mãe de dois pets e encontro alegria
                  nos detalhes mais simples da vida. Minha trajetória une duas
                  grandes vocações: sou pedagoga de formação e esteticista por
                  amor.
                </p>

                <p>
                  Essa mistura trouxe para o meu trabalho um olhar que vai
                  muito além da técnica. É sobre escuta, sensibilidade e
                  acolhimento genuíno. Acredito que cada pessoa merece ser
                  atendida de forma única, respeitando sua individualidade e
                  sua beleza natural.
                </p>

                <p>
                  No Studio Mayra Batistela, cada atendimento começa muito
                  antes de você chegar. Cuido dos mínimos detalhes, do ambiente
                  à escolha dos produtos, porque acredito que a verdadeira
                  estética caminha junto com o bem-estar.
                </p>

              </div>


              {/* Frase destaque */}
              <div className="my-10 border-l border-[#EEBBBB] pl-6 md:pl-8">

                <p className="font-display text-xl italic leading-relaxed text-[#EEBBBB] md:text-2xl">
                  "Quero que o nosso espaço seja o seu refúgio."
                </p>

              </div>


              {/* Valores */}
              <div className="border-t border-neutral-800 pt-8">

                <div className="mb-6 flex items-center gap-3">

                  <span className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                    O que guia meu trabalho
                  </span>

                </div>


                <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">

                  {valores.map((valor) => (

                    <div
                      key={valor}
                      className="flex items-start gap-3"
                    >

                      <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-800">

                        <FaCheck
                          size={8}
                          className="text-[#EEBBBB]"
                        />

                      </span>

                      <span className="text-sm leading-6 text-neutral-500">
                        {valor}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* Último texto */}
              <p className="mt-9 text-sm leading-8 text-neutral-500 md:text-base">

                Fora daqui, você provavelmente vai me encontrar viajando,
                lendo um bom livro ou estudando novas técnicas para entregar
                sempre o melhor. Afinal, quem ama cuidar do outro nunca para
                de aprender.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          03 — CTA FINAL
      ========================================================== */}
      <section className="border-t border-neutral-900 bg-neutral-950">

        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-28">

          <div className="mx-auto mb-7 h-px w-10 bg-[#EEBBBB]" />

          <span className="text-[10px] uppercase tracking-[0.34em] text-[#EEBBBB]">
            Seu momento começa aqui
          </span>


          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">

            Vamos cuidar de você?

          </h2>


          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-neutral-500 md:text-base">
            Reserve um momento só seu. Venha desacelerar, se cuidar e viver
            uma experiência especial no Studio Mayra Batistela.
          </p>


          <Link
            to="/agendar"
            className="
              group
              mt-9
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#EEBBBB]
              px-9
              py-4
              text-sm
              font-semibold
              text-neutral-950
              shadow-[0_12px_35px_rgba(238,187,187,0.08)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#e8aaaa]
            "
          >

            Agendar horário

            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

        </div>

      </section>

    </main>
  );
}

export default Sobre;