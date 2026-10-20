import React from 'react';

export default function CTA() {
  return (
    <section id="cta" className="px-6 pb-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-600/30 via-slate-900 to-cyan-500/20 px-8 py-14 text-center sm:px-14">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-[100px]" />

        <div className="relative">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Pronto para organizar seu próximo projeto?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">
            Crie sua conta gratuita e monte o primeiro quadro em menos de dois minutos.
            Sem cartão de crédito, sem compromisso.
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Criar conta
            </button>
          </form>

          <p className="mt-4 text-xs text-slate-400">
            14 dias de teste no plano Pro · Suporte em português
          </p>
        </div>
      </div>
    </section>
  );
}
