
const liveServices = [
  {
    title: "Tamasha TV",
    subtitle: "Official live sports & entertainment",
    label: "TAMASHA",
    href: "https://tamashaweb.com/",
  },
  {
    title: "Live Match Updates",
    subtitle: "Match schedules, scores & updates",
    label: "LIVE UPDATES",
    href: "https://www.espncricinfo.com/",
  },
  {
    title: "Official Sports Channels",
    subtitle: "Find authorized live match coverage",
    label: "SPORTS",
    href: "https://www.pcb.com.pk/",
  },
];

function AdSlot({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      aria-label="Advertisement"
      className={`flex min-h-[90px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white p-3 text-center ${className}`}
    >
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
          Advertisement
        </p>
        <p className="mt-1 text-xs text-slate-500">{label}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main
      dir="ltr"
      className="min-h-screen bg-[#f5f7fb] text-slate-900"
    >
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white">
              ▶
            </span>
            <span className="text-lg font-bold tracking-tight">
              Live<span className="text-emerald-600">Pakistan</span>
            </span>
          </a>

          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
            Pakistan Sports Hub
          </span>
        </div>
      </header>

      {/* Top advertisement: desktop and mobile */}
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <AdSlot label="Top banner" />
      </div>

      {/* Main layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[160px_minmax(0,1fr)_160px]">

        {/* Left advertisement: desktop only */}
        <aside className="hidden lg:block">
          <div className="sticky top-5">
            <AdSlot
              label="Left sidebar"
              className="min-h-[300px]"
            />
          </div>
        </aside>

        {/* Main content */}
        <section className="min-w-0">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
            <div className="mx-auto max-w-xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                MADE FOR PAKISTAN
              </span>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Live Sports, <span className="text-emerald-600">One Place</span>
              </h1>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                Cricket ho ya koi aur match, apni pasandeeda
                sports service yahan se explore karein.
                Official links, match updates aur sports info
                — sab ek simple page par.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-lg space-y-3">
              {liveServices.map((service, index) => (
                <a
                  key={service.title}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:bg-emerald-50/50"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg font-bold text-emerald-700">
                    {index === 0 ? "▶" : index === 1 ? "↗" : "🏏"}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500 sm:text-sm">
                      {service.subtitle}
                    </span>
                  </span>

                  <span className="shrink-0 text-xl text-emerald-600 transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-6 text-center text-xs leading-5 text-slate-400">
              Broadcast availability aur rights relevant
              service ke rules par depend karte hain.
            </p>
          </div>

          {/* Content-area advertisement */}
          <div className="mt-5">
            <AdSlot label="Content banner" />
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="font-bold">Pakistan Sports Updates</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Match schedules, official broadcast information
              aur sports updates ke liye apni pasandeeda
              services visit karein.
            </p>
          </div>
        </section>

        {/* Right advertisement: desktop only */}
        <aside className="hidden lg:block">
          <div className="sticky top-5">
            <AdSlot
              label="Right sidebar"
              className="min-h-[300px]"
            />
          </div>
        </aside>
      </div>

      {/* Bottom advertisement: desktop and mobile */}
      <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
        <AdSlot label="Bottom banner" />
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-sm font-semibold">
            Live<span className="text-emerald-600">Pakistan</span>
          </p>

          <p className="text-xs leading-5 text-slate-500">
            Independent sports links directory. Not affiliated
            with the listed services.
          </p>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} LivePakistan
          </p>
        </div>
      </footer>
    </main>
  );
}
