import { Link } from "react-router-dom";

function CardServico({ servico }) {
  return (
    <div className="bg-white rounded-[2rem] p-5 shadow-[0_0_30px_-10px_rgba(238,187,187,0.7)] hover:shadow-[0_0_45px_-8px_rgba(238,187,187,0.9)] hover:-translate-y-1 transition duration-200 flex flex-col h-full">
      <img
        src={servico.foto}
        alt={servico.nome}
        className="w-full h-48 object-cover rounded-2xl mb-5"
      />
      <h3 className="font-semibold text-lg">{servico.nome}</h3>
      <p className="text-muted text-sm mt-2 mb-6 flex-1">
        {servico.descricao}
      </p>
      <Link
  to="/agendar"
  state={{ servicoPreSelecionado: servico }}
  className="block text-center bg-primary rounded-full py-3 font-medium text-neutral-800 hover:scale-105 hover:shadow-lg transition duration-200"
>
  Agendar
</Link>
    </div>
  );
}

export default CardServico;