import { Link } from "react-router-dom";
import { FaHandsHelping, FaCertificate, FaLeaf, FaHeart, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import mayra from "../assets/mayra.png";
import MayraSobre from "../assets/MayraSobre.png";
import { servicos } from "../data/Servicos";
import CardServico from "../components/CardServico";

function Home() {
  const servicosDestaque = servicos.slice(0, 4);

  return (
    <main className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Detalhe de fundo decorativo suave */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-primary-dark bg-secondary/60 px-4 py-2 rounded-full shadow-sm">
            <FaMapMarkerAlt className="text-primary-dark" />
            <span>Studio exclusivo em Porto Feliz - SP</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-800 leading-[1.15]">
            A estética que realça a sua <span className="text-primary-dark italic font-normal">melhor versão</span>.
          </h1>

          <p className="text-neutral-600 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Um espaço pensado nos mínimos detalhes para cuidar da sua autoestima com técnica, leveza e atendimento totalmente personalizado.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link
              to="/agendar"
              className="bg-primary-dark text-white text-center px-8 py-4 rounded-full font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Agendar meu horário
            </Link>
            <Link
              to="/servicos"
              className="border border-neutral-300 text-neutral-700 text-center px-8 py-4 rounded-full font-medium hover:border-primary-dark hover:text-primary-dark hover:bg-white/50 transition-all duration-200"
            >
              Conhecer serviços
            </Link>
          </div>

          {/* Mini prova social rápida */}
          <div className="pt-4 flex items-center gap-3 text-sm text-neutral-500">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>
            <span>Avaliado com excelência pelas nossas clientes</span>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute -inset-2 bg-gradient-to-tr from-secondary/50 to-transparent rounded-[2.5rem] blur-xl -z-10" />
          <img
            src={mayra}
            alt="Mayra Batistela, esteticista e designer de sobrancelhas"
            className="rounded-[2rem] w-full max-w-md h-[460px] object-cover shadow-2xl border-4 border-white"
          />
        </div>
      </section>

      {/* Diferenciais / Benefícios */}
      <section className="px-6 py-24 bg-gradient-to-b from-secondary/20 via-secondary/40 to-secondary/20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-primary-dark font-semibold mb-3 block">
            Por que nos escolher
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-800">
            Cuidar de você é o que fazemos de melhor
          </h2>
          <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
            Mais do que procedimentos rápidos, entregamos rituais de autocuidado planejados exclusivamente para as suas necessidades.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {beneficios.map((item) => (
            <div 
              key={item.titulo} 
              className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/60 flex items-center justify-center text-primary-dark mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icone size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl text-neutral-800 mb-3">{item.titulo}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary-dark font-semibold mb-3 block">
              Especialidades
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-800">
              Alguns dos nossos serviços
            </h2>
            <p className="mt-2 text-neutral-600 max-w-xl">
              Do design de sobrancelhas impecável à revitalização da estética facial, descubra os procedimentos mais amados do studio.
            </p>
          </div>
          <Link
            to="/servicos"
            className="hidden md:inline-flex items-center text-primary-dark font-medium hover:underline underline-offset-8"
          >
            Ver todos os serviços &rarr;
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicosDestaque.map((servico) => (
            <CardServico key={servico.id} servico={servico} />
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            to="/servicos"
            className="inline-block border border-primary-dark text-primary-dark px-8 py-3.5 rounded-full font-medium hover:bg-primary-dark hover:text-white transition"
          >
            Ver todos os serviços
          </Link>
        </div>
      </section>

      {/* Conheça o espaço / Sobre */}
      <section className="px-6 py-24 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={mayra}
              alt="Mayra Batistela"
              className="rounded-3xl w-full h-80 object-cover object-top shadow-md translate-y-6"
            />
            <img
              src={MayraSobre}
              alt="Studio Mayra Batistela"
              className="rounded-3xl w-full h-80 object-cover object-top shadow-md -translate-y-6"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-primary-dark font-semibold block">
              Sobre a profissional
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-800 leading-tight">
              Prazer, sou a Mayra Batistela
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Esteticista e designer de sobrancelhas apaixonada por transformar olhares e elevar a autoconfiança de cada mulher. Acredito que o verdadeiro cuidado vai muito além da estética: é sobre criar um refúgio seguro para você desacelerar.
            </p>
            <div className="pt-2">
              <Link
                to="/sobre"
                className="inline-block bg-primary-dark text-white px-8 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition duration-200"
              >
                Conhecer a história completa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Elegante */}
      <section className="relative px-6 py-28 text-center overflow-hidden bg-gradient-to-b from-transparent to-secondary/30">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="w-12 h-12 mx-auto rounded-full bg-secondary flex items-center justify-center text-primary-dark shadow-sm mb-2">
            <FaHeart size={20} />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-800 tracking-tight">
            Desperte sua autoestima
          </h2>
          <p className="text-neutral-600 text-lg max-w-lg mx-auto leading-relaxed">
            Reserve um momento só seu. Venha viver uma experiência de autocuidado inesquecível no Studio Mayra Batistela.
          </p>
          <div className="pt-4">
            <Link
              to="/agendar"
              className="inline-block bg-primary-dark text-white px-10 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-200"
            >
              Agendar meu horário agora
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const beneficios = [
  {
    icone: FaHandsHelping,
    titulo: "Atendimento exclusivo",
    descricao: "Cada cliente é única, e cada procedimento é adaptado ao seu perfil.",
  },
  {
    icone: FaCertificate,
    titulo: "Profissional qualificada",
    descricao: "Constantemente atualizada com as melhores técnicas do mercado.",
  },
  {
    icone: FaLeaf,
    titulo: "Produtos selecionados",
    descricao: "Utilizamos apenas marcas de alto padrão para resultados impecáveis.",
  },
  {
    icone: FaHeart,
    titulo: "Ambiente acolhedor",
    descricao: "Um espaço intimista e relaxante feito para o seu bem-estar.",
  },
];

export default Home;