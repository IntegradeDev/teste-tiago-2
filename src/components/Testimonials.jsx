const testimonials = [
  {
    quote:
      'Em três semanas o time parou de perder tempo consolidando planilha. Hoje a reunião de segunda começa com o painel já pronto.',
    name: 'Marina Duarte',
    role: 'Head de Operações · Veltra',
    initials: 'MD',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    quote:
      'O que mais me surpreendeu foi a adoção. Time não-técnico criou os próprios fluxos no primeiro dia, sem depender de TI.',
    name: 'Rafael Nogueira',
    role: 'Diretor Comercial · Kords',
    initials: 'RN',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    quote:
      'Reduzimos 38% do retrabalho em processos de aprovação. O ganho apareceu no caixa antes do fim do trimestre.',
    name: 'Camila Prado',
    role: 'COO · Simpla',
    initials: 'CP',
    accent: 'from-violet-400 to-fuchsia-500',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[110px]" />

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="pill">Depoimentos</span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
            Quem usa, <span className="text-gradient">recomenda</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Mais de 2.400 times já reorganizaram a operação com o NexaFlow.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="card flex h-full flex-col hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="flex gap-1 text-sm text-amber-400" aria-label="5 de 5 estrelas">
                {[0, 1, 2, 3, 4].map((star) => (
                  <span key={star} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                “{item.quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} text-xs font-bold text-slate-950`}
                >
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {item.name}
                  </span>
                  <span className="block text-xs text-slate-500">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
