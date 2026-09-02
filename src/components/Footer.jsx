function Footer() {
  return (
    <footer className="bg-primary-dark text-white px-10 py-15 mt-10">
      <div className="max-w-6xl mx-auto grid gap-20 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-semibold mb-2">
            Studio Mayra Batistela
          </h3>
          <p className="text-white/80 text-sm">
            Estética com cuidado, precisão e carinho.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <p className="text-white/80 text-sm">WhatsApp: (15) 99999-9999</p>
          <p className="text-white/80 text-sm">Porto Feliz - SP</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Horário de atendimento</h4>
          <p className="text-white/80 text-sm">Segunda a Sexta</p>
          <p className="text-white/80 text-sm">09:00 às 18:00</p>
        </div>
      </div>

      <p className="text-center text-white/60 text-xs mt-8">
        © {new Date().getFullYear()} Studio Mayra Batistela. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;