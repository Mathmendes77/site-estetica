import { Link } from "react-router-dom";
import { FaLeaf, FaCertificate, FaHandsHelping } from "react-icons/fa";
import mayra from "../assets/mayra.png";
import MayraSobre from "../assets/MayraSobre.png";
import { servicos } from "../data/Servicos";
import CardServico from "../components/CardServico";

function Home() {
  const servicosDestaque = servicos.slice(0, 4);

  return (
    <main className="overflow-x-hidden bg-white text-neutral-800">
      {/* HERO */}
      <section className="px-6 md:px-12 pt-24 md:pt-32 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-center">
          <div className="max-w-xl">
            <p className="font-display italic text-lg text-[#EEBBBB] mb-5">
              Estética & sobrancelhas
            </p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-[4.3rem] font-bold leading-[1.06] text-neutral-800">
              Beleza que valoriza
              <span className="block font-normal italic text-[#EEBBBB] mt-1">
                quem você é.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-neutral-500 text-base md:text-lg leading-relaxed">
              Um espaço dedicado ao cuidado, à beleza natural e à autoestima,
              com atendimento personalizado e delicado.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-start gap-5">
              <Link
                to="/agendar"
                className="inline-flex items-center justify-center bg-[#EEBBBB] text-white px-8 py-4 rounded-full font-medium hover:bg-[#e8aaaa] hover:-translate-y-0.5 transition-all duration-200"
              >
                Agendar meu horário
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center px-2 py-4 text-neutral-600 font-medium border-b border-transparent hover:text-[#EEBBBB] hover:border-[#EEBBBB] transition"
              >
                Conhecer os serviços
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src={mayra}
              alt="Mayra Batistela, esteticista e designer de sobrancelhas"
              className="w-full max-w-md h-[480px] md:h-[570px] object-cover object-top border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-[58%_42%_63%_37%/48%_52%_48%_52%]"
            />
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="px-6 md:px-12 py-24 bg-[#FEFBFB]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="font-display italic text-lg text-[#EEBBBB] mb-3">
              O cuidado faz a diferença
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight text-neutral-800">
              Um atendimento pensado em você
            </h2>
            <p className="mt-4 text-neutral-500 leading-relaxed max-w-lg">
              Cada escolha é feita para proporcionar uma experiência
              tranquila, personalizada e especial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-t border-[#EEBBBB]/30">
            <div className="py-9 md:pr-10">
              <FaHandsHelping size={20} className="text-[#EEBBBB] mb-5" />
              <h3 className="font-display text-xl font-semibold text-neutral-800">
                Atendimento personalizado
              </h3>
              <p className="mt-3 text-sm text-neutral-500 leading-relaxed max-w-xs">
                Cada procedimento é adaptado às suas características e
                necessidades.
              </p>
            </div>

            <div className="py-9 md:px-10 md:border-l border-[#EEBBBB]/30">
              <FaCertificate size={20} className="text-[#EEBBBB] mb-5" />
              <h3 className="font-display text-xl font-semibold text-neutral-800">
                Técnica e experiência
              </h3>
              <p className="mt-3 text-sm text-neutral-500 leading-relaxed max-w-xs">
                Técnicas atualizadas e produtos escolhidos com atenção a cada
                detalhe.
              </p>
            </div>

            <div className="py-9 md:pl-10 md:border-l border-[#EEBBBB]/30">
              <FaLeaf size={20} className="text-[#EEBBBB] mb-5" />
              <h3 className="font-display text-xl font-semibold text-neutral-800">
                Um momento para você
              </h3>
              <p className="mt-3 text-sm text-neutral-500 leading-relaxed max-w-xs">
                Um ambiente acolhedor para você desacelerar e aproveitar o seu
                momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="px-6 md:px-12 py-24 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-display italic text-lg text-[#EEBBBB] mb-2">
                Especialidades
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-800">
                Nossos serviços
              </h2>
              <p className="mt-3 text-neutral-500 max-w-lg leading-relaxed">
                Procedimentos realizados com cuidado, técnica e atenção aos
                detalhes.
              </p>
            </div>

            <Link
              to="/servicos"
              className="hidden md:inline-block text-sm text-neutral-600 border-b border-[#EEBBBB] pb-1 hover:text-[#EEBBBB] transition"
            >
              Ver todos os serviços
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicosDestaque.map((servico) => (
              <CardServico key={servico.id} servico={servico} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/servicos"
              className="text-[#EEBBBB] font-medium border-b border-[#EEBBBB] pb-1"
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE A MAYRA */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#FEFBFB]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-[28rem] md:h-[34rem]">
            <img
              src={mayra}
              alt="Mayra Batistela"
              className="absolute left-0 top-0 w-[64%] h-[84%] object-cover object-top shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded-[55%_45%_60%_40%/50%_55%_45%_50%]"
            />
            <img
              src={MayraSobre}
              alt="Studio Mayra Batistela"
              className="absolute right-0 bottom-0 w-[59%] h-[73%] object-cover object-top shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-[6px] border-[#FEFBFB] rounded-[45%_55%_40%_60%/55%_45%_60%_40%]"
            />
          </div>

          <div className="max-w-xl">
            <p className="font-display italic text-lg text-[#EEBBBB] mb-3">
              Sobre a profissional
            </p>
            <h2 className="font-display text-3xl md:text-[2.8rem] font-bold leading-tight text-neutral-800">
              Prazer,
              <span className="block font-normal italic text-[#EEBBBB]">
                sou a Mayra.
              </span>
            </h2>
            <p className="mt-7 text-neutral-600 text-base md:text-lg leading-relaxed">
              Sou esteticista e designer de sobrancelhas, apaixonada por
              realçar a beleza natural de cada mulher.
            </p>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              Acredito que cuidar da aparência também é uma forma de cuidar de
              si. Por isso, cada atendimento é pensado para ser leve,
              acolhedor e especial.
            </p>
            <Link
              to="/sobre"
              className="inline-block mt-8 bg-[#EEBBBB] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#e8aaaa] hover:-translate-y-0.5 transition-all duration-200"
            >
              Conhecer minha história
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 md:py-32 bg-white border-t border-neutral-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display italic text-lg text-[#EEBBBB] mb-4">
            Seu momento começa aqui
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-neutral-800">
            Reserve um tempo
            <span className="block font-normal italic text-[#EEBBBB]">
              para você.
            </span>
          </h2>
          <p className="mt-5 text-neutral-500 leading-relaxed max-w-lg mx-auto">
            Permita-se desacelerar, cuidar de si e viver uma experiência
            especial no Studio Mayra Batistela.
          </p>
          <Link
            to="/agendar"
            className="inline-block mt-8 bg-[#EEBBBB] text-white px-10 py-4 rounded-full font-medium shadow-sm hover:bg-[#e8aaaa] hover:-translate-y-0.5 transition-all duration-200"
          >
            Agendar meu horário
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;