import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { servicos } from "../data/Servicos";

const horariosDisponiveis = [
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

function Agendamento() {
  const navigate = useNavigate();
  const [etapa, setEtapa] = useState(1);

  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const categorias = [...new Set(servicos.map((s) => s.categoria))];

  function confirmarAgendamento() {
    // Por enquanto só navega pra confirmação levando os dados junto.
    // Na Fase 9, aqui entra o insert real no Supabase.
    navigate("/agendar/confirmacao", {
      state: { servicoSelecionado, data, hora, nome, telefone },
    });
  }

  return (
    <main className="pt-28 pb-16 px-6 max-w-2xl mx-auto">
      {/* Indicador de progresso */}
      <p className="text-center text-sm text-muted mb-8">Passo {etapa} de 3</p>

      {/* Etapa 1 — Escolher serviço */}
      {etapa === 1 && (
        <div>
          <h1 className="font-display text-3xl font-semibold text-center mb-8">
            Escolha o serviço
          </h1>

          {categorias.map((categoria) => (
            <div key={categoria} className="mb-8">
              <h2 className="font-display text-xl font-semibold text-primary-dark mb-4">
                {categoria}
              </h2>

              <div className="space-y-3">
                {servicos
                  .filter((s) => s.categoria === categoria)
                  .map((servico) => (
                    <button
                      key={servico.id}
                      onClick={() => setServicoSelecionado(servico)}
                      className={`w-full flex items-center gap-4 text-left p-3 rounded-2xl border transition ${
                        servicoSelecionado?.id === servico.id
                          ? "border-primary-dark bg-secondary"
                          : "border-neutral-200 hover:border-primary"
                      }`}
                    >
                      <img
                        src={servico.foto}
                        alt={servico.nome}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{servico.nome}</p>
                        <p className="text-sm text-muted mt-0.5">
                          {servico.descricao}
                        </p>
                        <p className="text-sm font-medium text-primary mt-1">
                          {servico.duracao} • {servico.preco}
                        </p>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          ))}

          <button
            disabled={!servicoSelecionado}
            onClick={() => setEtapa(2)}
            className="mt-4 w-full bg-primary-dark text-white py-3 rounded-full font-medium disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Próximo
          </button>
        </div>
      )}

      {/* Etapa 2 — Escolher data e horário */}
      {etapa === 2 && (
        <div>
          <h1 className="font-display text-3xl font-semibold text-center mb-8">
            Escolha data e horário
          </h1>

          {/* Confirma qual serviço foi escolhido, pra não perder o contexto */}
          <div className="flex items-center gap-3 bg-secondary rounded-xl p-3 mb-6">
            <img
              src={servicoSelecionado?.foto}
              alt={servicoSelecionado?.nome}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <p className="font-medium text-sm">{servicoSelecionado?.nome}</p>
          </div>

          <label className="block mb-2 font-medium">Data</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full border border-neutral-300 rounded-xl p-3 mb-6"
          />

          <label className="block mb-2 font-medium">Horário</label>
          <div className="grid grid-cols-4 gap-3">
            {horariosDisponiveis.map((h) => (
              <button
                key={h}
                onClick={() => setHora(h)}
                className={`py-2 rounded-lg border transition ${
                  hora === h
                    ? "border-primary-dark bg-secondary"
                    : "border-neutral-200 hover:border-primary"
                }`}
              >
                {h}
              </button>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setEtapa(1)}
              className="flex-1 border border-neutral-300 py-3 rounded-full font-medium"
            >
              Voltar
            </button>
            <button
              disabled={!data || !hora}
              onClick={() => setEtapa(3)}
              className="flex-1 bg-primary-dark text-white py-3 rounded-full font-medium disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Próximo
            </button>
          </div>
        </div>
      )}

      {/* Etapa 3 — Dados da cliente + confirmação */}
      {etapa === 3 && (
        <div>
          <h1 className="font-display text-3xl font-semibold text-center mb-8">
            Seus dados
          </h1>

          <label className="block mb-2 font-medium">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border border-neutral-300 rounded-xl p-3 mb-4"
            placeholder="Seu nome completo"
          />

          <label className="block mb-2 font-medium">WhatsApp</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full border border-neutral-300 rounded-xl p-3 mb-6"
            placeholder="(11) 90000-0000"
          />

          {/* Resumo antes de confirmar */}
          <div className="flex items-center gap-3 bg-secondary rounded-xl p-4 mb-6 text-sm">
            <img
              src={servicoSelecionado?.foto}
              alt={servicoSelecionado?.nome}
              className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <p>
                <strong>Serviço:</strong> {servicoSelecionado?.nome}
              </p>
              <p>
                <strong>Data:</strong> {data}
              </p>
              <p>
                <strong>Horário:</strong> {hora}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setEtapa(2)}
              className="flex-1 border border-neutral-300 py-3 rounded-full font-medium"
            >
              Voltar
            </button>
            <button
              disabled={!nome || !telefone}
              onClick={confirmarAgendamento}
              className="flex-1 bg-primary-dark text-white py-3 rounded-full font-medium disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Confirmar agendamento
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Agendamento;