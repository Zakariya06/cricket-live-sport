
import AdsterraFrame from "@/components/AdsterraFrame";

const sportsLinks = [
  {
    name: "Tamasha",
    description: "Sports aur live entertainment ke liye.",
    url: "https://tamashaweb.com/",
    category: "Sports & Entertainment",
  },
  {
    name: "ESPN Cricinfo",
    description: "Cricket scores, match updates aur news.",
    url: "https://www.espncricinfo.com/",
    category: "Cricket Scores & News",
  },
  {
    name: "Pakistan Cricket Board",
    description: "Pakistan cricket ki official website.",
    url: "https://www.pcb.com.pk/",
    category: "Official Cricket Updates",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-gray-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
          <a href="/" className="text-2xl font-extrabold tracking-tight">
            Live<span className="text-green-400">Pakistan</span>
          </a>

          <span className="rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-300">
            Sports Directory
          </span>
        </div>
      </header>

      {/* Top 320 x 50 Adsterra banner */}
      <div className="mx-auto flex min-h-[70px] max-w-7xl items-center justify-center px-2 py-3">
        <AdsterraFrame
          zoneKey="2a688154fdb324766e6e617b3dcb04cf"
          width={320}
          height={50}
        />
      </div>

      {/* Main layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[160px_minmax(0,1fr)_160px]">
        {/* Left sidebar ad - desktop only */}
        <aside className="hidden lg:block">
          <div className="sticky top-6 flex justify-center">
            <AdsterraFrame
              zoneKey="94fa28deea03c35c2a5a75920a44ef21"
              width={160}
              height={300}
            />
          </div>
        </aside>

        {/* Main content */}
        <section className="min-w-0">
          <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-950 p-6 sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              Your Sports Link Directory
            </p>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Welcome to{" "}
              <span className="text-green-400">LivePakistan</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              Cricket updates, match information aur sports resources ke liye
              useful links aik jagah explore karein.
            </p>
          </div>

          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold sm:text-2xl">
              Sports & Cricket Links
            </h2>
            <span className="text-xs text-gray-400">
              Trusted websites
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sportsLinks.map((item) => (
              <article
                key={item.name}
                className="rounded-xl border border-white/10 bg-gray-900 p-5 transition hover:border-green-400/50"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-green-400">
                  {item.category}
                </p>

                <h3 className="text-lg font-bold">{item.name}</h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-gray-950 transition hover:bg-green-400"
                >
                  Visit Website
                  <span className="ml-2" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </article>
            ))}
          </div>

          {/* Content section */}
          <section className="mt-8 rounded-xl border border-white/10 bg-gray-900 p-5">
            <h2 className="text-lg font-bold">About LivePakistan</h2>
            <p className="mt-3 text-sm leading-7 text-gray-400">
              LivePakistan aik sports resources directory hai jo visitors ko
              cricket news, scores aur sports-related websites tak pohanchne
              mein madad deti hai. Har website ka apna content aur access
              policy hota hai.
            </p>
          </section>
        </section>

        {/* Right sidebar ad - desktop only */}
        <aside className="hidden lg:block">
          <div className="sticky top-6 flex justify-center">
            <AdsterraFrame
              zoneKey="94fa28deea03c35c2a5a75920a44ef21"
              width={160}
              height={300}
            />
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t border-white/10 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 LivePakistan. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            LivePakistan is a sports links directory and is not affiliated
            with the third-party websites listed above.
          </p>
        </div>
      </footer>
    </main>
  );
}
