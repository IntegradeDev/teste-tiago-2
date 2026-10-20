import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-300">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />

        <section className="relative py-8">
          <div className="container-page">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 via-surface to-surface px-6 py-14 text-center sm:px-12">
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-[90px]" />
              <div className="relative">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Pronto para tirar o manual do caminho?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  Crie sua conta em minutos, conecte suas ferramentas e veja o
                  primeiro fluxo rodando hoje mesmo.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="#planos" className="btn-primary">
                    Começar teste grátis
                    <span aria-hidden="true">→</span>
                  </a>
                  <a href="#recursos" className="btn-ghost">
                    Falar com especialista
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
