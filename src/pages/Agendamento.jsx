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

const REGEX_TELEFONE = /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/;

function Agendamento() {
  const navigate = useNavigate();
  const location = useLocation();
  const { servicos, carregando } = useServicos();

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

  const telefoneValido = REGEX_TELEFONE.test(telefone.trim());

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
        setHorariosOcupados(ocupados.map((o) => o.hora.slice(0, 5)));
      }

      setCarregandoHorarios(false);
    }

    buscarHorariosOcupados();
  }, [data]);

  useEffect(() => {
    if (hora && horariosOcupados.includes(hora)) {
      setHora("");
    }
  }, [horariosOcupados, hora]);

  async function confirmarAgendamento() {
    if (!telefoneValido) {
      setErroEnvio("Digite um telefone válido, com DDD. Ex: (15) 99186-7827");
      return;
    }

    setEnviando(true);
    setErroEnvio(null);

    const { error } = await supabase.from("appointments").insert({
      service_id: servicoSelecionado.id,
      nome_cliente: nome,
      telefone: telefone.trim(),
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
      } else if (error.code === "23514") {
        setErroEnvio("Digite um telefone válido, com DDD. Ex: (15) 99186-7827");
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
    <main className="w-full pt-28 pb-16 px-6 bg-neutral-950 text-neutral-100 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Indicador de progresso */}
        <p className="text-center text-sm text-neutral-400 mb-8">Passo {etapa} de 3</p>

        {/* Etapa 1 — Escolher serviço */}
        {etapa === 1 && (
          <div>
            <h1 className="font-display text-3xl font-semibold text-center mb-8 text-white">
              Escolha o serviço
            </h1>

            {carregando && (
              <p className="text-center text-neutral-400 py-10">Carregando serviços...</p>
            )}

            {!carregando &&
              categorias.map((categoria) => (
                <div key={categoria} className="mb-8">
                  <h2 className="font-display text-xl font-semibold text-[#EEBBBB] mb-4">
                    {categoria}
                  </h2>

                  <div className="space-y-4">
                    {servicos
                      .filter((s) => s.categoria === categoria)
                      .map((servico) => (
                        <button
                          key={servico.id}
                          type="button"
                          onClick={() => setServicoSelecionado(servico)}
                          className={`w-full flex items-center gap-5 text-left p-5 rounded-2xl border transition duration-200 ${
                            servicoSelecionado?.id === servico.id
                              ? "border-[#EEBBBB] bg-neutral-900 shadow-[0_0_25px_-8px_rgba(238,187,187,0.3)]"
                              : "border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900"
                          }`}
                        >
                          <img
                            src={servico.foto}
                            alt={servico.nome}
                            className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
                          />
                          <div className="flex-1">
                            <p className="font-semibold text-lg text-white">{servico.nome}</p>
                            <p className="text-sm text-neutral-400 mt-1">
                              {servico.descricao}
                            </p>
                            <p className="text-sm font-medium text-[#EEBBBB] mt-2">
                              {servico.duracao} • {servico.preco}
                            </p>
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
              ))}

            <button
              type="button"
              disabled={!servicoSelecionado}
              onClick={() => setEtapa(2)}
              className="mt-4 w-full bg-[#EEBBBB] text-neutral-950 font-semibold py-3.5 rounded-full transition duration-200 hover:bg-[#e8aaaa] hover:shadow-[0_0_20px_rgba(238,187,187,0.2)] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Próximo
            </button>
          </div>
        )}

        {/* Etapa 2 — Escolher data e horário */}
        {etapa === 2 && (
          <div>
            <h1 className="font-display text-3xl font-semibold text-center mb-8 text-white">
              Escolha data e horário
            </h1>

            <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-3 mb-6">
              <img
                src={servicoSelecionado?.foto}
                alt={servicoSelecionado?.nome}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <p className="font-medium text-sm text-white">{servicoSelecionado?.nome}</p>
            </div>

            <label className="block mb-2 font-medium text-neutral-300">Data</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full border border-neutral-800 bg-neutral-900 rounded-xl p-3 mb-6 text-white focus:outline-none focus:border-[#EEBBBB] [color-scheme:dark]"
            />

            <label className="block mb-2 font-medium text-neutral-300">Horário</label>

            {carregandoHorarios && (
              <p className="text-sm text-neutral-400 mb-3">Verificando horários disponíveis...</p>
            )}

            <div className="grid grid-cols-4 gap-3">
              {horariosDisponiveis.map((h) => {
                const ocupado = horariosOcupados.includes(h);
                return (
                  <button
                    key={h}
                    type="button"
                    disabled={ocupado}
                    onClick={() => setHora(h)}
                    className={`py-2 rounded-lg border transition ${
                      ocupado
                        ? "border-neutral-800 text-neutral-600 line-through cursor-not-allowed bg-neutral-900/40"
                        : hora === h
                        ? "border-[#EEBBBB] bg-neutral-900 font-medium text-[#EEBBBB] shadow-[0_0_15px_rgba(238,187,187,0.15)]"
                        : "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-[#EEBBBB]"
                    }`}
                  >
                    {h}
                  </button>
                );
              })}
            </div>

            <div className="flex gap-3 mt-8">
              <button
                type="button"
                onClick={() => setEtapa(1)}
                className="flex-1 border border-neutral-800 bg-neutral-900 py-3 rounded-full font-medium text-neutral-300 hover:bg-neutral-800 transition duration-200"
              >
                Voltar
              </button>
              <button
                type="button"
                disabled={!data || !hora}
                onClick={() => setEtapa(3)}
                className="flex-1 bg-[#EEBBBB] text-neutral-950 font-semibold py-3 rounded-full transition duration-200 hover:bg-[#e8aaaa] hover:shadow-[0_0_20px_rgba(238,187,187,0.2)] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* Etapa 3 — Dados da cliente + confirmação */}
        {etapa === 3 && (
          <div>
            <h1 className="font-display text-3xl font-semibold text-center mb-8 text-white">
              Seus dados
            </h1>

            <label className="block mb-2 font-medium text-neutral-300">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border border-neutral-800 bg-neutral-900 rounded-xl p-3 mb-4 text-white focus:outline-none focus:border-[#EEBBBB]"
              placeholder="Seu nome completo"
            />

            <label className="block mb-2 font-medium text-neutral-300">WhatsApp</label>
            <input
              type="tel"
              value={telefone}
              onChange={(e) => {
                setTelefone(e.target.value);
                if (erroEnvio) setErroEnvio(null);
              }}
              className={`w-full border rounded-xl p-3 text-white bg-neutral-900 focus:outline-none ${
                telefone && !telefoneValido
                  ? "border-red-500 focus:border-red-500"
                  : "border-neutral-800 focus:border-[#EEBBBB]"
              }`}
              placeholder="(15) 99186-7827"
            />
            {telefone && !telefoneValido && (
              <p className="text-red-400 text-xs mt-1.5">
                Formato esperado: (DDD) 9XXXX-XXXX
              </p>
            )}

            <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-4 mt-6 mb-6 text-sm text-neutral-300">
              <img
                src={servicoSelecionado?.foto}
                alt={servicoSelecionado?.nome}
                className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
              />
              <div>
                <p className="text-white">
                  <strong className="text-[#EEBBBB]">Serviço:</strong> {servicoSelecionado?.nome}
                </p>
                <p className="text-white">
                  <strong className="text-[#EEBBBB]">Data:</strong> {data}
                </p>
                <p className="text-white">
                  <strong className="text-[#EEBBBB]">Horário:</strong> {hora}
                </p>
              </div>
            </div>

            {erroEnvio && (
              <p className="text-red-400 text-sm mb-4 text-center">{erroEnvio}</p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setEtapa(2)}
                className="flex-1 border border-neutral-800 bg-neutral-900 py-3 rounded-full font-medium text-neutral-300 hover:bg-neutral-800 transition duration-200"
              >
                Voltar
              </button>
              <button
                type="button"
                disabled={!nome || !telefoneValido || enviando}
                onClick={confirmarAgendamento}
                className="flex-1 bg-[#EEBBBB] text-neutral-950 font-semibold py-3 rounded-full transition duration-200 hover:bg-[#e8aaaa] hover:shadow-[0_0_20px_rgba(238,187,187,0.2)] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {enviando ? "Enviando..." : "Confirmar agendamento"}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Agendamento;