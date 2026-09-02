import { useRef } from "react";
import CardServico from "./CardServico";

function CarrosselServicos({ servicos }) {
  const scrollRef = useRef(null);

  function rolar(direcao) {
    const largura = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: direcao === "direita" ? largura * 0.8 : -largura * 0.8,
      behavior: "smooth",
    });
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <button
        onClick={() => rolar("esquerda")}
        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-secondary transition"
      >
        ‹
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {servicos.map((servico) => (
          <div
            key={servico.id}
            className="snap-start shrink-0 w-[85%] sm:w-[46%] lg:w-[23%]"
          >
            <CardServico servico={servico} />
          </div>
        ))}
      </div>

      <button
        onClick={() => rolar("direita")}
        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-secondary transition"
      >
        ›
      </button>
    </div>
  );
}

export default CarrosselServicos;