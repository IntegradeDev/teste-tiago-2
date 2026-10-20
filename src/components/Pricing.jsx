import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    tagline: 'Para quem está organizando a casa',
    monthly: 0,
    yearly: 0,
    highlight: false,
    cta: 'Começar grátis',
    features: [
      'Até 3 fluxos ativos',
      '2 usuários incluídos',
      'Integrações essenciais',
      'Relatórios básicos',
    ],
  },
  {
    name: 'Growth',
    tagline: 'O favorito dos times em expansão',
    monthly: 149,
    yearly: 119,
    highlight: true,
    cta: 'Testar 14 dias',
    features: [
      'Fluxos ilimitados',
      'Até 20 usuários',
      'Todas as integrações',
      'Assistente com IA',
      'Suporte prioritário',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Para operações críticas',
    monthly: 399,
    yearly: 319,
    highlight: false,
    cta: 'Falar com vendas',
    features: [
      'Usuários ilimitados',
      'SSO e auditoria avançada',
      'Ambiente dedicado',
      'SLA de 99,9%',
      'Gerente de sucesso',
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="planos" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="pill">Planos</span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
            Preço simples, <span className="text-gradient">sem surpresa</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Comece de graça e evolua quando fizer sentido. Cancele quando quiser.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                !yearly ? 'bg-white text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                yearly ? 'bg-white text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Anual
              <span className="ml-1.5 text-emerald-500">-20%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly

            return (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                  plan.highlight
                    ? 'border-emerald-400/40 bg-gradient-to-b from-emerald-500/[0.12] to-white/[0.02] shadow-2xl shadow-emerald-500/10 lg:-mt-4 lg:mb-4'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                    Mais escolhido
                  </span>
                )}

                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{plan.tagline}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    {price === 0 ? 'R$0' : `R$${price}`}
                  </span>
                  <span className="pb-1 text-xs text-slate-500">/mês</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-600">
                  {price === 0
                    ? 'Grátis para sempre'
                    : yearly
                      ? 'cobrado anualmente'
                      : 'cobrado mensalmente'}
                </p>

                <a
                  href="#planos"
                  className={`mt-6 w-full ${plan.highlight ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {plan.cta}
                </a>

                <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-0.5 text-emerald-400" aria-hidden="true">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          Todos os planos incluem atualizações contínuas e suporte em português.
        </p>
      </div>
    </section>
  )
}
