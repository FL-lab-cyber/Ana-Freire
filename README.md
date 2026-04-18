export default function HomePage() {
  return (
    <main className="bg-white text-neutral-900">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-[0.2em] uppercase text-sm">
            Ana Freire
          </a>

          <nav className="hidden md:flex gap-6 text-sm text-white/90">
            <a href="#sobre" className="hover:text-white transition">Sobre</a>
            <a href="#abordagem" className="hover:text-white transition">Abordagem</a>
            <a href="#servicos" className="hover:text-white transition">Serviços</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#contacto" className="hover:text-white transition">Contacto</a>
          </nav>

          <a
            href="#contacto"
            className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/25 transition"
          >
            Marcar consulta
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,30,40,0.45), rgba(20,30,40,0.35)), url('/hero-mar.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-end">

            <div className="text-white max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">
                Bem-estar • equilíbrio • acompanhamento personalizado
              </p>

              <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
                Ana Freire
              </h1>

              <p className="mt-6 text-lg md:text-xl leading-8 text-white/90 max-w-xl">
                Um espaço de escuta, clareza e transformação, pensado para apoiar pacientes e possíveis clientes com proximidade, sensibilidade e confiança.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:scale-[1.02] transition"
                >
                  Marcar consulta
                </a>

                <a
                  href="#sobre"
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Ler biografia
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-md p-6 text-white shadow-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                Contacto direto
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Agende o seu primeiro contacto
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/85">
                Atendimento com uma abordagem humana, personalizada e focada nas suas necessidades.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div className="rounded-2xl bg-white/10 p-4">
                  <span className="block text-white/70">Telefone</span>
                  <a href="tel:9141121438" className="block mt-1 font-medium text-white">
                    9141121438
                  </a>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <span className="block text-white/70">Disponibilidade</span>
                  <span className="block mt-1 font-medium text-white">Por marcação</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-[#f8f6f2] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">

          <div>
            <img
              src="/ana-freire.jpg"
              alt="Ana Freire"
              className="w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Biografia
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-semibold">
              Sobre Ana Freire
            </h2>

            <div className="mt-6 space-y-5 text-base md:text-lg leading-8 text-neutral-700">
              <p>
                Aqui entra a biografia completa de Ana Freire. Substitui este texto pela biografia real.
              </p>
              <p>
                Deve transmitir confiança, proximidade e profissionalismo.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ABORDAGEM */}
      <section id="abordagem" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Abordagem
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-semibold">
            Um acompanhamento centrado na pessoa
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            Cada pessoa é única. O acompanhamento é personalizado, respeitando o ritmo individual e promovendo bem-estar, clareza e transformação.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-[#f8f6f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Serviços
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-semibold">
            Como posso ajudar
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Acompanhamento individual</h3>
              <p className="mt-4 text-neutral-700">
                Sessões focadas no bem-estar e desenvolvimento pessoal.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Momentos de mudança</h3>
              <p className="mt-4 text-neutral-700">
                Apoio em fases difíceis ou decisões importantes.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Desenvolvimento pessoal</h3>
              <p className="mt-4 text-neutral-700">
                Crescimento, equilíbrio e clareza interior.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-semibold">
            Perguntas frequentes
          </h2>

          <div className="mt-10 space-y-6">

            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold">Como marcar?</h3>
              <p className="mt-2 text-neutral-700">
                Através do telefone indicado.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold">É por marcação?</h3>
              <p className="mt-2 text-neutral-700">
                Sim, atendimento por marcação.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-[#e9efe9] text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-10">

          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Contacto
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-semibold">
            Marque o seu primeiro contacto
          </h2>

          <div className="mt-10 bg-white inline-block px-10 py-8 rounded-[2rem] shadow-md">
            <p className="text-neutral-500">Telefone</p>
            <a href="tel:9141121438" className="text-3xl font-semibold block mt-2">
              9141121438
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-white py-10 text-center">
        <p className="text-sm text-white/70">
          © Ana Freire. Todos os direitos reservados.
        </p>
      </footer>

    </main>
  );
}
