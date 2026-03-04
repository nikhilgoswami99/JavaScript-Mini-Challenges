const challenges = [
  {
    title: "Counter App",
    description: "Practice DOM updates by incrementing, decrementing, and resetting a counter.",
    level: "Beginner",
    tag: "DOM",
  },
  {
    title: "Accordion FAQ",
    description: "Build an accessible accordion with smooth open/close interactions.",
    level: "Beginner",
    tag: "UI",
  },
  {
    title: "Debounced Search",
    description: "Create a search box that waits for user pause before firing requests.",
    level: "Intermediate",
    tag: "Performance",
  },
  {
    title: "Infinite Scroll",
    description: "Load paginated content on scroll while handling loading and end states.",
    level: "Intermediate",
    tag: "Async",
  },
  {
    title: "Kanban Board",
    description: "Drag and drop tasks across columns and persist state in local storage.",
    level: "Advanced",
    tag: "State",
  },
  {
    title: "Theme Switcher",
    description: "Implement light/dark mode with preference persistence and transitions.",
    level: "Beginner",
    tag: "UX",
  },
];

const stats = [
  { label: "Challenges", value: "40+" },
  { label: "Difficulty levels", value: "3" },
  { label: "Focused skills", value: "10+" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto max-w-6xl px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <nav className="mb-14 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <p className="text-sm font-semibold tracking-wider text-cyan-300">JS MINI CHALLENGES</p>
          <a
            href="#challenges"
            className="rounded-full border border-cyan-300/50 px-4 py-1.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
          >
            Browse
          </a>
        </nav>

        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-fuchsia-300/40 bg-fuchsia-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-fuchsia-200">
              Build fast. Learn deeply.
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              A playground of JavaScript Mini Challenges
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Sharpen your JavaScript through bite-sized projects inspired by real UI patterns and
              interview-style problems. Pick a challenge, build it, and level up one concept at a
              time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#challenges"
                className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Start Challenges
              </a>
              <a
                href="https://github.com"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Source
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-200/20 bg-gradient-to-br from-cyan-300/20 via-indigo-300/10 to-fuchsia-300/20 p-6 shadow-2xl shadow-cyan-900/30">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <article key={stat.label} className="rounded-2xl bg-slate-900/80 p-5 ring-1 ring-white/10">
                  <p className="text-3xl font-bold text-cyan-200">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </header>

      <main id="challenges" className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Featured Challenges</h2>
            <p className="mt-2 text-slate-300">Pick one and start coding in under 5 minutes.</p>
          </div>
          <p className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
            New challenges every week
          </p>
        </div>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <article
              key={challenge.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/10"
            >
              <div className="mb-4 flex items-center justify-between text-xs">
                <span className="rounded-full bg-cyan-300/15 px-2.5 py-1 font-semibold text-cyan-200">
                  {challenge.tag}
                </span>
                <span className="text-slate-300">{challenge.level}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{challenge.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{challenge.description}</p>
              <button className="mt-5 text-sm font-semibold text-fuchsia-200 transition group-hover:text-fuchsia-100">
                Solve Challenge →
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
