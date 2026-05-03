export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          E-commerce Testing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Test Checkout Forms Under{' '}
          <span className="text-[#58a6ff]">Real User Stress</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Simulate hesitation, typos, mobile switches, and rage-clicks on your checkout forms.
          Discover exactly where users abandon — before they do it for real.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Testing — $25/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[['Hesitation Sim', 'Replays real pause patterns'], ['Typo Injection', 'Stress-tests error recovery'], ['Mobile Switch', 'Simulates device changes']].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$25</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited stress simulations',
              'Puppeteer-powered browser automation',
              'Hesitation, typo & mobile scenarios',
              'Form completion rate analytics',
              'Exportable session reports',
              'Email support'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the stress simulation work?',
              a: 'We use Puppeteer to automate a real browser session on your checkout form, injecting realistic behaviors like random pauses, deliberate typos, field corrections, and mid-session device-switch patterns based on recorded real-user data.'
            },
            {
              q: 'Do I need to install anything on my site?',
              a: 'No. You provide your checkout URL and we run the simulations externally. There is nothing to install — just point us at your form and we handle the rest.'
            },
            {
              q: 'What kind of analytics do I get?',
              a: 'You get per-scenario completion rates, drop-off field identification, time-on-field heatmaps, and exportable session recordings so you can replay exactly what the simulated user experienced.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        © {new Date().getFullYear()} Browser Form Stress Detector. All rights reserved.
      </footer>
    </main>
  )
}
