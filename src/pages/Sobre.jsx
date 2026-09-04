import FOTOSOBRE from "../assets/FOTOSOBRE.png";

function Sobre() {
  return (
    <main className="pt-28 pb-16 px-6 max-w-5xl mx-auto">
      {/* Intro */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <img
          src={FOTOSOBRE}
          alt="Mayra Batistela, esteticista e designer de sobrancelhas"
          className="rounded-3xl w-full h-[420px] object-cover shadow-lg"
        />

        <div>
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

      {/* Quem sou eu */}
      <section className="mb-20">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-dark text-center mb-10">
          Quem sou eu?
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {curiosidades.map((item) => (
            <div
              key={item.texto}
              className="bg-white border border-secondary rounded-2xl p-5 text-center shadow-sm"
            >
              <p className="text-2xl mb-2">{item.emoji}</p>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dia a dia no studio */}
      <section className="bg-secondary/40 rounded-[2rem] p-8 md:p-12">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-dark text-center mb-6">
          Um dia no studio
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-muted text-lg leading-relaxed text-center">
          <p>
            Cada atendimento começa antes mesmo da cliente chegar: espaço
            preparado, materiais higienizados e tudo pensado para receber com
            cuidado. Mais do que um procedimento, é um momento de pausa na
            rotina — um tempo só para ela.
          </p>
          <p>
            Como esteticista e também graduanda em Estética e Cosmética, a
            Mayra une técnica atualizada com aquele carinho no atendimento
            que transforma uma cliente em alguém que sempre volta. Cada
            sobrancelha, cada pele, é tratada de um jeito único.
          </p>
          <p>
            No fim do dia, o que fica não é só o resultado no espelho — é a
            confiança de quem saiu se sentindo mais bonita e cuidada.
          </p>
        </div>
      </section>
    </main>
  );
}

const curiosidades = [
  {  texto: "35 aninhos, casada e apaixonada pela vida" },
  {  texto: "Mãe de dois pets e empreendedora" },
  {
    
    texto:
      "Designer de sobrancelha, graduanda em Estética e Cosmética e Pedagoga",
  },
  {  texto: "Amo viajar, ler e estudar" },
  {  texto: "Amo estar com a família e amigos" },
  {
    
    texto: "Tenho muito amor pela profissão e sempre busca fazer o seu melhor",
  },
];

export default Sobre;