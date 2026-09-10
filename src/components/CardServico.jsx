import { Link } from "react-router-dom";

function CardServico({ servico }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-5 shadow-[0_0_25px_-10px_rgba(238,187,187,0.15)] hover:shadow-[0_0_35px_-8px_rgba(238,187,187,0.3)] hover:border-[#EEBBBB]/50 hover:-translate-y-1 transition duration-200 flex flex-col h-full">
      <img
        src={servico.foto}
        alt={servico.nome}
        className="w-full h-48 object-cover rounded-2xl mb-5"
      />
      <h3 className="font-semibold text-lg text-white">{servico.nome}</h3>
      <p className="text-neutral-400 text-sm mt-2 mb-6 flex-1">
        {servico.descricao}
      </p>
      <Link
        to="/agendar"
        state={{ servicoPreSelecionado: servico }}
        className="block text-center bg-[#EEBBBB] text-neutral-950 rounded-full py-3 font-semibold hover:bg-[#e8aaaa] hover:shadow-[0_0_20px_rgba(238,187,187,0.3)] hover:scale-[1.02] transition duration-200"
      >
        Agendar
      </Link>
    </div>
  );
}

export default CardServico;