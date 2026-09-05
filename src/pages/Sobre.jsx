import { Link } from "react-router-dom";
import MayraSobre from "../assets/MayraSobre.png";

function Sobre() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-white grid md:grid-cols-2">
        {/* Coluna do texto */}
        <div className="flex items-center px-8 pt-32 pb-20 md:px-12 lg:px-16">
          <div className="max-w-[540px]">
            <h1 className="mb-6 font-display text-5xl font-semibold leading-[1] text-primary-dark md:text-6xl lg:text-7xl">
              Conheça a Mayra
            </h1>

            <p className="mb-9 max-w-[500px] text-lg leading-relaxed text-muted md:text-xl">
              Esteticista, designer de sobrancelhas e apaixonada por cuidar
              de pessoas — dentro e fora do espelho.
            </p>

            <div className="max-w-[520px] space-y-5 text-base leading-7 text-muted md:text-lg md:leading-8">
              <p>
                Aos 33 anos, sou noiva, mãe de dois pets e apaixonada pela
                vida em todas as suas fases. Sou Designer de Sobrancelhas,
                graduanda em Estética e Cosmética e também Pedagoga — uma
                combinação que trouxe ao meu trabalho um olhar técnico e, ao
                mesmo tempo, muito humano.
              </p>

              <p>
                Cada atendimento no Studio Mayra Batistela começa antes
                mesmo da cliente chegar. Preparo cada detalhe com carinho,
                dos materiais higienizados ao ambiente, porque acredito que
                estética também é acolhimento.
              </p>

              <p>
                Meu trabalho é guiado por ética, transparência, compromisso,
                qualidade e, acima de tudo, respeito. Busco oferecer uma
                experiência cuidadosa e resultados que façam cada cliente se
                sentir ainda mais bonita, cuidada e confiante.
              </p>

              <div className="pt-3">
                <h2 className="mb-4 font-display text-2xl font-semibold text-primary-dark md:text-3xl">
                  Meus valores
                </h2>
                <div className="space-y-1 text-muted">
                  <p>– Ética e transparência;</p>
                  <p>– Compromisso com cada cliente;</p>
                  <p>– Qualidade em cada procedimento;</p>
                  <p>– Respeito e acolhimento.</p>
                </div>
              </div>

              <p className="pt-3">
                Também amo viajar, ler e estudar sempre mais sobre minha
                profissão. Acredito que quem cuida também precisa continuar
                aprendendo.
              </p>

              <p className="pt-2 font-display text-2xl font-semibold leading-relaxed text-primary-dark md:text-3xl">
                No Studio Mayra Batistela, cada detalhe é pensado para você.
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
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-wide">
          Desperte sua autoestima
        </h2>

        <p className="mt-4 text-muted max-w-md mx-auto">
          Reserve um momento só seu, venha se cuidar no Studio Mayra
          Batistela.
        </p>

        <Link
          to="/agendar"
          className="inline-block mt-8 bg-primary-dark text-neutral-800 px-10 py-3.5 rounded-full font-medium hover:scale-105 hover:shadow-lg transition duration-200"
        >
          Agendar horário
        </Link>
      </section>
    </main>
  );
}

export default Sobre;