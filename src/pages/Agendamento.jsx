import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useServicos } from "../hooks/UseServicos";
import { supabase } from "../services/SupaBaseCliente";

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
  const location = useLocation();
  const { servicos, carregando } = useServicos();

  // Se veio um serviço pré-selecionado da página de Serviços, já começa na Etapa 2
  const servicoPreSelecionado = location.state?.servicoPreSelecionado;

  const [etapa, setEtapa] = useState(servicoPreSelecionado ? 2 : 1);
  const [servicoSelecionado, setServicoSelecionado] = useState(
    servicoPreSelecionado || null
  );
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [erroEnvio, setErroEnvio] = useState(null);
  const [horariosOcupados, setHorariosOcupados] = useState([]);
  const [carregandoHorarios, setCarregandoHorarios] = useState(false);

  const categorias = [...new Set(servicos.map((s) => s.categoria))];

  // Sempre que a data mudar, busca os horários já ocupados nesse dia
  useEffect(() => {
    if (!data) {
      setHorariosOcupados([]);
      return;
    }

    async function buscarHorariosOcupados() {
      setCarregandoHorarios(true);
      const { data: ocupados, error } = await supabase.rpc(
        "horarios_ocupados",
        { dia: data }
      );

      if (!error && ocupados) {
        // O Supabase retorna hora como "15:00:00", normalizamos pra "15:00"
        setHorariosOcupados(ocupados.map((o) => o.hora.slice(0, 5)));
      }

      setCarregandoHorarios(false);
    }

    buscarHorariosOcupados();
  }, [data]);

  // Se o horário escolhido ficou ocupado (ex: cliente mudou a data depois de escolher), desmarca
  useEffect(() => {
    if (hora && horariosOcupados.includes(hora)) {
      setHora("");
    }
  }, [horariosOcupados, hora]);

  async function confirmarAgendamento() {
    setEnviando(true);
    setErroEnvio(null);

    const { error } = await supabase.from("appointments").insert({
      service_id: servicoSelecionado.id,
      nome_cliente: nome,
      telefone: telefone,
      data: data,
      hora: hora,
    });

    setEnviando(false);

    if (error) {
      if (error.code === "23505") {
        setErroEnvio(
          "Esse horário acabou de ser reservado por outra pessoa. Escolha outro horário."
        );
        setEtapa(2);
      } else {
        setErroEnvio(
          "Não foi possível confirmar o agendamento. Tente novamente."
        );
      }
      return;
    }

    navigate("/agendar/confirmacao", {
      state: { servicoSelecionado, data, hora, nome, telefone },
    });
  }

  return (
    <main className="pt-28 pb-16 px-6 max-w-2xl mx-auto">
      {/* Indicador de progresso */}
      <p className="text-center text-sm text-neutral-500 mb-8">Passo {etapa} de 3</p>

      {/* Etapa 1 — Escolher serviço */}
      {etapa === 1 && (
        <div>
          <h1 className="font-display text-3xl font-semibold text-center mb-8 text-neutral-800">
            Escolha o serviço
          </h1>

          {carregando && (
            <p className="text-center text-neutral-500 py-10">Carregando serviços...</p>
          )}

          {!carregando &&
            categorias.map((categoria) => (
              <div key={categoria} className="mb-8">
                <h2 className="font-display text-xl font-semibold text-primary-dark mb-4">
                  {categoria}
                </h2>

                <div className="space-y-4">
                  {servicos
                    .filter((s) => s.categoria === categoria)
                    .map((servico) => (
                      <button
                        key={servico.id}
                        onClick={() => setServicoSelecionado(servico)}
                        className={`w-full flex items-center gap-5 text-left p-5 rounded-2xl border transition duration-200 hover:shadow-[0_0_30px_-10px_rgba(238,187,187,0.8)] hover:-translate-y-0.5 ${
                          servicoSelecionado?.id === servico.id
                            ? "border-primary-dark bg-secondary shadow-[0_0_25px_-8px_rgba(238,187,187,0.7)]"
                            : "border-neutral-200"
                        }`}
                      >
                        <img
                          src={servico.foto}
                          alt={servico.nome}
                          className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-lg text-neutral-800">{servico.nome}</p>
                          <p className="text-sm text-neutral-600 mt-1">
                            {servico.descricao}
                          </p>
                          <p className="text-sm font-medium text-primary-dark mt-2">
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
            className="mt-4 w-full bg-primary-dark text-white py-3.5 rounded-full font-medium transition duration-200 hover:bg-neutral-900 hover:shadow-lg hover:scale-[1.01] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-primary-dark"
          >
            Próximo
          </button>
        </div>
      )}

      {/* Etapa 2 — Escolher data e horário */}
      {etapa === 2 && (
        <div>
          <h1 className="font-display text-3xl font-semibold text-center mb-8 text-neutral-800">
            Escolha data e horário
          </h1>

          <div className="flex items-center gap-3 bg-secondary rounded-xl p-3 mb-6">
            <img
              src={servicoSelecionado?.foto}
              alt={servicoSelecionado?.nome}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <p className="font-medium text-sm text-neutral-800">{servicoSelecionado?.nome}</p>
          </div>

          <label className="block mb-2 font-medium text-neutral-700">Data</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full border border-neutral-300 rounded-xl p-3 mb-6 text-neutral-800 focus:outline-none focus:border-primary-dark"
          />

          <label className="block mb-2 font-medium text-neutral-700">Horário</label>

          {carregandoHorarios && (
            <p className="text-sm text-neutral-500 mb-3">Verificando horários disponíveis...</p>
          )}

          <div className="grid grid-cols-4 gap-3">
            {horariosDisponiveis.map((h) => {
              const ocupado = horariosOcupados.includes(h);
              return (
                <button
                  key={h}
                  disabled={ocupado}
                  onClick={() => setHora(h)}
                  className={`py-2 rounded-lg border transition ${
                    ocupado
                      ? "border-neutral-200 text-neutral-300 line-through cursor-not-allowed bg-neutral-50"
                      : hora === h
                      ? "border-primary-dark bg-secondary font-medium text-neutral-900"
                      : "border-neutral-200 text-neutral-700 hover:border-primary-dark"
                  }`}
                >
                  {h}
                </button>
              );
            })}
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setEtapa(1)}
              className="flex-1 border border-neutral-300 py-3 rounded-full font-medium text-neutral-700 hover:bg-neutral-50 transition duration-200"
            >
              Voltar
            </button>
            <button
              disabled={!data || !hora}
              onClick={() => setEtapa(3)}
              className="flex-1 bg-primary-dark text-white py-3 rounded-full font-medium transition duration-200 hover:bg-neutral-900 hover:shadow-lg hover:scale-[1.01] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-primary-dark"
            >
              Próximo
            </button>
          </div>
        </div>
      )}

      {/* Etapa 3 — Dados da cliente + confirmação */}
      {etapa === 3 && (
        <div>
          <h1 className="font-display text-3xl font-semibold text-center mb-8 text-neutral-800">
            Seus dados
          </h1>

          <label className="block mb-2 font-medium text-neutral-700">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border border-neutral-300 rounded-xl p-3 mb-4 text-neutral-800 focus:outline-none focus:border-primary-dark"
            placeholder="Seu nome completo"
          />

          <label className="block mb-2 font-medium text-neutral-700">WhatsApp</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full border border-neutral-300 rounded-xl p-3 mb-6 text-neutral-800 focus:outline-none focus:border-primary-dark"
            placeholder="(15) 90000-0000"
          />

          <div className="flex items-center gap-3 bg-secondary rounded-xl p-4 mb-6 text-sm text-neutral-700">
            <img
              src={servicoSelecionado?.foto}
              alt={servicoSelecionado?.nome}
              className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <p className="text-neutral-800">
                <strong>Serviço:</strong> {servicoSelecionado?.nome}
              </p>
              <p className="text-neutral-800">
                <strong>Data:</strong> {data}
              </p>
              <p className="text-neutral-800">
                <strong>Horário:</strong> {hora}
              </p>
            </div>
          </div>

          {erroEnvio && (
            <p className="text-red-500 text-sm mb-4 text-center">{erroEnvio}</p>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setEtapa(2)}
              className="flex-1 border border-neutral-300 py-3 rounded-full font-medium text-neutral-700 hover:bg-neutral-50 transition duration-200"
            >
              Voltar
            </button>
            <button
              disabled={!nome || !telefone || enviando}
              onClick={confirmarAgendamento}
              className="flex-1 bg-primary-dark text-white py-3 rounded-full font-medium transition duration-200 hover:bg-neutral-900 hover:shadow-lg hover:scale-[1.01] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-primary-dark"
            >
              {enviando ? "Enviando..." : "Confirmar agendamento"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Agendamento;