import { useState, useEffect } from "react";
import { supabase } from "../services/SupaBaseCliente";
import { fotosPorNome } from "../data/fotosServicos";

export function useServicos() {
  const [servicos, setServicos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscar() {
      const { data, error } = await supabase.from("services").select("*");

      if (error) {
        setErro(error.message);
      } else {
        const comFotos = data.map((servico) => ({
          ...servico,
          foto: fotosPorNome[servico.nome] || null,
        }));
        setServicos(comFotos);
      }
      setCarregando(false);
    }

    buscar();
  }, []);

  return { servicos, carregando, erro };
}