import { Link } from "react-router-dom";
import { FaHandsHelping, FaCertificate, FaLeaf, FaHeart } from "react-icons/fa";
import mayra from "../assets/mayra.png";
import MayraSobre from "../assets/MayraSobre.png";
import { servicos } from "../data/Servicos";
import CardServico from "../components/CardServico";

function Home() {
  const servicosDestaque = servicos.slice(0, 4);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <span className="inline-block text-sm font-medium text-primary-dark bg-secondary px-4 py-1.5 rounded-full mb-5">
            Estética com cuidado, precisão e carinho.
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-neutral-800 leading-tight">
            A estética que você precisa
          </h1>
          <p className="mt-5 text-muted text-lg">
            Agende seu horário em poucos minutos e venha se sentir cuidada.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/agendar"
              className="bg-primary-dark text-neutral-800 px-8 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg transition duration-200"
            >
              Agendar horário
            </Link>
            <Link
              to="/servicos"
              className="border border-neutral-300 px-8 py-3 rounded-full font-medium hover:border-primary-dark transition"
            >
              Ver serviços
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={mayra}
            alt="Mayra Batistela, esteticista e designer de sobrancelhas"
            className="rounded-3xl w-full h-[420px] object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Por que cuidar da sua beleza aqui */}
      <section className="px-6 py-20 bg-secondary/40">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-dark">
            Cuidar de você é o que fazemos de melhor
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Mais do que procedimentos, cada atendimento é pensado para
            valorizar sua autoestima e trazer bem-estar ao seu dia a dia.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {beneficios.map((item) => (
            <div key={item.titulo} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
                <item.icone className="text-primary-dark" size={26} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
              <p className="text-muted text-sm">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços em destaque */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-dark">
            Alguns dos nossos serviços
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Do design de sobrancelhas à estética facial, cada procedimento é
            feito com técnica e cuidado.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {servicosDestaque.map((servico) => (
            <CardServico key={servico.id} servico={servico} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/servicos"
            className="inline-block border border-primary-dark text-primary-dark px-8 py-3 rounded-full font-medium hover:bg-primary-dark hover:text-neutral-800 transition"
          >
            Ver todos os serviços
          </Link>
        </div>
      </section>

      {/* Conheça o espaço / Sobre */}
      <section className="px-6 py-20 bg-secondary/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={mayra}
              alt="Mayra Batistela"
              className="rounded-3xl w-full h-72 object-cover object-top shadow-lg mt-8"
            />
            <img
              src={MayraSobre}
              alt="Studio Mayra Batistela"
              className="rounded-3xl w-full h-72 object-cover object-top shadow-lg"
            />
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-dark mb-5">
              Conheça a Mayra
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              Esteticista, designer de sobrancelhas e apaixonada por cuidar
              de pessoas — dentro e fora do espelho. Cada atendimento no
              Studio começa com carinho antes mesmo da cliente chegar.
            </p>
            <Link
              to="/sobre"
              className="inline-block bg-primary-dark text-neutral-800 px-8 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg transition duration-200"
            >
              Conhecer a história completa
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-wide">
          Desperte sua autoestima
        </h2>
        <p className="mt-4 text-muted max-w-md mx-auto">
          Reserve um momento só seu — venha se cuidar no Studio Mayra
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

const beneficios = [
  {
    icone: FaHandsHelping,
    titulo: "Atendimento personalizado",
    descricao: "Cada cliente é única, e cada procedimento também.",
  },
  {
    icone: FaCertificate,
    titulo: "Profissional qualificada",
    descricao: "Formação e atualização constante em estética.",
  },
  {
    icone: FaLeaf,
    titulo: "Materiais de qualidade",
    descricao: "Produtos selecionados para o melhor resultado.",
  },
  {
    icone: FaHeart,
    titulo: "Ambiente acolhedor",
    descricao: "Um espaço preparado para você relaxar de verdade.",
  },
];

export default Home;