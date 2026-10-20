const features = [
  {
    icon: '⚙️',
    title: 'Automação sem código',
    description:
      'Monte fluxos arrastando blocos. Regras, aprovações e notificações funcionam no mesmo lugar.',
  },
  {
    icon: '🔗',
    title: 'Integrações nativas',
    description:
      'Conecte CRM, ERP, planilhas e APIs em minutos com mais de 80 conectores prontos.',
  },
  {
    icon: '📊',
    title: 'Relatórios em tempo real',
    description:
      'Dashboards que se atualizam sozinhos — sem exportar CSV nem montar planilha no fim do mês.',
  },
  {
    icon: '🤖',
    title: 'Assistente com IA',
    description:
      'Pergunte em linguagem natural e receba a análise com o contexto dos seus dados.',
  },
  {
    icon: '🔐',
    title: 'Segurança de verdade',
    description:
      'Criptografia em trânsito e repouso, logs de auditoria e controle de permissões por time.',
  },
  {
    icon: '⚡',
    title: 'Implantação rápida',
    description:
      'Onboarding guiado e templates por segmento. Primeiro fluxo rodando no mesmo dia.',
  },
]

export default function Features() {
  return (
    <section id="recursos" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="pill">Recursos</span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
            Tudo que seu time precisa para{' '}
            <span className="text-gradient">trabalhar no fluxo</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Uma plataforma enxuta, feita para tirar o trabalho repetitivo do
            caminho e deixar as pessoas focadas no que gera valor.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="card group hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-emerald-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl transition-colors group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10">
                <span aria-hidden="true">{feature.icon}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
