import Link from "next/link";

const events = [
  {
    slug: "nyc-2025",
    title: "NYC 2025",
    desc: "A week in New York City, capturing the urban landscape and city life.",
    cover: null, // Placeholder for header image
  },
  {
    slug: "zoo-2022",
    title: "Zoo 2022",
    desc: "A day at the zoo, photographing wildlife and candid moments.",
    cover: null,
  },
  {
    slug: "mountains-2021",
    title: "Mountains 2021",
    desc: "Hiking and scenic views from the mountain trip.",
    cover: null,
  },
];

function EventCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-blue-900/40 bg-neutral-800 p-0 overflow-hidden shadow-md hover:shadow-lg hover:shadow-blue-400/30 transition"
    >
      <div className="w-full aspect-[4/2] bg-neutral-700 flex items-center justify-center">
        {/* Placeholder for header image */}
        <svg className="w-16 h-16 text-cyan-400 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M4 17l4-4a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 0 2.8 0l4-4" /></svg>
      </div>
      <div className="p-6">
        <h2 className="font-semibold text-lg font-mono tracking-wide text-white group-hover:text-cyan-300 transition-colors mb-1">{title}</h2>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </Link>
  );
}

export default function Photography() {
  return (
    <main className="flex flex-col gap-10 bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      <section className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-6 sm:p-10 shadow-md mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <h1 className="text-4xl font-bold font-mono tracking-wider drop-shadow-sm text-center text-cyan-300">
            Photography
          </h1>
          <a
            href="https://www.instagram.com/pryce_tharpe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold shadow-md hover:brightness-110 transition-colors text-base"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
            Instagram
          </a>
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <li key={event.slug}>
              <EventCard title={event.title} desc={event.desc} href={`/photography/${event.slug}`} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
} 