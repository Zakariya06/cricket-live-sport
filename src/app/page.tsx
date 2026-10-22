
import AdsterraFrame from "@/components/AdsterraFrame";

const sportsLinks = [
  {
    name: "Tamasha",
    description: "Sports aur entertainment ke liye.",
    category: "Sports & Entertainment",
    url: "https://tamashaweb.com/",
  },
  {
    name: "ESPN Cricinfo",
    description: "Cricket scores, match updates aur latest news.",
    category: "Cricket Scores & News",
    url: "https://www.espncricinfo.com/",
  },
  {
    name: "Pakistan Cricket Board",
    description: "Pakistan cricket ki official website aur updates.",
    category: "Official Cricket",
    url: "https://www.pcb.com.pk/",
  },
];

function AdLabel() {
  return (
    <p className="mb-2 text-center text-xs text-gray-400">
      Advertisement
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
          <a href="/" className="text-2xl font-extrabold tracking-tight">
            Live<span className="text-green-600">Pakistan</span>
          </a>

          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            Sports Directory
          </span>
        </div>
      </header>

      {/* Top Banner Ad: 320 x 50 */}
      <div className="mx-auto flex min-h-[80px] max-w-7xl items-center justify-center px-3 py-4">
        <div className="flex flex-col items-center">
          <AdLabel />
          <AdsterraFrame
            zoneKey="2a688154fdb324766e6e617b3dcb04cf"
            width={320}
            height={50}
          />
        </div>
      </div>

      {/* Page Layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-5 lg:grid-cols-[160px_minmax(0,1fr)_160px]">
        {/* Left Sidebar Ad */}
        <aside className="hidden lg:block">
          <div className="sticky top-6">
            <AdLabel />
            <AdsterraFrame
              zoneKey="94fa28deea03c35c2a5a75920a44ef21"
              width={160}
              height={300}
            />
          </div>
        </aside>

        {/* Main Content */}
        <section className="min-w-0">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-green-50 to-white px-5 py-10 sm:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
              Your Sports Link Directory
            </p>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Welcome to{" "}
              <span className="text-green-600">LivePakistan</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Cricket news, scores aur sports resources ke useful links aik
              jagah explore karein.
            </p>
          </div>

          <div className="mb-5 mt-9 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold sm:text-2xl">
              Sports & Cricket Links
            </h2>

            <span className="text-xs text-gray-500">
              Useful resources
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sportsLinks.map((item) => (
              <article
                key={item.name}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-green-700">
                  {item.category}
                </p>

                <h3 className="text-lg font-bold text-gray-900">
                  {item.name}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Visit Website
                  <span className="ml-2" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </article>
            ))}
          </div>

          {/* About Section */}
          <section className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-lg font-bold text-gray-900">
              About LivePakistan
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              LivePakistan aik sports resources directory hai jo visitors ko
              cricket scores, news aur sports-related websites tak pohanchne
              mein madad deti hai. Listed websites apne content aur services
              ko khud manage karti hain.
            </p>
          </section>

          {/* Bottom Content Ad */}
          <div className="mt-8 flex min-h-[80px] justify-center overflow-hidden py-4">
            <div className="flex flex-col items-center">
              <AdLabel />
              <AdsterraFrame
                zoneKey="2a688154fdb324766e6e617b3dcb04cf"
                width={320}
                height={50}
              />
            </div>
          </div>
        </section>

        {/* Right Sidebar Ad */}
        <aside className="hidden lg:block">
          <div className="sticky top-6">
            <AdLabel />
            <AdsterraFrame
              zoneKey="94fa28deea03c35c2a5a75920a44ef21"
              width={160}
              height={300}
            />
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-7 text-center">
          <p className="text-sm text-gray-600">
            © 2026 LivePakistan. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-gray-500">
            LivePakistan is an independent sports links directory and is not
            affiliated with the third-party websites listed above.
          </p>
        </div>
      </footer>
    </main>
  );
}
