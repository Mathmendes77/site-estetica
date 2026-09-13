import { Link, useLocation } from "react-router-dom";

function Confirmacao() {
  const location = useLocation();
  const dados = location.state;

  // Se alguém acessar essa página direto sem passar pelo fluxo ela evita erro
  if (!dados) {
    return (
      <main className="w-full pt-32 pb-20 px-6 text-center bg-neutral-950 text-neutral-100 min-h-[70vh] flex flex-col items-center justify-center">
        <p className="text-neutral-400 mb-4">Nenhum agendamento encontrado.</p>
        <Link to="/agendar" className="text-[#EEBBBB] underline hover:text-[#e8aaaa]">
          Voltar para agendar
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full pt-32 pb-20 px-6 bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full mx-auto text-center">
        <div className="w-16 h-16 bg-[#EEBBBB] text-neutral-950 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-[0_0_20px_rgba(238,187,187,0.2)]">
          ✓
        </div>
        <h1 className="font-display text-3xl font-semibold mb-3 text-white">
          Solicitação enviada!
        </h1>
        <p className="text-neutral-400 mb-8">
          Você receberá a confirmação pelo WhatsApp em breve.
        </p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 text-left text-sm mb-8 space-y-2">
          <p className="text-white">
            <strong className="text-[#EEBBBB]">Serviço:</strong> {dados.servicoSelecionado?.nome}
          </p>
          <p className="text-white">
            <strong className="text-[#EEBBBB]">Data:</strong> {dados.data}
          </p>
          <p className="text-white">
            <strong className="text-[#EEBBBB]">Horário:</strong> {dados.hora}
          </p>
          <p className="text-white">
            <strong className="text-[#EEBBBB]">Nome:</strong> {dados.nome}
          </p>
          <p className="text-white">
            <strong className="text-[#EEBBBB]">WhatsApp:</strong> {dados.telefone}
          </p>
        </div>

        <Link
          to="/"
          className="inline-block bg-[#EEBBBB] text-neutral-950 px-8 py-3 rounded-full font-semibold transition duration-200 hover:bg-[#e8aaaa] hover:shadow-[0_0_20px_rgba(238,187,187,0.2)]"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}

export default Confirmacao;