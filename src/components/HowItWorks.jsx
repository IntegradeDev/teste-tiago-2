import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Importe seu trabalho',
    description:
      'Cole um link de planilha ou conecte suas ferramentas. O NimbusFlow organiza tudo em quadros prontos.'
  },
  {
    number: '02',
    title: 'Convide o time',
    description:
      'Cada pessoa recebe as tarefas certas, com prazos e responsáveis claros desde o primeiro dia.'
  },
  {
    number: '03',
    title: 'Deixe o fluxo rodar',
    description:
      'Automações cuidam do operacional e os relatórios mostram exatamente onde agir.'
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Como funciona
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Do caos ao controle em três passos
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6"
            >
              <span className="text-4xl font-black text-white/10">{step.number}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
