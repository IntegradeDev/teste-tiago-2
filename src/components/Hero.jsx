const stats = [
  { value: '+2.400', label: 'times ativos' },
  { value: '38%', label: 'menos retrabalho' },
  { value: '4.9/5', label: 'satisfação' },
]

const flowSteps = [
  { title: 'Conectar fontes', detail: 'CRM, planilhas e APIs' },
  { title: 'Automatizar regras', detail: 'Sem escrever código' },
  { title: 'Receber insights', detail: 'Relatórios prontos' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-glow" />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="animate-fade-up">
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Novo — automação com IA
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Menos operação manual.
              <br />
              <span className="text-gradient">Mais resultado real.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              O NexaFlow conecta suas ferramentas, elimina tarefas repetitivas e
              entrega os números que importam — em um único painel, pronto para
              decidir.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#planos" className="btn-primary">
                Testar 14 dias grátis
                <span aria-hidden="true">→</span>
              </a>
              <a href="#recursos" className="btn-ghost">
                <span aria-hidden="true">▶</span>
                Ver como funciona
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Sem cartão de crédito • Configuração em 5 minutos
            </p>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-bold text-white sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/10 blur-2xl" />

            <div className="relative animate-float rounded-3xl border border-white/10 bg-surface/90 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Painel NexaFlow
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {flowSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-xs font-bold text-emerald-300">
                      0{index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        {step.detail}
                      </p>
                    </div>
                    <span className="ml-auto text-xs text-emerald-400">✓</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Horas economizadas</p>
                    <p className="mt-1 text-2xl font-bold text-white">126h</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                    +18%
                  </span>
                </div>
                <div className="mt-4 flex h-16 items-end gap-1.5">
                  {[35, 52, 40, 68, 58, 80, 96].map((height, index) => (
                    <span
                      key={index}
                      style={{ height: `${height}%` }}
                      className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/30 to-emerald-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
