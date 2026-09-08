import { Link } from "react-router-dom";
import MayraSobre from "../assets/MayraSobre.png";

function Sobre() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-white grid md:grid-cols-2 pt-24">
        {/* Coluna do texto */}
        <div className="flex items-center px-8 pb-20 md:px-12 lg:px-16">
          <div className="max-w-[540px]">
            <h1 className="mb-6 font-display text-5xl font-semibold leading-[1.1] text-primary-dark md:text-6xl lg:text-7xl">
              Conheça a Mayra
            </h1>

            <p className="mb-9 max-w-[500px] text-lg leading-relaxed text-neutral-600 md:text-xl font-light">
              Esteticista, pedagoga e apaixonada por cuidar de pessoas, fazendo você se sentir ainda mais confiante por dentro e por fora.
            </p>

            <div className="max-w-[520px] space-y-5 text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
              <p>
                Aos 35 anos, sou casada, mãe de dois pets e encontro alegria nos detalhes mais simples da vida. Minha trajetória une duas grandes vocações: sou pedagoga de formação e esteticista por amor. Essa mistura me trouxe um olhar que vai muito além da técnica; é sobre escuta, sensibilidade e acolhimento genuíno.
              </p>

              <p>
                No Studio Mayra Batistela, cada atendimento começa muito antes de você chegar. Cuido de cada mínimo detalhe, do ambiente aconchegante à escolha dos produtos, porque acredito que a verdadeira estética caminha junto com o bem-estar e o respeito à sua essência.
              </p>

              <p>
                Minha missão é guiar cada procedimento com ética, transparência e muita dedicação. Quero que o nosso espaço seja o seu refúgio, um lugar onde você possa desacelerar da rotina e sair renovada, com a autoestima nas alturas.
              </p>

              <div className="pt-3">
                <h2 className="mb-4 font-display text-2xl font-semibold text-primary-dark md:text-3xl">
                  Meus valores
                </h2>
                <div className="space-y-2 text-neutral-600">
                  <p>- Ética e total transparência em cada escolha.</p>
                  <p>- Compromisso genuíno com o seu bem-estar.</p>
                  <p>- Excelência e qualidade em cada procedimento.</p>
                  <p>- Respeito, carinho e acolhimento em primeiro lugar.</p>
                </div>
              </div>

              <p className="pt-3">
                Fora daqui, você provavelmente vai me encontrar viajando, lendo um bom livro ou estudando novas técnicas para entregar sempre o melhor. Afinal, quem ama cuidar do outro nunca pára de aprender.
              </p>

              <p className="pt-2 font-display text-2xl font-semibold leading-relaxed text-primary-dark md:text-3xl">
                No Studio Mayra Batistela, cada detalhe é pensado exclusivamente para você.
              </p>
            </div>
          </div>
        </div>

        {/* Coluna da foto */}
        <div className="relative h-72 md:h-auto">
          <img
            src={MayraSobre}
            alt="Mayra Batistela"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>

        {/* Curva de transição para a próxima seção */}
        <svg
          className="absolute bottom-[-1px] left-0 z-20 h-[130px] w-full"
          viewBox="0 0 1440 130"
          preserveAspectRatio="none"
        >
          <path
            d="M0,75 C220,105 430,125 700,105 C950,85 1160,35 1440,0 L1440,130 L0,130 Z"
            fill="white"
          />
        </svg>
      </section>

      {/* CTA final */}
      <section className="bg-white py-24 px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-dark tracking-wide">
          Desperte sua autoestima
        </h2>

        <p className="mt-4 text-neutral-600 max-w-md mx-auto">
          Reserve um momento só seu, venha se cuidar no Studio Mayra Batistela.
        </p>

        <Link
          to="/agendar"
          className="inline-block mt-8 bg-primary-dark text-white px-10 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition duration-200"
        >
          Agendar horário
        </Link>
      </section>
    </main>
  );
}

export default Sobre;