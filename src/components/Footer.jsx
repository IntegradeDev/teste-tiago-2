const columns = [
  {
    title: 'Produto',
    links: ['Recursos', 'Integrações', 'Planos', 'Novidades'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nós', 'Carreiras', 'Blog', 'Contato'],
  },
  {
    title: 'Suporte',
    links: ['Central de ajuda', 'Documentação', 'Status', 'Comunidade'],
  },
]

const socials = [
  { label: 'LinkedIn', icon: 'in' },
  { label: 'Instagram', icon: 'ig' },
  { label: 'YouTube', icon: 'yt' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface/40">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-base font-bold text-slate-950">
                N
              </span>
              <span className="text-lg font-bold text-white">
                Nexa<span className="text-emerald-400">Flow</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Automação e dados em um só lugar para times que preferem executar a
              explicar por que não deu.
            </p>

            <div className="mt-6 flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#top"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px] font-bold uppercase text-slate-400 transition-colors hover:border-emerald-400/30 hover:text-emerald-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} NexaFlow. Página de demonstração criada para teste.
          </p>
          <div className="flex gap-6">
            <a href="#top" className="text-xs text-slate-500 transition-colors hover:text-white">
              Privacidade
            </a>
            <a href="#top" className="text-xs text-slate-500 transition-colors hover:text-white">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
