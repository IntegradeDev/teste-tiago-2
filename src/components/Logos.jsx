import React from 'react';

const companies = ['Orbit Labs', 'Vertex', 'Nova Bank', 'Kaya', 'Loop Studio'];

export default function Logos() {
  return (
    <section className="border-y border-white/5 bg-slate-900/40 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Usado por times de produto em todo o mundo
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <span
              key={name}
              className="text-base font-semibold text-slate-500 transition hover:text-slate-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
