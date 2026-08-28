import { Link, useLocation } from "react-router-dom";

function Confirmacao() {
  const location = useLocation();
  const dados = location.state;

  // Se alguém acessar essa página direto, sem passar pelo fluxo, evita erro
  if (!dados) {
    return (
      <main className="pt-28 px-6 text-center">
        <p>Nenhum agendamento encontrado.</p>
        <Link to="/agendar" className="text-primary-dark underline">
          Voltar para agendar
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-16 px-6 max-w-xl mx-auto text-center">
      <div className="w-16 h-16 bg-primary-dark text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
        ✓
      </div>
      <h1 className="font-display text-3xl font-semibold mb-3">
        Solicitação enviada!
      </h1>
      <p className="text-muted mb-8">
        Você receberá a confirmação pelo WhatsApp em breve.
      </p>

      <div className="bg-secondary rounded-xl p-5 text-left text-sm mb-8">
        <p>
          <strong>Serviço:</strong> {dados.servicoSelecionado?.nome}
        </p>
        <p>
          <strong>Data:</strong> {dados.data}
        </p>
        <p>
          <strong>Horário:</strong> {dados.hora}
        </p>
        <p>
          <strong>Nome:</strong> {dados.nome}
        </p>
        <p>
          <strong>WhatsApp:</strong> {dados.telefone}
        </p>
      </div>

      <Link
        to="/"
        className="inline-block bg-primary-dark text-white px-8 py-3 rounded-full font-medium"
      >
        Voltar ao início
      </Link>
    </main>
  );
}

export default Confirmacao;
